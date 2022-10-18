import * as React from 'react';

/**
 * @ignore - internal component.
 */
const TableContext = React.createContext({ variant: 'body' });

if (process.env.NODE_ENV !== 'production') {
  TableContext.displayName = 'Tablelvl2Context';
}

export default TableContext;
