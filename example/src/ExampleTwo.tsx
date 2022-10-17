import React from 'react';
import { Card, Stack, Text, Checkbox, Button } from 'base-elements-react';

export function MyComponent() {
  const [open, setOpen] = React.useState(false);
  const [name] = React.useState('John Doe');
  return (
    <Card title={'Config example'}>
      <Stack
        itemsVerticalAlignment={'center'}
        gap={'nogap'}
        vertical={true}
        itemsHorizontalAlignment={'left'}
      >
        <Text variation={'strong'}>{name}</Text>
        <Checkbox checked={true} />
        <Text
          variation={'strong'}
          element={'p'}
          className={'lorem-ipsum-dolar-sit-amet-howmuchlngcanyougo'}
        >
          {'A code ' + 2}
        </Text>
        <Button
          appearance={open ? 'secondary' : 'primary'}
          variation={'plainWithPadding'}
          onClick={() => {
            setOpen(!open);
          }}
        >
          {'Click here'}
        </Button>
      </Stack>
    </Card>
  );
}
