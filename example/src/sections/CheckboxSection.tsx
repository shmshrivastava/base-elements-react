import React, { SyntheticEvent } from 'react';
import {
  Checkbox,
  InlineCode,
  SectionHeading,
  SubSectionHeading,
  HeaderTable,
  TableHeadRow,
  Text,
  TableRow,
  TableCell,
  Card,
  HorizontalStack
} from 'base-elements-react/dist';
import { VerticalStack } from 'base-elements-react/dist';
import { useState } from 'react';

function CheckboxSection() {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <VerticalStack className='section'>
      <SectionHeading>Checkbox</SectionHeading>
      <Text>
        Renders an input with <InlineCode>type='checkbox'</InlineCode>
      </Text>
      <br />
      <SubSectionHeading>Props</SubSectionHeading>
      Accepts all props that can be forwarded to input.
      <br />
      <br />
      <Card elevation='low'>
        <VerticalStack gap>
          <Text element='h4'>checked</Text>
          <HorizontalStack gap itemsHorizontalAlignment='space-around'>
            <Checkbox checked={false} />
            <Checkbox checked={true} />
          </HorizontalStack>
        </VerticalStack>
        <br />
        <HeaderTable
          hasRowDivider
          fullWidth
          header={
            <TableHeadRow>
              <TableCell>Possible Values</TableCell>
              <TableCell>Default Value</TableCell>
              <TableCell>Description</TableCell>
            </TableHeadRow>
          }
        >
          <TableRow>
            <TableCell>
              <InlineCode>true</InlineCode> | <InlineCode>false</InlineCode>
            </TableCell>
            <TableCell>
              <InlineCode>false</InlineCode>
            </TableCell>
            <TableCell>Renders checked checkbox if true</TableCell>
          </TableRow>
        </HeaderTable>
      </Card>
      <br />
      <br />
      <br />
      <Card elevation='low'>
        <VerticalStack gap>
          <Text element='h4'>sizeVariant</Text>
          <HorizontalStack gap itemsHorizontalAlignment='space-around'>
            <Checkbox
              sizeVariant='normal'
              checked={checked}
              onChange={(e: SyntheticEvent<EventTarget>) =>
                setChecked((e.target as HTMLInputElement).checked)
              }
            />
            <Checkbox
              sizeVariant='large'
              checked={checked}
              onChange={(e: SyntheticEvent<EventTarget>) =>
                setChecked((e.target as HTMLInputElement).checked)
              }
            />
          </HorizontalStack>
        </VerticalStack>
        <br />
        <HeaderTable
          hasRowDivider
          fullWidth
          header={
            <TableHeadRow>
              <TableCell>Possible Values</TableCell>
              <TableCell>Default Value</TableCell>
              <TableCell>Description</TableCell>
            </TableHeadRow>
          }
        >
          <TableRow>
            <TableCell>
              <InlineCode>"normal"</InlineCode> |{' '}
              <InlineCode>"large"</InlineCode> |<br /> (any other string if you
              want to update size using css)
            </TableCell>
            <TableCell>
              <InlineCode>"normal"</InlineCode>
            </TableCell>
            <TableCell>Size of the checkbox</TableCell>
          </TableRow>
        </HeaderTable>
      </Card>
    </VerticalStack>
  );
}

export default CheckboxSection;
