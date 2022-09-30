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

```tsx
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

```tsx
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
      "primaryColor": "#00ACC1",
      "primaryColorHover": "#00838F",
      "primaryColorDisabled": "#006064",
      "primaryColorBackground": "#B2EBF2",
      "secondaryColor": "#455A64",
      "secondaryColorHover": "#37474F",
      "secondaryColorDisabled": "#263238",
      "neutralColor": "#FFFFFF",
      "shadowColor": "#00000040",
      "stateSuccessColor": "#4CAF50",
      "stateNeutralColor": "#607D8B",
      "stateErrorColor": "#F44336",
      "textFieldBorderColor": "#888"
    },
    "spacings": {
      "padding": "12px",
      "paddingSmall": "8px",
      "paddingLarge": "16px",
      "margin": "12px",
      "marginSmall": "8px",
      "marginLarge": "16px",
      "borderRadius": "4px",
      "gap": "8px",
      "gapSmall": "4px",
      "gapLarge": "12px",
      "textFieldBorderWidth": "1px",
      "textFieldBorderWidthFocus": "2px"
    },
    "others": {
      "shadowDims": "0 0 6px 0",
      "shadowDimsLight": "0 0 3px 0",
      "shadowDimsHeavy": "0 0 10px 0",
      "buttonBorder": "none"
    }
  }
}
```

## License

MIT © [shmshrivastava](https://github.com/shmshrivastava)
