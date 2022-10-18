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
  Modal,
  ModalHeader,
  ModalFooter,
  Popover,
  Select,
  SelectOption,
  StackItem,
  VerticalStack,
  HorizontalStack,
  CenteredContainer,
  Table,
  // TableBody,
  // TableHead,
  // TableRow,
  // TableHeadRow,
  // TableCell,
  // TableDataCell,
  // TableHeaderCell,
  // HeaderTable,
  DataTable
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
  Modal,
  ModalHeader,
  ModalFooter,
  Popover,
  Select,
  SelectOption,
  StackItem,
  VerticalStack,
  HorizontalStack,
  CenteredContainer,
  Table,
  // TableBody,
  // TableHead,
  // TableRow,
  // TableHeadRow,
  // TableCell,
  // TableDataCell,
  // TableHeaderCell,
  // HeaderTable,
  DataTable
};

export const propTypes = {
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
    onChange: {
      type: 'function'
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
  Modal: {
    className: {
      type: 'string',
      default: ''
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
    },
    open: {
      type: 'boolean',
      default: false
    },
    onClose: {
      type: 'function'
    },
    disallowCloseOnOutsideClick: {
      type: 'boolean',
      default: false
    },
    disallowCloseOnEscape: {
      type: 'boolean',
      default: false
    },
    addFloatingCloseAction: {
      type: 'boolean',
      default: false
    },
    floatingCloseActionLocation: {
      type: 'enum',
      options: ['left', 'right'],
      default: 'right'
    },
    floatingCloseActionXOffset: {
      type: 'number',
      default: 0
    },
    floatingCloseActionYOffset: {
      type: 'number',
      default: 0
    },
    addCloseActionInHeader: {
      type: 'boolean',
      default: false
    }
  },
  ModalHeader: {
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
    },
    onClose: {
      type: 'function'
    },
    addCloseAction: {
      type: 'boolean',
      default: false
    },
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
    wrapItems: {
      type: 'enum',
      options: ['wrap', 'nowrap', 'wrap-reverse'],
      default: 'nowrap'
    }
  },
  ModalFooter: {
    className: {
      type: 'string',
      default: ''
    },
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
    wrapItems: {
      type: 'enum',
      options: ['wrap', 'nowrap', 'wrap-reverse'],
      default: 'nowrap'
    },
    children: {
      type: 'component'
    },
    vertical: {
      type: 'boolean',
      default: false
    }
  },
  Popover: {
    className: {
      type: 'string',
      default: ''
    },
    anchor: {
      type: 'component'
    },
    open: {
      type: 'boolean',
      default: false
    },
    onOutsideClick: {
      type: 'function'
    },
    xLocation: {
      type: 'enum',
      options: ['snap_left_edge', 'center', 'snap_right_edge'],
      default: 'center'
    },
    yLocation: {
      type: 'enum',
      options: [
        'top',
        'top_cover_anchor',
        'center',
        'bottom_cover_anchor',
        'bottom'
      ],
      default: 'center'
    },
    children: {
      type: 'component'
    },
    xOffset: {
      type: 'number',
      default: 0
    },
    yOffset: {
      type: 'number',
      default: 0
    }
  },
  SelectOption: {
    className: {
      type: 'string',
      default: ''
    },
    value: {
      type: 'string',
      default: null
    },
    onOptionSelect: {
      type: 'function'
    },
    selected: {
      type: 'boolean',
      default: false
    },
    children: {
      type: 'component'
    }
  },
  Select: {
    className: {
      type: 'string',
      default: ''
    },
    options: {
      type: 'SelectOption',
      default: []
    },
    value: {
      type: 'string',
      default: null
    },
    onValueChange: {
      type: 'function'
    },
    placeholder: {
      type: 'component'
    },
    children: {
      type: 'component'
    }
  },
  Stack: {
    className: {
      type: 'string',
      default: ''
    },
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
    wrapItems: {
      type: 'enum',
      options: ['wrap', 'nowrap', 'wrap-reverse'],
      default: 'nowrap'
    },
    children: {
      type: 'component'
    },
    vertical: {
      type: 'boolean',
      default: false
    }
  },
  HorizontalStack: {
    className: {
      type: 'string',
      default: ''
    },
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
    wrapItems: {
      type: 'enum',
      options: ['wrap', 'nowrap', 'wrap-reverse'],
      default: 'nowrap'
    },
    children: {
      type: 'component'
    }
  },
  VerticalStack: {
    className: {
      type: 'string',
      default: ''
    },
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
    wrapItems: {
      type: 'enum',
      options: ['wrap', 'nowrap', 'wrap-reverse'],
      default: 'nowrap'
    },
    children: {
      type: 'component'
    }
  },
  CenteredContainer: {
    className: {
      type: 'string',
      default: ''
    },
    gap: {
      type: 'enum',
      options: ['normal', 'small', 'smaller', 'large', 'larger', 'nogap'],
      default: 'normal'
    },
    wrapItems: {
      type: 'enum',
      options: ['wrap', 'nowrap', 'wrap-reverse'],
      default: 'nowrap'
    },
    children: {
      type: 'component'
    },
    vertical: {
      type: 'boolean',
      default: false
    }
  },
  StackItem: {
    className: {
      type: 'string',
      default: ''
    },
    fill: {
      type: 'boolean',
      default: false
    },
    children: {
      type: 'component'
    }
  },
  Table: {
    className: {
      type: 'string',
      default: ''
    },
    hasRowDivider: {
      type: 'boolean',
      default: false
    },
    hasColumnDivider: {
      type: 'boolean',
      default: false
    },
    hasBodyBorder: {
      type: 'boolean',
      default: false
    },
    headerCentered: {
      type: 'boolean',
      default: false
    },
    fullWidth: {
      type: 'boolean',
      default: false
    },
    children: {
      type: 'component'
    }
  },
  DataTable: {
    className: {
      type: 'string',
      default: ''
    },
    columns: {
      type: 'array',
      arrayOf: { key: 'string', label: 'string' }
    },
    data: {
      type: 'array'
    },
    hasRowDivider: {
      type: 'boolean',
      default: false
    },
    hasColumnDivider: {
      type: 'boolean',
      default: false
    },
    hasBodyBorder: {
      type: 'boolean',
      default: false
    },
    headerCentered: {
      type: 'boolean',
      default: false
    },
    fullWidth: {
      type: 'boolean',
      default: false
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
