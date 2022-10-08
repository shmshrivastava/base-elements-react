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

export default Example;
