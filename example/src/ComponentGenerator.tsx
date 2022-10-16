import React from 'react';
import { components, propTypes } from './componentsConfigData';

interface ComponentConfig {
  comp: string;
  props?: any;
}

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
  const indentation = Array(level * 4 + 1).join(' ');
  if (typeof compConfig !== 'object' || !compConfig.comp) {
    return `${indentation}${compConfig}`;
  }
  const childrenIndentation = Array((level + 1) * 4 + 1).join(' ');
  const hasChildren = compConfig.props.children.length > 0;
  Object.keys(compConfig.props || {}).forEach((prop) => {
    if (prop === 'children') {
      return;
    }
    let value = '""';
    if (
      propTypes[compConfig.comp][prop].type === 'function' ||
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
    (hasChildren ? '' : '/') +
    '>';
  if (openingTag.length > 80) {
    openingTag =
      indentation +
      '<' +
      compConfig.comp +
      `\n${childrenIndentation}` +
      attributes.join(`\n${childrenIndentation}`) +
      (hasChildren ? '' : '/') +
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
          .join(`\n${indentation}`)
      : childrenIndentation + children
  }${hasChildren ? '\n' : ''}${closingTag}`;
}

export function ComponentJSX({ compConfig }: { compConfig: ComponentConfig }) {
  const jsx = getJSX(compConfig, 0);
  return (
    <p
      style={{
        whiteSpace: 'pre-wrap',
        background: 'var(--shadowColor)',
        padding: 'var(--padding)',
        borderRadius: 'var(--borderRadius)',
        width: 'fit-content'
      }}
    >
      {jsx}
    </p>
  );
}
