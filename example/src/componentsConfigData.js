import {
  Button,
  ClickableIcon,
  Card,
  CardHeader,
  Stack,
  Text,
  Checkbox,
  CheckboxField,
  FormField,
  Link,
  Modal
} from 'base-elements-react';

export const components = {
  ClickableIcon,
  Button,
  Stack,
  Text,
  Card,
  CardHeader,
  Checkbox,
  CheckboxField,
  FormField,
  Link,
  Modal
};

export const propTypes = {
  Stack: {
    itemsVerticalAlignment: {
      type: 'enum',
      options: [
        'top',
        'center',
        'bottom',
        'space-around',
        'space-between',
        'space-evenly'
      ],
      default: 'top'
    },
    itemsHorizontalAlignment: {
      type: 'enum',
      options: [
        'top',
        'center',
        'bottom',
        'space-around',
        'space-between',
        'space-evenly'
      ],
      default: 'top'
    },
    gap: {
      type: 'enum',
      options: ['normal', 'small', 'smaller', 'large', 'larger', 'nogap'],
      default: 'normal'
    },
    children: {
      type: 'component'
    }
  },
  Button: {
    className: {
      type: 'string',
      default: ''
    },
    disableMaxContentWidth: {
      type: 'boolean',
      default: false
    },
    disabled: {
      type: 'boolean',
      default: false
    },
    appearance: {
      type: 'enum',
      options: ['primary', 'secondary', 'danger'],
      default: 'primary'
    },
    variation: {
      type: 'enum',
      options: ['plain', 'outline', 'plainWithPadding', 'filled'],
      default: 'filled'
    },
    onClick: {
      type: 'function'
    },
    children: {
      type: 'component'
    }
  },
  ClickableIcon: {
    className: {
      type: 'string',
      default: ''
    },
    disableMaxContentWidth: {
      type: 'boolean',
      default: false
    },
    disabled: {
      type: 'boolean',
      default: false
    },
    appearance: {
      type: 'enum',
      options: ['primary', 'secondary', 'danger'],
      default: 'secondary'
    },
    variation: {
      type: 'enum',
      options: ['plain', 'outline', 'plainWithPadding', 'filled'],
      default: 'plainWithPadding'
    },
    onClick: {
      type: 'function'
    },
    children: {
      type: 'component'
    }
  },
  Card: {
    className: {
      type: 'string',
      default: ''
    },
    elevation: {
      type: 'enum',
      options: ['normal', 'low', 'high'],
      default: 'normal'
    },
    noPadding: {
      type: 'boolean',
      default: false
    },
    title: {
      type: 'string',
      default: undefined
    },
    titleElement: {
      type: 'enum',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
      default: 'h3'
    },
    children: {
      type: 'component'
    }
  },
  CardHeader: {
    className: {
      type: 'string',
      default: ''
    },
    title: {
      type: 'string',
      default: undefined
    },
    titleElement: {
      type: 'enum',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
      default: 'h3'
    },
    children: {
      type: 'component'
    }
  },
  Checkbox: {
    className: {
      type: 'string',
      default: ''
    },
    checked: {
      type: 'boolean',
      default: false
    },
    titleElement: {
      type: 'enum',
      options: ['normal', 'large', '<any string>'],
      sizeVariant: 'normal'
    },
    disabled: {
      type: 'boolean',
      default: false
    }
  },
  CheckboxField: {
    className: {
      type: 'string',
      default: ''
    },
    checked: {
      type: 'boolean',
      default: false
    },
    sizeVariant: {
      type: 'enum',
      options: ['normal', 'large', '<any string>'],
      default: 'normal'
    },
    disabled: {
      type: 'boolean',
      default: false
    },
    label: {
      type: 'string',
      default: ''
    },
    labelPosition: {
      type: 'enum',
      options: ['top', 'right', 'bottom', 'left'],
      default: 'right'
    },
    error: {
      type: 'string',
      default: ''
    },
    required: {
      type: 'boolean',
      default: false
    }
  },
  FormField: {
    className: {
      type: 'string',
      default: ''
    },
    label: {
      type: 'string',
      default: ''
    },
    labelPosition: {
      type: 'enum',
      options: ['top', 'right', 'bottom', 'left'],
      default: 'right'
    },
    error: {
      type: 'string',
      default: ''
    },
    required: {
      type: 'boolean',
      default: false
    },
    children: {
      type: 'component'
    }
  },
  Link: {
    className: {
      type: 'string',
      default: ''
    },
    href: {
      type: 'string',
      default: ''
    },
    disableMaxContentWidth: {
      type: 'boolean',
      default: false
    },
    underline: {
      type: 'boolean',
      default: false
    },
    underlineOnHover: {
      type: 'boolean',
      default: false
    },
    appearance: {
      type: 'enum',
      options: ['primary', 'secondary', 'danger'],
      default: 'primary'
    },
    variation: {
      type: 'enum',
      options: ['plain', 'outline', 'plainWithPadding', 'filled'],
      default: 'filled'
    },
    component: {
      type: 'componentDef',
      default: 'a'
    },
    children: {
      type: 'component'
    }
  },
  Text: {
    variation: {
      type: 'enum',
      options: ['strong', 'emphasis', 'subdued', 'code'],
      default: undefined
    },
    element: {
      type: 'enum',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'auto'],
      default: 'auto'
    }
  }
};
