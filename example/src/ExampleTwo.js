import React from 'react';
import { Page } from './Page';
import { Card, List } from 'base-elements-react';

export function MyComponent() {
  return (
    <div style={{ width: '500px', height: '200px' }}>
      <List
        direction='vertical'
        gap='small'
        component={Card}
        data={[
          { children: 'Hello', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' },
          { children: 'world', title: 'card' }
        ]}
      />
    </div>
  );
}
