import React, { SyntheticEvent, useState } from 'react';
import './App.css';

import 'base-elements-react/dist/index.css';
import {
  Button,
  FormElement,
  TextField,
  ThemeWrapper,
  Checkbox
} from 'base-elements-react/dist';

const themes = [
  {
    id: 'light',
    vars: {
      colors: {
        primaryColor: '#29B6F6',
        primaryColorHover: '#03A9F4',
        primaryColorDisabled: '#4FC3F7',
        primaryColorBackground: '#E1F5FE'
      }
    }
  }
];

function ComponentDemo({ children }: React.PropsWithChildren) {
  return <div className='component-demo'>{children}</div>;
}

function ButtonDemo() {
  return (
    <ComponentDemo>
      <Button onClick={() => console.log('Button Clicked')}>Click Here</Button>
    </ComponentDemo>
  );
}

function TextFieldDemo() {
  const [singleLineValue, setSingleLineValue] = useState<string>('');
  const [multiLineValue, setMultiLineValue] = useState('');
  return (
    <ComponentDemo>
      <TextField
        value={singleLineValue}
        onChange={(e: SyntheticEvent<EventTarget>) =>
          setSingleLineValue((e.target as HTMLInputElement).value)
        }
      />
      <br />
      <TextField
        multiline
        value={multiLineValue}
        onChange={(e: SyntheticEvent<EventTarget>) =>
          setMultiLineValue((e.target as HTMLInputElement).value)
        }
      />
    </ComponentDemo>
  );
}

function FormElementDemo() {
  const [singleLineValue, setSingleLineValue] = useState<string>('');
  return (
    <ComponentDemo>
      <FormElement label='Form Field 1' error='Invalid data'>
        <TextField
          value={singleLineValue}
          onChange={(e: SyntheticEvent<EventTarget>) =>
            setSingleLineValue((e.target as HTMLInputElement).value)
          }
        />
      </FormElement>
    </ComponentDemo>
  );
}

function CheckboxDemo() {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <ComponentDemo>
      <Checkbox
        checked={checked}
        onChange={(e: SyntheticEvent<EventTarget>) =>
          setChecked((e.target as HTMLInputElement).checked)
        }
      />
    </ComponentDemo>
  );
}

const App = () => {
  return (
    <div className='App'>
      <div>Base Elements React - Demo</div>
      <br />
      <ThemeWrapper themes={themes} currentThemeId='light'>
        <ButtonDemo />
        <TextFieldDemo />
        <FormElementDemo />
        <CheckboxDemo />
      </ThemeWrapper>
    </div>
  );
};

export default App;
