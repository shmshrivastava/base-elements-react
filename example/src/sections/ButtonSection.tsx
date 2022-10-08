import React from 'react';
import {
  Card,
  SectionHeading,
  SubSectionHeading,
  Text,
  InlineCode,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button
} from 'base-elements-react/dist';
import { HorizontalStack, VerticalStack } from 'base-elements-react/dist';

function ButtonSection() {
  return (
    <VerticalStack className='section'>
      <SectionHeading>Button</SectionHeading>
      <SubSectionHeading>Props</SubSectionHeading>

      <VerticalStack>
        <Card elevation='low'>
          <VerticalStack gap>
            <Text element='h4'>appearance</Text>
            <HorizontalStack gap itemsHorizontalAlignment='space-around'>
              <Button onClick={() => console.log('Primary Button Clicked')}>
                Primary
              </Button>
              <Button
                onClick={() => console.log('Secondary Button Clicked')}
                appearance='secondary'
              >
                Secondary
              </Button>
              <Button
                onClick={() => console.log('Danger Button Clicked')}
                appearance='danger'
              >
                Danger
              </Button>
            </HorizontalStack>
          </VerticalStack>
          <br />
          <Table hasRowDivider fullWidth>
            <TableHead>
              <TableRow>
                <TableCell>Possible Values</TableCell>
                <TableCell>Default Value</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <InlineCode>"primary"</InlineCode> |{' '}
                  <InlineCode>"secondary"</InlineCode> |{' '}
                  <InlineCode>"danger"</InlineCode>
                </TableCell>
                <TableCell>
                  <InlineCode>"primary"</InlineCode>
                </TableCell>
                <TableCell>Appearance of the button</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>

        <br />
        <br />
        <br />
        <Card elevation='low'>
          <VerticalStack gap>
            <Text element='h4'>disabled</Text>
            <HorizontalStack gap itemsHorizontalAlignment='space-around'>
              <Button
                onClick={() => console.log('Primary Disabled Button Clicked')}
                disabled
              >
                Primary Disabled
              </Button>
              <Button
                onClick={() => console.log('Secondary Disabled Button Clicked')}
                disabled
                appearance='secondary'
              >
                Secondary Disabled
              </Button>
              <Button
                onClick={() => console.log('Danger Disabled Button Clicked')}
                disabled
                appearance='danger'
              >
                Danger Disabled
              </Button>
            </HorizontalStack>
          </VerticalStack>
          <br />
          <Table hasRowDivider fullWidth>
            <TableHead>
              <TableRow>
                <TableCell>Possible Values</TableCell>
                <TableCell>Default Value</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <InlineCode>true</InlineCode> | <InlineCode>false</InlineCode>
                </TableCell>
                <TableCell>
                  <InlineCode>false</InlineCode>
                </TableCell>
                <TableCell>Make the button disabled</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>

        <br />
        <br />
        <br />
        <Card elevation='low'>
          <VerticalStack gap>
            <Text element='h4'>variation</Text>
            <HorizontalStack gap itemsHorizontalAlignment='space-around'>
              <Button
                onClick={() => console.log('Primary Outline Button Clicked')}
                variation='outline'
              >
                Primary Outline
              </Button>
              <Button
                onClick={() => console.log('Secondary Outline Button Clicked')}
                variation='outline'
                appearance='secondary'
              >
                Secondary Outline
              </Button>
              <Button
                onClick={() => console.log('Danger Outline Button Clicked')}
                variation='outline'
                appearance='danger'
              >
                Danger Outline
              </Button>
            </HorizontalStack>
            <HorizontalStack gap itemsHorizontalAlignment='space-around'>
              <Button
                onClick={() => console.log('Primary Plain Button Clicked')}
                variation='plain'
              >
                Plain Primary
              </Button>
              <Button
                appearance='secondary'
                onClick={() => console.log('Secondary Plain Button Clicked')}
                variation='plain'
              >
                Plain Secondary
              </Button>
              <Button
                appearance='danger'
                onClick={() => console.log('Danger Plain Button Clicked')}
                variation='plain'
              >
                Plain Danger
              </Button>
            </HorizontalStack>
            <HorizontalStack gap itemsHorizontalAlignment='space-around'>
              <Button
                onClick={() =>
                  console.log('Primary PlainWithPadding Button Clicked')
                }
                variation='plainWithPadding'
              >
                PlainWithPadding Primary
              </Button>
              <Button
                appearance='secondary'
                onClick={() =>
                  console.log('Secondary PlainWithPadding Button Clicked')
                }
                variation='plainWithPadding'
              >
                PlainWithPadding Secondary
              </Button>
              <Button
                appearance='danger'
                onClick={() =>
                  console.log('Danger PlainWithPadding Button Clicked')
                }
                variation='plainWithPadding'
              >
                PlainWithPadding Danger
              </Button>
            </HorizontalStack>
          </VerticalStack>
          <br />
          <Table hasRowDivider>
            <TableHead>
              <TableRow>
                <TableCell>Possible Values</TableCell>
                <TableCell>Default Value</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <InlineCode>"plain"</InlineCode> |{' '}
                  <InlineCode>"outline"</InlineCode> |{' '}
                  <InlineCode>"plainWithPadding"</InlineCode> |{' '}
                  <InlineCode>undefined</InlineCode>
                </TableCell>
                <TableCell>
                  <InlineCode>undefined</InlineCode>
                </TableCell>
                <TableCell>Variation in appearance</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </VerticalStack>
    </VerticalStack>
  );
}

export default ButtonSection;
