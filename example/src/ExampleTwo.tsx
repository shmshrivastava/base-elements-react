import React from 'react';
import { Card, Stack, Text, Checkbox, Button } from 'base-elements-react';

export function MyComponent() {
  return (
    <Card title='Config example'>
      <Stack itemsVerticalAlignment='center' gap='nogap'>
        <Text variation='strong'>A code</Text>
        <Checkbox checked={true} />
        <Text
          variation='strong'
          element='p'
          className='lorem-ipsum-dolar-sit-amet-howmuchlngcanyougo'
        >
          A code
        </Text>
        <Button
          appearance='secondary'
          variation='plainWithPadding'
          onClick={() => console.log('buttonClicked')}
        >
          Click here
        </Button>
      </Stack>
    </Card>
  );
}
