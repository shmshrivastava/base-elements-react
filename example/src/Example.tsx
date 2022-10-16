import React from 'react';

import { Stack, Button, Text } from 'base-elements-react';
import 'base-elements-react/dist/index.css';

const components = {
  Stack: Stack,
  Button: Button,
  Text
};

interface ComponentConfig {
  comp: string;
  props?: any;
}

const config = {
  comp: 'Stack',
  props: {
    children: [
      {
        comp: 'Text',
        props: {
          children: 'A code',
          variation: 'code'
        }
      },
      {
        comp: 'Button',
        props: {
          children: 'Click here',
          appearance: 'secondary',
          variation: 'plainWithPadding',
          onClick: "() => console.log('buttonClicked')"
        }
      }
    ],
    itemsVerticalAlignment: 'center',
    gap: true
  }
};

const propTypes = {
  Stack: {
    itemsVerticalAlignment: {
      type: 'enum',
      options: ['top', 'center', 'bottom'],
      default: 'top'
    },
    gap: {
      type: 'enum',
      options: ['normal', 'small', 'smaller', 'large', 'larger', 'nogap'],
      default: 'normal'
    }
  },
  Button: {
    appearance: {
      type: 'enum',
      options: ['primary', 'secondary', 'danger'],
      default: 'primary'
    },
    variation: {
      type: 'enum',
      options: ['plain', 'outline', 'plainWithPadding'],
      default: undefined
    },
    onClick: {
      type: 'function'
    }
  },
  Text: {
    variation: {
      type: 'enum',
      options: ['strong', 'emphasis', 'subdued', 'code'],
      default: undefined
    }
  }
};

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
  const closingTag = indentation + (hasChildren ? `</${compConfig.comp}>` : '');
  const children = compConfig.props.children || [];
  return `${openingTag}${hasChildren ? '\n' : ''}${
    Array.isArray(children)
      ? children
          .map((child: ComponentConfig) => getJSX(child, level + 1))
          .join(`\n${indentation}`)
      : childrenIndentation + children
  }${hasChildren ? '\n' : ''}${closingTag}`;
}

function getCompTree(compConfig: ComponentConfig) {
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
        ? children.map((child: ComponentConfig) => getCompTree(child))
        : children}
    </RenderComponent>
  );
}

function Example() {
  // const [open, setOpen] = useState<boolean>(false);
  const jsx = getJSX(config, 0);
  // console.log({ components, config, jsx });
  return (
    <div>
      {getCompTree(config)}
      <br />
      <p style={{ whiteSpace: 'pre-wrap' }}>{jsx}</p>
    </div>
  );
}

export default Example;
