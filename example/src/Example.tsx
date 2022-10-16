import React from 'react';
import { ComponentGenerator, ComponentJSX } from './ComponentGenerator';

// import { propTypes } from './componentsConfigData';

// interface ComponentConfig {
//   comp: string;
//   props?: any;
// }

const config = {
  comp: 'Card',
  props: {
    title: 'Config example',
    children: [
      {
        comp: 'Stack',
        props: {
          children: [
            {
              comp: 'Text',
              props: {
                children: 'A code',
                variation: 'strong'
              }
            },
            {
              comp: 'Checkbox',
              props: {
                checked: true
              }
            },
            {
              comp: 'Text',
              props: {
                children: 'A code',
                variation: 'strong',
                element: 'p',
                className: 'lorem-ipsum-dolar-sit-amet-howmuchlngcanyougo'
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
          gap: 'nogap',
          vertical: true,
          itemsHorizontalAlignment: 'left'
        }
      }
    ]
  }
};

function Example() {
  return (
    <div>
      <ComponentGenerator compConfig={config} />
      <br />
      <ComponentJSX compConfig={config} />
    </div>
  );
}

export default Example;
