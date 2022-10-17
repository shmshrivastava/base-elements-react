import React from 'react';
import { ComponentGenerator, ComponentJSX } from './ComponentGenerator';

// import { propTypes } from './componentsConfigData';

// interface ComponentConfig {
//   comp: string;
//   props?: any;
// }

const componentTree = {
  comp: 'Card',
  props: {
    title: '"Config example"',
    children: [
      {
        comp: 'Stack',
        props: {
          children: [
            {
              comp: 'Text',
              props: {
                children: '"A code"',
                variation: '"strong"'
              }
            },
            {
              comp: 'Checkbox',
              props: {
                checked: 'true'
              }
            },
            {
              comp: 'Text',
              props: {
                children: 'name',
                variation: '"strong"',
                element: '"p"',
                className: '"lorem-ipsum-dolar-sit-amet-howmuchlngcanyougo"'
              }
            },
            {
              comp: 'Button',
              props: {
                children: '"Click here"',
                appearance: 'open ? "secondary" : "primary"',
                variation: '"plainWithPadding"',
                onClick: '() => { setOpen(!open) }'
              }
            }
          ],
          itemsVerticalAlignment: '"center"',
          gap: '"nogap"',
          vertical: 'true',
          itemsHorizontalAlignment: '"left"'
        }
      }
    ]
  }
};

const componentState = {
  open: {
    default: false
  },
  name: {
    default: 'John Doe'
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
