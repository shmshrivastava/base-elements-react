import React from 'react';
import {
  Card,
  Stack,
  TextField,
  Text,
  Checkbox,
  Button,
  Modal,
  DataTable
} from 'base-elements-react';

export function MyComponent() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('John Doe');
  const [checked, setChecked] = React.useState(true);
  const [showModal, setShowModal] = React.useState(false);
  return (
    <Card title='Config example'>
      <Stack
        itemsVerticalAlignment='center'
        gap='nogap'
        vertical={true}
        itemsHorizontalAlignment='left'
      >
        <TextField
          label='Trying text field'
          value={name}
          onChange={(e) => setName(e.target.value)}
          multiline={true}
        />
        <Text variation='strong'>A code</Text>
        <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
        <Text
          variation='strong'
          element='p'
          className='lorem-ipsum-dolar-sit-amet-howmuchlngcanyougo'
        >
          {name}
        </Text>
        <Button
          appearance={open ? 'secondary' : 'primary'}
          variation='filled'
          onClick={() => {
            setOpen(!open);
            setShowModal(!showModal);
          }}
        >
          Click here
        </Button>
      </Stack>
      <Modal
        title='Hello World'
        open={showModal}
        addFloatingCloseAction={true}
        onClose={() => setShowModal(false)}
      >
        Wasssuppp
      </Modal>
      <DataTable
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'age', label: 'Age' }
        ]}
        data={[
          { name: 'John', age: 25 },
          { name: 'Jane', age: 25 }
        ]}
      />
    </Card>
  );
}
