import React, { SyntheticEvent } from 'react';
import { SectionHeading, TextField } from 'base-elements-react/dist';
import { VerticalStack } from 'base-elements-react/dist';
import { useState } from 'react';

function TextFieldSection() {
  const [singleLineValue, setSingleLineValue] = useState<string>('');
  const [multiLineValue, setMultiLineValue] = useState('');
  return (
    <VerticalStack className='section'>
      <SectionHeading>TextField</SectionHeading>
      <TextField
        label='Form Field 1'
        error='Invalid data'
        placeholder='Single line data'
        required
        value={singleLineValue}
        onChange={(e: SyntheticEvent<EventTarget>) =>
          setSingleLineValue((e.target as HTMLInputElement).value)
        }
      />
      <br />
      <TextField
        multiline
        label='Form Field 2'
        error='Invalid data'
        value={multiLineValue}
        onChange={(e: SyntheticEvent<EventTarget>) =>
          setMultiLineValue((e.target as HTMLInputElement).value)
        }
      />
    </VerticalStack>
  );
}

export default TextFieldSection;
