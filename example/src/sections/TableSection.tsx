import React from 'react';
import {
  SectionHeading,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell
} from 'base-elements-react/dist';
import { VerticalStack } from 'base-elements-react/dist';

function TableSection() {
  return (
    <VerticalStack className='section'>
      <SectionHeading>Table</SectionHeading>
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
            <TableCell>Mercury</TableCell>
            <TableCell>46.098 million km</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Venus</TableCell>
            <TableCell>107.78 million km</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Earth</TableCell>
            <TableCell>149.48 million km</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Mars</TableCell>
            <TableCell>219.16 million km</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </VerticalStack>
  );
}

export default TableSection;
