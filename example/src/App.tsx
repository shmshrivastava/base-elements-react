import React from 'react';

import 'base-elements-react/dist/index.css';
import { Button, ThemeWrapper } from 'base-elements-react/dist';

const themes = [
  {
    id: 'light',
    vars: {
      colors: {
        primaryColor: '#29B6F6',
        primaryColorHover: '#03A9F4',
        primaryColorDisabled: '#4FC3F7',
        primaryColorBackground: '#E1F5FE'
      }
    }
  }
];

const App = () => {
  return (
    <ThemeWrapper themes={themes} currentThemeId='light'>
      <Button disabled>Click Here</Button>
    </ThemeWrapper>
  );
};

export default App;
