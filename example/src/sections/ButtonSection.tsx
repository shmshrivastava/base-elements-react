import React from 'react';
import {
  Card,
  SectionHeading,
  SubSectionHeading,
  Text
} from 'base-elements-react/dist';
import { HorizontalStack, VerticalStack } from 'base-elements-react/dist';
import { Button } from 'base-elements-react/dist';

function ButtonSection() {
  return (
    <VerticalStack className='section'>
      <SectionHeading>Button</SectionHeading>
      <SubSectionHeading>Props</SubSectionHeading>
      <VerticalStack gap>
        <Text>
          <Text variation='strong'>appearance:</Text> "primary" | "secondary" |
          "danger"
        </Text>
        <Text>
          <Text variation='emphasis'>default:</Text> "primary"
        </Text>
        <Card elevation='low'>
          <VerticalStack gap>
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
        </Card>
        <br />
        <Text>
          <Text variation='strong'>disabled:</Text> true | false
        </Text>
        <Text>
          <Text variation='emphasis'>default:</Text> false
        </Text>
        <Card elevation='low'>
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
        </Card>
        <br />
        <Text>
          <Text variation='strong'>variation:</Text> "plain" | "outline" |
          "plainWithPadding" | undefined
        </Text>
        <Text>
          <Text variation='emphasis'>default:</Text> undefined
        </Text>
        <Card>
          <VerticalStack gap>
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
        </Card>
      </VerticalStack>
    </VerticalStack>
  );
}

export default ButtonSection;
