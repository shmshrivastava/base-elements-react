import React, { SyntheticEvent, useState } from 'react';
import './App.css';
import { ReactComponent as StarIcon } from './icons/star.svg';

import 'base-elements-react/dist/index.css';
import {
  Button,
  TextField,
  ThemeWrapper,
  Checkbox,
  CheckboxField,
  Select,
  SelectOption,
  Card,
  Popover
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
      <Button onClick={() => console.log('Primary Button Clicked')}>
        Primary
      </Button>{' '}
      <Button
        onClick={() => console.log('Secondary Button Clicked')}
        appearance='secondary'
      >
        Secondary
      </Button>{' '}
      <Button
        onClick={() => console.log('Danger Button Clicked')}
        appearance='danger'
      >
        Secondary
      </Button>{' '}
      <Button
        onClick={() => console.log('Outline Button Clicked')}
        appearance='outline'
      >
        Outline
      </Button>{' '}
      <Button onClick={() => console.log('Plain Button Clicked')} plain>
        Plain
      </Button>{' '}
      <Button
        appearance='secondary'
        onClick={() => console.log('Plain Button Clicked')}
        plain
      >
        Plain Secondary
      </Button>{' '}
      <Button onClick={() => console.log('Primary Button Clicked')} disabled>
        Primary Disabled
      </Button>
    </ComponentDemo>
  );
}

function TextFieldDemo() {
  const [singleLineValue, setSingleLineValue] = useState<string>('');
  const [multiLineValue, setMultiLineValue] = useState('');
  return (
    <ComponentDemo>
      <TextField
        label='Form Field 1'
        error='Invalid data'
        placeholder='Single line data'
        required
        value={singleLineValue}
        onChange={(e: SyntheticEvent<EventTarget>) =>
          setSingleLineValue((e.target as HTMLInputElement).value)
        }
      />
      <br />
      <TextField
        multiline
        label='Form Field 2'
        error='Invalid data'
        value={multiLineValue}
        onChange={(e: SyntheticEvent<EventTarget>) =>
          setMultiLineValue((e.target as HTMLInputElement).value)
        }
      />
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
      <br />
      <CheckboxField
        checked={checked}
        onChange={(e: SyntheticEvent<EventTarget>) =>
          setChecked((e.target as HTMLInputElement).checked)
        }
        label='A checkbox'
      />
    </ComponentDemo>
  );
}

function SelectDemo() {
  const [value, setValue] = useState<string | undefined | null>(null);
  return (
    <ComponentDemo>
      <Select value={value} onValueChange={setValue}>
        <SelectOption value='apple'>Apple</SelectOption>
        <SelectOption value='mango'>Mango</SelectOption>
        <SelectOption value='star'>
          <div style={{ backgroundColor: 'red' }}>
            <StarIcon /> Star
          </div>
        </SelectOption>
      </Select>
    </ComponentDemo>
  );
}

function CardDemo() {
  return (
    <ComponentDemo>
      <Card elevation='low'>Low card component :p</Card>
      <br />
      <Card>Normal card component :p</Card>
      <br />
      <Card elevation='high'>High card component :p</Card>
    </ComponentDemo>
  );
}

function PopoverDemo() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <ComponentDemo>
      <Popover
        anchor={<Button onClick={() => setOpen(!open)}>Toggle Popover</Button>}
        open={open}
      >
        Hello!
      </Popover>
    </ComponentDemo>
  );
}

const App = () => {
  return (
    <div className='App'>
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        Base Elements React - Demo <StarIcon />
      </div>
      <br />
      <ThemeWrapper themes={themes} currentThemeId='light'>
        <ButtonDemo />
        <TextFieldDemo />
        <CheckboxDemo />
        <SelectDemo />
        <CardDemo />
        <PopoverDemo />
      </ThemeWrapper>
    </div>
  );
};

export default App;
