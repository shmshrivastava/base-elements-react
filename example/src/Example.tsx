import React from 'react';
import { ComponentGenerator, ComponentJSX } from './ComponentGenerator';

// import { propTypes } from './componentsConfigData';

// interface ComponentConfig {
//   comp: string;
//   props?: any;
// }

const componentTree = {
  comp: 'Page',
  props: {
    title: '"Config example"',
    children: [
      {
        comp: 'Stack',
        props: {
          children: [
            {
              comp: 'Button',
              props: {
                children: 'name',
                appearance: 'primary ? "secondary" : "primary"',
                variation: '"filled"',
                onClick: '() => { setPrimary(!primary) }'
              }
            }
          ],
          itemsVerticalAlignment: '"center"',
          gap: '"normal"',
          vertical: 'true',
          itemsHorizontalAlignment: '"left"'
        }
      }
    ]
  }
};

const componentState = {
  name: {
    default: 'John Doe'
  },
  primary: {
    default: true
  }
};

const componentVars = {
  className: '`customclass-${open ? "open" : "close"}`'
};

function Example() {
  console.log('dummy', componentState, componentVars);
  return (
    <div>
      <ComponentGenerator compTree={componentTree} compState={componentState} />
      <br />
      <ComponentJSX compTree={componentTree} compState={componentState} />
    </div>
  );
}

export default Example;
