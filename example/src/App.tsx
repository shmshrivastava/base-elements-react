import React from 'react';

import 'base-elements-react/dist/index.css';
import { Button, ExampleComponent, TextField } from 'base-elements-react/dist';

const App = () => {
  return (
    <div>
      <ExampleComponent text='Create React Library Example 😄' />
      <Button>Click Here</Button>
      <TextField multiline />
    </div>
  );
};

export default App;
