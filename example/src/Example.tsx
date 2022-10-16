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
    children: [
      {
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
          gap: 'nogap'
        }
      }
    ]
  }
};

function Example() {
  // const [open, setOpen] = useState<boolean>(false);
  // const jsx = getJSX(config, 0);
  // console.log({ components, config, jsx });
  return (
    <div>
      <ComponentGenerator compConfig={config} />
      <br />
      <ComponentJSX compConfig={config} />
    </div>
  );
}

export default Example;
