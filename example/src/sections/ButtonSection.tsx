import React from 'react';
import { SectionHeading } from 'base-elements-react/dist';
import { HorizontalStack, VerticalStack } from 'base-elements-react/dist';
import { Button } from 'base-elements-react/dist';

function ButtonSection() {
  return (
    <VerticalStack className='section'>
      <SectionHeading>Button</SectionHeading>
      <HorizontalStack gap>
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
          Secondary
        </Button>
        <Button
          onClick={() => console.log('Outline Button Clicked')}
          variation='outline'
        >
          Outline
        </Button>
        <Button onClick={() => console.log('Plain Button Clicked')} plain>
          Plain
        </Button>
        <Button
          appearance='secondary'
          onClick={() => console.log('Plain Button Clicked')}
          plain
        >
          Plain Secondary
        </Button>
        <Button onClick={() => console.log('Primary Button Clicked')} disabled>
          Primary Disabled
        </Button>
      </HorizontalStack>
    </VerticalStack>
  );
}

export default ButtonSection;
