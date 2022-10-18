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
              comp: 'TextField',
              props: {
                label: '"Trying text field"',
                value: 'name',
                onChange: '(e) => setName(e.target.value)'
              }
          },
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
                checked: 'checked',
                onChange: '() => setChecked(!checked)'
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
                variation: '"filled"',
                onClick: '() => { setOpen(!open); setShowModal(!showModal) }'
              }
            }
          ],
          itemsVerticalAlignment: '"center"',
          gap: '"nogap"',
          vertical: 'true',
          itemsHorizontalAlignment: '"left"'
        }
      },
      {
        comp: 'Modal',
        props: {
          title: '"Hello World"',
          children: '"Wasssuppp"',
          open: 'showModal',
          addFloatingCloseAction: 'true',
          onClose: '() => setShowModal(false)'
        }
      },
      {
        comp: 'DataTable',
        props: {
          columns: '[{key: "name", label: "Name"}, {key: "age", label: "Age"}]',
          data: '[{name: "John", age: 25}, {name: "Jane", age: 25}]'
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
  },
  checked: {
    default: true
  },
  showModal: {
    default: false
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
