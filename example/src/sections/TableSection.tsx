import React from 'react';
import { SectionHeading, Table, TableHead, TableRow, TableBody, TableCell } from 'base-elements-react/dist';
import { VerticalStack } from 'base-elements-react/dist';

function TableSection() {
  return (
    <VerticalStack className='section'>
      <SectionHeading>Table</SectionHeading>
      <Table hasRowDivider>
        <TableHead>
          <TableRow>
<TableCell>Name</TableCell>
          <TableCell>Possible Values</TableCell>
          </TableRow>
          
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              element
            </TableCell>
            <TableCell>
              "th" | "td" | undefined
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              hasRowDivider
            </TableCell>
            <TableCell>
              true | false | undefined
            </TableCell>
          </TableRow>
        </TableBody>
        </Table>
    </VerticalStack>
  );
}

export default TableSection;
