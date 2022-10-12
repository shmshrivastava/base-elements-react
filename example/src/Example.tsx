import React, { Component } from 'react';

import { Button, Card, CardHeader } from 'base-elements-react';
import 'base-elements-react/dist/index.css';

class Example extends Component {
  render() {
    return (
      <Card>
        <CardHeader title='lorem ipsum text'>
          <Button>Save</Button>
        </CardHeader>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Card>
    );
  }
}

export default Example;
