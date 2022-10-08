# base-elements-react

> Fully customizable React UI elements library

[![NPM](https://img.shields.io/npm/v/base-elements-react.svg)](https://www.npmjs.com/package/base-elements-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save base-elements-react
```

## Usage

### Importing component

Import any component from `'base-elements-react'`.

Import css file separately

```jsx
import React, { Component } from 'react'

import Button from 'base-elements-react'
import 'base-elements-react/dist/index.css'

class Example extends Component {
  render() {
    return <Button>Click Here<Button>
  }
}
```

### Using custom theme

Use custom themes by wrapping components with `ThemeWrapper`.

You can pass theme jsons to `ThemeWrapper` component.

The theme json creates css variables on your root element. These variables are then referred throughout the library.

These css variables do not replace existing root variables. So if required css variables are already set in the root element, then this approach can be skipped.

```jsx
import React from 'react';

import 'base-elements-react/dist/index.css';
import { Button, ThemeWrapper } from 'base-elements-react/dist';

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

const App = () => {
  return (
    <ThemeWrapper themes={themes} currentThemeId='light'>
      <Button>Click Here</Button>
    </ThemeWrapper>
  );
};
```

**Default theme**

```json
{
  "id": "default",
  "vars": {
    "colors": {
      "fontColor": "#000",
      "fontColorLight": "#222",
      "fontColorLighter": "#555",
      "fontColorInverted": "#FFFFFF",
      "primaryColor": "#00BCD4",
      "primaryColorHover": "#0097A7",
      "primaryColorDisabled": "#80DEEA",
      "primaryColorBackground": "#B2EBF2",
      "secondaryColor": "#607D8B",
      "secondaryColorHover": "#546E7A",
      "secondaryColorDisabled": "#90A4AE",
      "dangerColor": "#F44336",
      "dangerColorHover": "#D32F2F",
      "dangerColorDisabled": "#E57373",
      "neutralColor": "#FFFFFF",
      "neutralColorHover": "#F5F5F5",
      "codeBackgroundColor": "#aeaeae40",
      "shadowColor": "#00000030",
      "shadowColorHeavy": "#00000040",
      "stateSuccessColor": "#4CAF50",
      "stateNeutralColor": "#607D8B",
      "stateErrorColor": "#F44336",
      "textFieldBorderColor": "#88888888"
    },
    "spacings": {
      "padding": "12px",
      "paddingSmall": "8px",
      "paddingLarge": "16px",
      "margin": "12px",
      "marginSmall": "8px",
      "marginLarge": "16px",
      "borderRadius": "4px",
      "gap": "12px",
      "gapSmall": "8px",
      "gapSmaller": "4px",
      "gapLarge": "16px",
      "gapLarger": "24px"
    },
    "others": {
      "shadowDims": "0 0 6px 0",
      "shadowDimsLight": "0 0 3px 0",
      "shadowDimsHeavy": "0 0 10px 0",
      "labelFontWeight": "normal",
      "requiredMarker": "*",
      "textFieldBorderWidth": "1px",
      "textFieldBorderWidthFocus": "2px",
      "checkboxWidth": "16px",
      "checkboxWidthLarge": "24px",
      "headingMargin": "0 0 0.67em",
      "paragraphMargin": "0"
    }
  }
}
```

## Components

### Button

Renders styled html `<button>` element

```jsx
import React, { Component } from 'react';

import Button from 'base-elements-react/Button';
import 'base-elements-react/dist/index.css';

class Example extends Component {
  render() {
    return (
      <Button onClick={() => console.log('Button clicked')}>Click Here</Button>
    );
  }
}
```

#### Props

Accepts all html `<button>` props such as `onClick`, `className` etc.

| Name       | Possible Values                               | Default Value | Description                        |
| ---------- | --------------------------------------------- | ------------- | ---------------------------------- |
| appearance | `'primary'`, `'secondary'` , `'danger'`       | `'primary'`   | Appearance of the button           |
| variation  | `'plain'`, `'outline'` , `'plainWithPadding'` | `undefined`   | Appearance variation of the button |
| disabled   | `true`, `false`                               | false         | Make the button disabled           |

### FormField

Renders styled html `<div>` element with label, error and children.

```jsx
import React, { Component } from 'react'

import FormField from 'base-elements-react/FormField'
import 'base-elements-react/dist/index.css'

class Example extends Component {
  render() {
    return <FormField label={"Render a labeled input"}>
      <input>
    </FormField>
  }
}
```

#### Props

| Name          | Possible Values                           | Default Value | Description                         |
| ------------- | ----------------------------------------- | ------------- | ----------------------------------- |
| label         | any string                                | ''            | Label for the field                 |
| labelPosition | `'top'`, `'right'` , `'bottom'`, `'left'` | `'top'`       | Position of the label               |
| error         | any string                                | ''            | Error to be displayed for the field |
| required      | `true`, `false`                           | `false`       | If the form field is reuqired       |

### Input

Renders styled html `<input>` element

```jsx
import React, { Component, useState } from 'react'

import Input from 'base-elements-react/TextField'
import 'base-elements-react/dist/index.css'

class Example extends Component {
  const [value, setValue] = useState('');
  render() {
    return <Input value={value} onChange={(e) => setValue(e.target.value)} />
  }
}
```

### TextArea

Renders styled html `<textarea>` element

```jsx
import React, { Component, useState } from 'react'

import TextArea from 'base-elements-react/TextField'
import 'base-elements-react/dist/index.css'

class Example extends Component {
  const [value, setValue] = useState('');
  render() {
    return <TextArea value={value} onChange={(e) => setValue(e.target.value)} />
  }
}
```

### TextField

Formfield with child element as Input or TextArea component.

```jsx
import React, { Component } from 'react';

import TextField from 'base-elements-react/TextField';
import 'base-elements-react/dist/index.css';

class Example extends Component {
  const [value, setValue] = useState('');
  render() {
    return (
      <TextField label='Enter your name' value={value} onChange={(e) => setValue(e.target.value)} />
    );
  }
}
```

#### Props

Accepts all FormField props - `label`, `labelPosition` and `error`

| Name      | Possible Values | Default Value | Description                                          |
| --------- | --------------- | ------------- | ---------------------------------------------------- |
| multiline | `true`, `false` | false         | Renders textarea if true, otherwise renders an input |

### Checkbox

Renders styled html `<input>` element with `type='checkbox'`

```jsx
import React, { Component, useState } from 'react'

import Checkbox from 'base-elements-react/CheckBox'
import 'base-elements-react/dist/index.css'

class Example extends Component {
  const [checked, setChecked] = useState(false);
  render() {
    return <Checkbox
              checked={checked}
              onChange={(e: SyntheticEvent<EventTarget>) =>
                setChecked((e.target as HTMLInputElement).checked)
              }
            />
  }
}
```

#### Props

Accepts all input props

| Name        | Possible Values       | Default Value | Description          |
| ----------- | --------------------- | ------------- | -------------------- |
| checked     | `true`, `false`       | false         | Checked state        |
| sizeVariant | `'normal'`, `'large'` | `'normal'`    | Size of the checkbox |

### CheckboxField

Checkbox component wrapped in FormField

```jsx
import React, { Component, useState } from 'react'

import CheckboxField from 'base-elements-react/CheckBox'
import 'base-elements-react/dist/index.css'

class Example extends Component {
  const [checked, setChecked] = useState(false);
  render() {
    return <CheckboxField
              checked={checked}
              onChange={(e: SyntheticEvent<EventTarget>) =>
                setChecked((e.target as HTMLInputElement).checked)
              }
              label="This is a checkbox"
            />
  }
}
```

#### Props

Accepts all FormField and Checkbox props

### Select

Renders a select dropdown. Does not use the native html select element.

```jsx
import React, { Component, useState } from 'react'

import Select from 'base-elements-react/Select'
import 'base-elements-react/dist/index.css'
import { ReactComponent as StarIcon } from '../icons/star.svg';

class Example extends Component {
  const [value, setValue] = useState();
  render() {
    return <Select
        value={value}
        onValueChange={setValue}
        placeholder={'Select something?'}
      >
        <SelectOption value='op1'>Option 1 as string</SelectOption>
        <SelectOption value='op2'>Option 2 as string</SelectOption>
        <SelectOption value='star'>
          <HorizontalStack itemsVerticalAlignment='center'>
            <StarIcon /> Option with component
          </HorizontalStack>
        </SelectOption>
      </Select>
  }
}
```

#### Props

Accepts all input props

| Name          | Possible Values         | Default Value | Description                                                    |
| ------------- | ----------------------- | ------------- | -------------------------------------------------------------- |
| onValueChange | (value) => {}           | (value) => {} | Callback function when a value is selected                     |
| value         | current selected value  | first option  | Currently selected value                                       |
| placeholder   | any string or ReactNode | null          | Rendered as first item in the option list. Selected by default |

## License

MIT © [shmshrivastava](https://github.com/shmshrivastava)
