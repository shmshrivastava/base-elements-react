import React, { useState } from 'react';
import { components, propTypes } from './componentsConfigData';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  base16AteliersulphurpoolLight,
  vscDarkPlus
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ReactComponent as CopyIcon } from './icons/ContentCopy.svg';
import { ReactComponent as DoneIcon } from './icons/Done.svg';
import { ClickableIcon } from 'base-elements-react';
import { getScopedEval } from './scopedEval';

interface ComponentTree {
  comp: string;
  props?: any;
}

interface ComponentState {
  [key: string]: {
    default: any;
  };
}

const INDENT_SPACES = 2;

// Function(`"use strict"; return ${script}`).bind(scope)();

function getChildrenValue(compTree: ComponentTree, scopedEval?: any) {
  const children = compTree.props?.children;
  if (typeof children === 'string') {
    return scopedEval(children);
  }
  return children || [];
}

function ComponentTreeGenerator({
  compTree,
  scopedEval
}: {
  compTree: ComponentTree;
  scopedEval: any;
}) {
  const RenderComponent = components[compTree.comp] || 'div';
  const renderProps = { ...compTree.props };
  delete renderProps.children;
  let children = getChildrenValue(compTree, scopedEval);

  Object.keys(propTypes[compTree.comp]).forEach((prop) => {
    if (
      prop !== 'children' &&
      typeof renderProps[prop] === 'string' &&
      renderProps[prop]
    ) {
      renderProps[prop] = scopedEval(renderProps[prop]);
    }
  });
  if (!children || children.length === 0) {
    return <RenderComponent {...renderProps} />;
  }
  return (
    <RenderComponent {...renderProps}>
      {Array.isArray(children)
        ? children.map((child: ComponentTree) => (
            <ComponentTreeGenerator compTree={child} scopedEval={scopedEval} />
          ))
        : children}
    </RenderComponent>
  );
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function ComponentGenerator({
  compTree,
  compState
}: {
  compTree: ComponentTree;
  compState: ComponentState;
}) {
  const scope = {};
  const stateKeys = Object.keys(compState);
  for (let i = 0; i < stateKeys.length; i++) {
    const key = stateKeys[i];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const keyState = useState(compState[key].default);
    scope[key] = keyState[0];
    scope[`set${capitalizeFirstLetter(key)}`] = keyState[1];
  }

  const scopedEval = getScopedEval(scope);

  // makingScopedEval.call(scope);

  return <ComponentTreeGenerator compTree={compTree} scopedEval={scopedEval} />;
}

function stringifiedStatement(stringScript: string, withQuotes: boolean) {
  const stringQuote = stringScript[0];
  if (stringQuote !== '"' && stringQuote !== "'") {
    return `{${stringScript}}`;
  }
  if (stringScript[stringScript.length - 1] !== stringQuote) {
    return `{${stringScript}}`;
  }
  if (stringScript.split(stringQuote).length > 3) {
    return `{${stringScript}}`;
  }
  return `${withQuotes ? "'" : ''}${stringScript.split(stringQuote)[1]}${
    withQuotes ? "'" : ''
  }`;
}

function getAttributesFromConfig(compTree: ComponentTree) {
  let attributes: string[] = [];
  Object.keys(compTree.props || {}).forEach((prop) => {
    if (prop === 'children') {
      return;
    }
    let value = stringifiedStatement(compTree.props[prop], true);
    attributes.push(`${prop}=${value}`);
  });
  return attributes;
}

function getJSX(compTree: ComponentTree, level: number = 0): string {
  const indentation = Array(level * INDENT_SPACES + 1).join(' ');
  if (typeof compTree !== 'object' || !compTree.comp) {
    return `${indentation}${compTree}`;
  }
  const childrenIndentation = Array((level + 1) * INDENT_SPACES + 1).join(' ');
  const hasChildren =
    compTree.props.children && compTree.props.children.length > 0;
  let attributes: string[] = getAttributesFromConfig(compTree);
  let openingTag =
    indentation +
    '<' +
    compTree.comp +
    ' ' +
    attributes.join(' ') +
    (hasChildren ? '' : ' /') +
    '>';
  if (openingTag.length > 80) {
    openingTag =
      indentation +
      '<' +
      compTree.comp +
      `\n${childrenIndentation}` +
      attributes.join(`\n${childrenIndentation}`) +
      (hasChildren ? '' : ' /') +
      `\n${indentation}>`;
  }
  let closingTag = hasChildren ? `</${compTree.comp}>` : '';
  const children =
    typeof compTree.props?.children === 'string'
      ? stringifiedStatement(compTree.props?.children, false)
      : compTree.props?.children || [];
  if (
    !Array.isArray(children) &&
    openingTag.length + closingTag.length + children.length < 80
  ) {
    return `${openingTag}${children}${closingTag}`;
  }
  closingTag = indentation + closingTag;
  return `${openingTag}${hasChildren ? '\n' : ''}${
    Array.isArray(children)
      ? children
          .map((child: ComponentTree) => getJSX(child, level + 1))
          .join(`\n`)
      : childrenIndentation + children
  }${hasChildren ? '\n' : ''}${closingTag}`;
}

function CodeCopy({ content }: { content: string }) {
  const [copied, setCopied] = React.useState(false);
  const copytoClipboard = function (content: string) {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <ClickableIcon
      className='code-copy'
      onClick={(_) => copytoClipboard(content)}
    >
      {copied ? <DoneIcon /> : <CopyIcon />}
    </ClickableIcon>
  );
}

function removeDuplicates(arr: string[]) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

function getAllComponentNames(compTree: ComponentTree) {
  if (typeof compTree !== 'object') {
    return [];
  }
  if (!compTree.props.children || typeof compTree.props.children !== 'object') {
    return [compTree.comp];
  }
  return [
    compTree.comp,
    ...(compTree.props.children || []).map((comp: ComponentTree) =>
      getAllComponentNames(comp)
    )
  ];
}

export function ComponentJSX({
  compTree,
  compState
}: {
  compTree: ComponentTree;
  compState: ComponentState;
}) {
  const theme = 'light';
  const styleProp =
    theme === 'light'
      ? { style: base16AteliersulphurpoolLight }
      : { style: vscDarkPlus };
  const customStyleAux =
    theme === 'light' ? { backgroundColor: '#F5F8FA', border: 'none' } : {};

  const importComponents = removeDuplicates(
    getAllComponentNames(compTree).flat(Infinity)
  );

  const stateDeclares = [];

  const stateKeys = Object.keys(compState);
  for (let i = 0; i < stateKeys.length; i++) {
    const key = stateKeys[i];
    stateDeclares.push(
      `  const [${key}, set${capitalizeFirstLetter(
        key
      )}] = React.useState(${JSON.stringify(compState[key].default)});\n`
    );
  }
  const compJsx = `export function MyComponent(){\n${stateDeclares.join(
    ''
  )}  return (\n${getJSX(compTree, 2)}\n  )\n}`;
  const jsx =
    importComponents.length > 0
      ? `import React from 'react';\nimport { ${importComponents.join(
          ', '
        )} } from 'base-elements-react';\n\n${compJsx}`
      : compJsx;
  return (
    <div
      style={{
        width: 'fit-content'
      }}
    >
      <div className='block-code-parent'>
        <SyntaxHighlighter
          children={jsx}
          language={'jsx'}
          PreTag='div'
          customStyle={{
            padding: '10px',
            borderRadius: '5px',
            fontSize: '85%',
            lineHeight: 1.4,
            ...customStyleAux
          }}
          {...styleProp}
        />
        <CodeCopy content={jsx} />
      </div>
    </div>
  );
}
