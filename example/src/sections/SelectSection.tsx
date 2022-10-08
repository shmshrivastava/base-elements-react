import React from 'react';
import {
  Select,
  SectionHeading,
  SelectOption,
  HorizontalStack
} from 'base-elements-react/dist';
import { VerticalStack } from 'base-elements-react/dist';
import { useState } from 'react';

import { ReactComponent as StarIcon } from '../icons/star.svg';

function SelectSection() {
  const [value, setValue] = useState<string | undefined | null>(null);
  return (
    <VerticalStack className='section'>
      <SectionHeading>Select</SectionHeading>
      <Select value={value} onValueChange={setValue}>
        <SelectOption value='op1'>Option 1 as string</SelectOption>
        <SelectOption value='op2'>Option 2 as string</SelectOption>
        <SelectOption value='star'>
          <HorizontalStack itemsVerticalAlignment='center'>
            <StarIcon /> Option with component
          </HorizontalStack>
        </SelectOption>
      </Select>
    </VerticalStack>
  );
}

export default SelectSection;
