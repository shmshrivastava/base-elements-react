import React from 'react';
import { components, propTypes } from './componentsConfigData';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  base16AteliersulphurpoolLight,
  vscDarkPlus
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ReactComponent as CopyIcon } from './icons/ContentCopy.svg';
import { ReactComponent as DoneIcon } from './icons/Done.svg';
import { ClickableIcon } from 'base-elements-react';

interface ComponentConfig {
  comp: string;
  props?: any;
}

const INDENT_SPACES = 2;

export function ComponentGenerator({
  compConfig
}: {
  compConfig: ComponentConfig;
}) {
  const RenderComponent = components[compConfig.comp] || 'div';
  const renderProps = { ...compConfig.props };
  delete renderProps.children;

  let children = compConfig.props.children || [];

  Object.keys(propTypes[compConfig.comp]).forEach((prop) => {
    if (
      propTypes[compConfig.comp][prop].type === 'function' &&
      renderProps[prop]
    ) {
      renderProps[prop] = eval(renderProps[prop]);
    }
  });
  if (!children || children.length === 0) {
    return <RenderComponent {...renderProps} />;
  }
  return (
    <RenderComponent {...renderProps}>
      {Array.isArray(children)
        ? children.map((child: ComponentConfig) => (
            <ComponentGenerator compConfig={child} />
          ))
        : children}
    </RenderComponent>
  );
}

function getJSX(compConfig: ComponentConfig, level: number = 0): string {
  let attributes: string[] = [];
  const indentation = Array(level * INDENT_SPACES + 1).join(' ');
  if (typeof compConfig !== 'object' || !compConfig.comp) {
    return `${indentation}${compConfig}`;
  }
  const childrenIndentation = Array((level + 1) * INDENT_SPACES + 1).join(' ');
  const hasChildren =
    compConfig.props.children && compConfig.props.children.length > 0;
  Object.keys(compConfig.props || {}).forEach((prop) => {
    if (prop === 'children') {
      return;
    }
    let value = '""';
    if (
      (propTypes[compConfig.comp][prop] &&
        propTypes[compConfig.comp][prop].type === 'function') ||
      typeof compConfig.props[prop] !== 'string'
    ) {
      value = `{${compConfig.props[prop]}}`;
    } else {
      value = `"${compConfig.props[prop]}"`;
    }
    attributes.push(`${prop}=${value}`);
  });
  let openingTag =
    indentation +
    '<' +
    compConfig.comp +
    ' ' +
    attributes.join(' ') +
    (hasChildren ? '' : ' /') +
    '>';
  if (openingTag.length > 80) {
    openingTag =
      indentation +
      '<' +
      compConfig.comp +
      `\n${childrenIndentation}` +
      attributes.join(`\n${childrenIndentation}`) +
      (hasChildren ? '' : ' /') +
      `\n${indentation}>`;
  }
  let closingTag = hasChildren ? `</${compConfig.comp}>` : '';
  const children = compConfig.props.children || [];
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
          .map((child: ComponentConfig) => getJSX(child, level + 1))
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

function getAllComponentNames(compConfig: ComponentConfig) {
  if (typeof compConfig !== 'object') {
    return [];
  }
  if (
    !compConfig.props.children ||
    typeof compConfig.props.children !== 'object'
  ) {
    return [compConfig.comp];
  }
  return [
    compConfig.comp,
    ...(compConfig.props.children || []).map((comp: ComponentConfig) =>
      getAllComponentNames(comp)
    )
  ];
}

export function ComponentJSX({ compConfig }: { compConfig: ComponentConfig }) {
  const theme = 'light';
  const styleProp =
    theme === 'light'
      ? { style: base16AteliersulphurpoolLight }
      : { style: vscDarkPlus };
  const customStyleAux =
    theme === 'light' ? { backgroundColor: '#F5F8FA', border: 'none' } : {};

  const importComponents = removeDuplicates(
    getAllComponentNames(compConfig).flat(Infinity)
  );
  const compJsx = `export function MyComponent(){\n  return (\n${getJSX(
    compConfig,
    2
  )}\n  )\n}`;
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
