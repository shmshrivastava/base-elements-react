import React from 'react';
import { Select, SectionHeading, SelectOption } from 'base-elements-react/dist';
import { VerticalStack } from 'base-elements-react/dist';
import { useState } from 'react';

import { ReactComponent as StarIcon } from '../icons/star.svg';

function SelectSection() {
  const [value, setValue] = useState<string | undefined | null>(null);
  return (
    <VerticalStack className='section'>
      <SectionHeading>Select</SectionHeading>
      <Select
        value={value}
        onValueChange={setValue}
        placeholder={'Select something?'}
      >
        <SelectOption value='apple'>Apple</SelectOption>
        <SelectOption value='mango'>Mango</SelectOption>
        <SelectOption value='star'>
          <div>
            <StarIcon /> Star
          </div>
        </SelectOption>
      </Select>
    </VerticalStack>
  );
}

export default SelectSection;
