import {
  Button,
  ClickableIcon,
  Card,
  CardHeader,
  Stack,
  Text
} from 'base-elements-react';

export const components = {
  ClickableIcon,
  Button,
  Stack,
  Text,
  Card,
  CardHeader
};

export const propTypes = {
  Stack: {
    itemsVerticalAlignment: {
      type: 'enum',
      options: ['top', 'center', 'bottom'],
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
  Text: {
    variation: {
      type: 'enum',
      options: ['strong', 'emphasis', 'subdued', 'code'],
      default: undefined
    }
  }
};
