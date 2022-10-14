# base-elements-react

> Fully customizable React UI elements library

[![NPM](https://img.shields.io/npm/v/base-elements-react.svg)](https://www.npmjs.com/package/base-elements-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Documentation

### [Components](https://www.markdit.com/shivam/base-elements-react-components)

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

**[Docs](https://www.markdit.com/shivam/base-elements-react-components)**

### Button

Renders styled html `<button>` element

```jsx
import React, { Component } from 'react';

import { Button } from 'base-elements-react';
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

#### Extended Components

- ClickableIcon

  Variation of Button component which has appearance as `'secondary'`, variation as `'plainWithPadding'` and has padding of `var(--paddingSmall)`

### Text

```jsx
import React, { Component } from 'react';

import { Text } from 'base-elements-react';
import 'base-elements-react/dist/index.css';

class Example extends Component {
  render() {
    return <Text>A block text</Text>;
  }
}
```

#### Props

| Name      | Possible Values                                                 | Default Value | Description               |
| --------- | --------------------------------------------------------------- | ------------- | ------------------------- |
| element   | `'h1'`, `'h2'`, `'h3'`, `'h4'`, `'h5'`, `'h6'`, `'p'`, `'span'` | `'p'`         | Type of element to render |
| variation | `'strong'`, `'emphasis'`, `'subdued'`, `'code'`, `'auto'`       | `auto`        | Variation of the text     |

#### Extended Components

- PageTitle

  Variation of Text component which has element as `'h1'`

- SectionHeading

  Variation of Text component which has element as `'h2'`

- SubSectionHeading

  Variation of Text component which has element as `'h3'`

- ComponentTitle

  Variation of Text component which has element as `'h3'`

- InlineText

  Variation of Text component which has element as `'span'`

- InlineCode

  Variation of Text component which has variation as `'code'`

```jsx
import React, { Component } from 'react';

import {
  Text,
  PageTitle,
  SectionHeading,
  SubSectionHeading,
  InlineCode,
  VerticalStack
} from 'base-elements-react';
import 'base-elements-react/dist/index.css';

class Example extends Component {
  render() {
    return (
      <VerticalStack>
        <PageTitle>New Page</PageTitle>
        <SectionHeading>Component Details</SectionHeading>
        <SubSectionHeading>Button</SubSectionHeading>
        <Text>
          Button is a styled <InlineCode>&lt;button&gt;</InlineCode> element
        </Text>
      </VerticalStack>
    );
  }
}
```

### FormField

Renders styled html `<div>` element with label, error and children.

```jsx
import React, { Component } from 'react';

import { FormField } from 'base-elements-react';
import 'base-elements-react/dist/index.css';

class Example extends Component {
  render() {
    return (
      <FormField label={'Render a labeled input'}>
        <input />
      </FormField>
    );
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
import React, { useState } from 'react';

import { Input } from 'base-elements-react';
import 'base-elements-react/dist/index.css';

function Example() {
  const [value, setValue] = useState();
  return <Input value={value} onChange={(e) => setValue(e.target.value)} />;
}
```

### TextArea

Renders styled html `<textarea>` element

```jsx
import React, { useState } from 'react';

import { TextArea } from 'base-elements-react';
import 'base-elements-react/dist/index.css';

function Example() {
  const [value, setValue] = useState('');
  return <TextArea value={value} onChange={(e) => setValue(e.target.value)} />;
}
```

### TextField

Formfield with child element as Input or TextArea component.

```jsx
import React, { useState } from 'react';

import { TextField } from 'base-elements-react';
import 'base-elements-react/dist/index.css';

function Example() {
  const [value, setValue] = useState('');
  return (
    <TextField
      label='Enter your name'
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
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
import React, { useState } from 'react';

import { Checkbox } from 'base-elements-react';
import 'base-elements-react/dist/index.css';

function Example() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
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
import React, { useState } from 'react';

import { CheckboxField } from 'base-elements-react';
import 'base-elements-react/dist/index.css';

function Example() {
  const [checked, setChecked] = useState(false);

  return (
    <CheckboxField
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
      label='This is a checkbox'
    />
  );
}
```

#### Props

Accepts all FormField and Checkbox props

### Select

Renders a select dropdown. Does not use the native html select element.

```jsx
import React, { useState } from 'react';

import {
  Select,
  SelectOption,
  HorizontalStack,
  Text
} from 'base-elements-react';
import 'base-elements-react/dist/index.css';

function Example() {
  const [value, setValue] = useState();

  return (
    <Select
      value={value}
      onValueChange={setValue}
      placeholder={'Select something?'}
    >
      <SelectOption value='op1'>Option 1 as string</SelectOption>
      <SelectOption value='op2'>Option 2 as string</SelectOption>
      <SelectOption value='star'>
        <HorizontalStack itemsVerticalAlignment='center'>
          <Text>
            Option with <Text variation='emphasis'>component</Text>
          </Text>
        </HorizontalStack>
      </SelectOption>
    </Select>
  );
}
```

#### Props

Accepts all input props

| Name          | Possible Values         | Default Value | Description                                                    |
| ------------- | ----------------------- | ------------- | -------------------------------------------------------------- |
| onValueChange | (value) => {}           | (value) => {} | Callback function when a value is selected                     |
| value         | current selected value  | first option  | Currently selected value                                       |
| placeholder   | any string or ReactNode | null          | Rendered as first item in the option list. Selected by default |

### Card

A container with shadow and padding

```jsx
import React from 'react';

import { Card } from 'base-elements-react';
import 'base-elements-react/dist/index.css';

function Example() {
  return <Card>A block text</Card>;
}
```

#### Props

| Name      | Possible Values               | Default Value | Description                  |
| --------- | ----------------------------- | ------------- | ---------------------------- |
| elevation | `'low'`, `'normal'`, `'high'` | `'normal'`    | Type of element to render    |
| noPadding | `true`, `false`               | false         | Removes card padding if true |

### Popover

A floating container and its controller

```jsx
mport React, { useState } from "react";

import { Popover, Button } from "base-elements-react";
import "base-elements-react/dist/index.css";

function Example() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  const close = () => setOpen(false);
  return (
    <Popover
      anchor={<Button onClick={toggleOpen}>Toggle Popover</Button>}
      open={open}
      onOutsideClick={close}
      xLocation="snap_left_edge"
      yLocation="bottom"
    >
      Hello!
    </Popover>
  );
}

```

#### Props

| Name           | Possible Values                                                                | Default Value | Description                                                                                          |
| -------------- | ------------------------------------------------------------------------------ | ------------- | ---------------------------------------------------------------------------------------------------- |
| anchor         | ReactNode                                                                      | undefined     | The react component which triggers popover on click                                                  |
| open           | `true`, `false`                                                                | false         | Shows popover container if true                                                                      |
| onOutsideClick | () => {}                                                                       |               | A callback function when user clicks outside the component. You can choose to toggle the `open` prop |
| xLocation      | `'snap_left_edge'`, `'center'`, `'snap_right_edge'`                            | `'center'`    | Location on x axis to render the popover                                                             |
| elevation      | `'top'`, `'top_cover_anchor'`, `'center'`, `'bottom_cover_anchor'`, `'bottom'` | `'center'`    | Location on y axis to render the popove                                                              |
| xOffset        | any number                                                                     | 0             | offsets the popover by pixels to the right                                                           |
| yOffset        | any number                                                                     | 0             | offsets the popover by pixels to the bottom                                                          |

### Table

```jsx
import React, { Component } from 'react';

import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell
} from 'base-elements-react';
import 'base-elements-react/dist/index.css';

class Example extends Component {
  render() {
    return (
      <Table hasRowDivider>
        <TableHead>
          <TableRow>
            <TableCell>Sr. no.</TableCell>
            <TableCell>Planet</TableCell>
            <TableCell>Distance from sun</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Mercury</TableCell>
            <TableCell>46.098 million km</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>Venus</TableCell>
            <TableCell>107.78 million km</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3</TableCell>
            <TableCell>Earth</TableCell>
            <TableCell>149.48 million km</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>4</TableCell>
            <TableCell>Mars</TableCell>
            <TableCell>219.16 million km</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}
```

#### Props

| Name             | Possible Values | Default Value | Description                                                                             |
| ---------------- | --------------- | ------------- | --------------------------------------------------------------------------------------- |
| hasBodyBorder    | `true`, `false` | false         | Shows border around the body                                                            |
| hasRowDivider    | `true`, `false` | false         | Shows divider between all rows except top of first row and bottom of last row           |
| hasColumnDivider | `true`, `false` | false         | Shows divider between all columns except lelft of first column and right of last column |
| headerCentered   | `true`, `false` | false         | Centers content of all header cells                                                     |
| fullWidth        | `true`, `false` | false         | makes width as `100%`                                                                   |

#### Extended Components

- TableDataCell

  Table cell that specifically renders `'td'` element

- TableHeaderCell

  Table cell that specifically renders `'th'` element

- TableHeadRow

  Renders as `<TableHead><TableRow>{children}</TableRow></TableHead>

### HeaderTable

Variant of Table component

```jsx
import React, { Component } from 'react';

import {
  HeaderTable,
  TableHeadRow,
  TableRow,
  TableCell
} from 'base-elements-react';
import 'base-elements-react/dist/index.css';

class Example extends Component {
  render() {
    return (
      <HeaderTable
        hasRowDivider
        header={
          <TableHeadRow>
            <TableCell>Sr. no.</TableCell>
            <TableCell>Planet</TableCell>
            <TableCell>Distance from sun</TableCell>
          </TableHeadRow>
        }
      >
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>Mercury</TableCell>
          <TableCell>46.098 million km</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>Venus</TableCell>
          <TableCell>107.78 million km</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3</TableCell>
          <TableCell>Earth</TableCell>
          <TableCell>149.48 million km</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>4</TableCell>
          <TableCell>Mars</TableCell>
          <TableCell>219.16 million km</TableCell>
        </TableRow>
      </HeaderTable>
    );
  }
}
```

#### Props

| Name   | Possible Values                              | Default Value | Description                    |
| ------ | -------------------------------------------- | ------------- | ------------------------------ |
| header | `TableHeadRow` or `TableHead` component node | undefined     | Renders as header of the table |

### Modal

A container with shadow and padding

```jsx
import React, { useState } from 'react';

import { Button, Modal, ModalHeader } from 'base-elements-react';
import 'base-elements-react/dist/index.css';

export function Example() {
  const [open, setOpen] = useState(false);
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <ModalHeader
        addCloseAction
        title='lorem ipsum text'
        onClose={() => setOpen(false)}
      >
        <Button variation='plain'>Save</Button>
      </ModalHeader>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
      in culpa qui officia deserunt mollit anim id est laborum.
    </Modal>
  );
}
```

#### Props

| Name                        | Possible Values                                                 | Default Value | Description                                                                                                                                                                                                                                                                                                                               |
| --------------------------- | --------------------------------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title                       | any string                                                      | ''            | Title of the modal. This renders a `ModalHeader` component .                                                                                                                                                                                                                                                                              |
| titleElement                | `'h1'`, `'h2'`, `'h3'`, `'h4'`, `'h5'`, `'h6'`, `'p'`, `'span'` | `'p'`         | Type of element to render for title                                                                                                                                                                                                                                                                                                       |
| open                        | `true`, `false`                                                 | false         | Shows modal if true                                                                                                                                                                                                                                                                                                                       |
| noPadding                   | `true`, `false`                                                 | false         | Removes card padding if true                                                                                                                                                                                                                                                                                                              |
| onClose                     | () => {}                                                        |               | A callback function when user clicks close action icon or clicks outside the component or presses escape button                                                                                                                                                                                                                           |
| disallowCloseOnOutsideClick | `true`, `false`                                                 | false         | If true, modal does not call props.onClose function if user clicks outside the modal                                                                                                                                                                                                                                                      |
| disallowCloseOnEscape       | `true`, `false`                                                 | false         | If true, modal does not call props.onClose function if user presses 'Escape' button on keyboard                                                                                                                                                                                                                                           |
| addFloatingCloseAction      | `true`, `false`                                                 | false         | If true, a clickable close icon is added on the modal. When user clicks this icon, `props.onClose` function is called                                                                                                                                                                                                                     |
| floatingCloseActionLocation | `'left'`, `'right'`                                             | `'right'`     | Location of floating close action button on the modal                                                                                                                                                                                                                                                                                     |
| floatingCloseActionXOffset  | number                                                          | `0`           | Offset the floating close icon in horizontal direction                                                                                                                                                                                                                                                                                    |
| floatingCloseActionYOffset  | number                                                          | `0`           | Offset the floating close icon in vertical direction                                                                                                                                                                                                                                                                                      |
| addFloatingCloseAction      | `true`, `false`                                                 | `false`       | If true, a clickable close icon is added on the modal header. When user clicks this icon, `props.onClose` function is called. The icon is only added in the header generated for title. The icon is not added if you explicitly add `ModalHeader` as a child of `Modal`. In that case, please add `onClose` prop to ModalHeader component |

### Link

Renders styled html `<a>` element

```jsx
import React from 'react';

import { Link } from 'base-elements-react';
import 'base-elements-react/dist/index.css';

export function Example() {
  // const [open, setOpen] = useState<boolean>(false);
  return (
    <Link href='https://www.example.com' target='_blank'>
      Go to example
    </Link>
  );
}

function MyAnchor(props) {
  return (
    <a className='hello' {...props}>
      {props.children}
    </a>
  );
}

export function ExampleTwo() {
  // const [open, setOpen] = useState<boolean>(false);
  return (
    <Link
      href='https://www.example.com'
      component={MyAnchor}
      variation='filled'
      target='_blank'
    >
      Go to example
    </Link>
  );
}
```

#### Props

Accepts all html `<a>` props such as `href`.

| Name             | Possible Values                                          | Default Value | Description                                                                                                                                                  |
| ---------------- | -------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| appearance       | `'primary'`, `'secondary'` , `'danger'`                  | `'primary'`   | Appearance of the link element                                                                                                                               |
| variation        | `'plain'`, `'outline'`, `'plainWithPadding'`, `'filled'` | `plain`       | Appearance variation of the link element                                                                                                                     |
| underline        | `true`, `false`                                          | false         | Show default underline on anchor tag                                                                                                                         |
| underlineOnHover | `true`, `false`                                          | false         | Show default underline on anchor tag on hover                                                                                                                |
| component        | Any React component                                      | `undefined`   | Link will render this component instead of default html anchor tag. This can be used to render react router's Link component with this Link component styles |

## License

MIT © [shmshrivastava](https://github.com/shmshrivastava)
