import React, { SyntheticEvent } from 'react';
import {
  Checkbox,
  CheckboxField,
  SectionHeading,
  SubSectionHeading
} from 'base-elements-react/dist';
import { VerticalStack } from 'base-elements-react/dist';
import { useState } from 'react';

function CheckboxSection() {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <VerticalStack className='section'>
      <SectionHeading>Checkbox</SectionHeading>
      <Checkbox
        checked={checked}
        onChange={(e: SyntheticEvent<EventTarget>) =>
          setChecked((e.target as HTMLInputElement).checked)
        }
        sizeVariant='large'
      />
      <SubSectionHeading>Checkbox</SubSectionHeading>
      <CheckboxField
        checked={checked}
        onChange={(e: SyntheticEvent<EventTarget>) =>
          setChecked((e.target as HTMLInputElement).checked)
        }
        label='A checkbox'
      />
    </VerticalStack>
  );
}

export default CheckboxSection;
