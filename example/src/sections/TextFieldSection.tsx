import React from 'react';
import {
  Card,
  HorizontalStack,
  SectionHeading,
  SubSectionHeading,
  Table,
  Text,
  TextField,
  TableRow,
  TableBody,
  TableHead,
  TableCell,
  InlineCode
} from 'base-elements-react/dist';
import { VerticalStack } from 'base-elements-react/dist';

function TextFieldSection() {
  return (
    <VerticalStack className='section'>
      <SectionHeading>TextField</SectionHeading>
      <Text>Renders an Input or a TextArea component.</Text>
      <br />
      <SubSectionHeading>Props</SubSectionHeading>
      <Text>
        Other than below mentioned props, TextField accepts all props that can
        be sent to Input or TextArea, such as <InlineCode>value</InlineCode>,{' '}
        <InlineCode>onChange</InlineCode> etc.
      </Text>
      <br />
      <br />

      <Card elevation='low'>
        <VerticalStack gap>
          <Text element='h4'>label</Text>
          <HorizontalStack gap itemsHorizontalAlignment='space-around'>
            <TextField label='Enter your name' />
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
                <InlineCode>string</InlineCode>
              </TableCell>
              <TableCell>
                <InlineCode>""</InlineCode>
              </TableCell>
              <TableCell>
                Label for the text field. Extended from FormField component.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
      <br />
      <br />
      <br />
      <Card elevation='low'>
        <VerticalStack gap>
          <Text element='h4'>labelPosition</Text>
          <HorizontalStack
            gap
            itemsHorizontalAlignment='space-around'
            wrapItems='wrap'
          >
            <TextField label='Enter your name' labelPosition='top' />
            <TextField label='Enter your name' labelPosition='right' />
          </HorizontalStack>
          <HorizontalStack
            gap
            itemsHorizontalAlignment='space-around'
            wrapItems='wrap'
          >
            <TextField label='Enter your name' labelPosition='bottom' />
            <TextField label='Enter your name' labelPosition='left' />
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
                <InlineCode>"top"</InlineCode> |{' '}
                <InlineCode>"right"</InlineCode> |{' '}
                <InlineCode>"bottom"</InlineCode> |{' '}
                <InlineCode>"left"</InlineCode>
              </TableCell>
              <TableCell>
                <InlineCode>"top"</InlineCode>
              </TableCell>
              <TableCell>
                Position of the label. Extended from FormField component
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
      <br />
      <br />
      <br />
      <Card elevation='low'>
        <VerticalStack gap>
          <Text element='h4'>multiline</Text>
          <HorizontalStack gap itemsHorizontalAlignment='space-around'>
            <TextField label='Enter your name' />
            <TextField label='Enter your address' multiline />
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
              <TableCell>
                Renders input component if false, else renders a textarea.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
      <br />
      <br />
      <br />
      <Card elevation='low'>
        <VerticalStack gap>
          <Text element='h4'>error</Text>
          <HorizontalStack gap itemsHorizontalAlignment='space-around'>
            <TextField
              label='Enter a username'
              error='Should be at least 6 characters'
            />
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
                <InlineCode>string</InlineCode>
              </TableCell>
              <TableCell>
                <InlineCode>""</InlineCode>
              </TableCell>
              <TableCell>Renders error.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </VerticalStack>
  );
}

export default TextFieldSection;
