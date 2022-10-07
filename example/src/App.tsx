import React, { useState } from 'react';
import './App.css';
import { ReactComponent as StarIcon } from './icons/star.svg';

import 'base-elements-react/dist/index.css';
import {
  ThemeWrapper,
  PageTitle,
  HorizontalStack,
  VerticalStack,
  Card,
  Button
} from 'base-elements-react/dist';
import ButtonSection from './sections/ButtonSection';
import TextFieldSection from './sections/TextFieldSection';
import CheckboxSection from './sections/CheckboxSection';
import PopoverSection from './sections/PopoverSection';
import SelectSection from './sections/SelectSection';
import CardSection from './sections/CardSection';
import TableSection from './sections/TableSection';

const themes = [
  {
    id: 'light',
    vars: {
      colors: {
        primaryColor: '#29B6F6',
        primaryColorHover: '#03A9F4',
        primaryColorDisabled: '#81D4FA',
        primaryColorBackground: '#E1F5FE'
      }
    }
  }
];

const sectionRouteMap = {
  button: ButtonSection,
  textfield: TextFieldSection,
  checkbox: CheckboxSection,
  select: SelectSection,
  card: CardSection,
  popover: PopoverSection,
  table: TableSection
};

const CurrentSection = ({ hashRoute }: { hashRoute: string }) => {
  const RenderComponent =
    sectionRouteMap[hashRoute || 'button'] || ButtonSection;
  return <RenderComponent />;
};

const RouteSelectorItem = (props: {
  route: string;
  onRouteSelect: (route: string) => void;
  selected?: boolean;
}) => {
  const handleClick = () => {
    window.location.hash = props.route;
    props.onRouteSelect(props.route);
  };
  return (
    <Button
      onClick={handleClick}
      appearance={props.selected ? 'primary' : 'secondary'}
      variation='plainWithPadding'
    >
      {sectionRouteMap[props.route].name.split('Section')[0]}
    </Button>
  );
};

const Sidebar = (props: {
  onRouteSelect: (route: string) => void;
  currentRoute: string;
}) => {
  const routes = Object.keys(sectionRouteMap);
  return (
    <Card elevation='low'>
      <VerticalStack gap='normal'>
        {routes.map((route) => (
          <RouteSelectorItem
            key={route}
            route={route}
            selected={route === props.currentRoute}
            onRouteSelect={props.onRouteSelect}
          />
        ))}
      </VerticalStack>
    </Card>
  );
};

const App = () => {
  const [hashRoute, setHashRoute] = useState(window.location.hash.slice(1));
  return (
    <div className='App'>
      <ThemeWrapper themes={themes} currentThemeId='light'>
        <PageTitle style={{ display: 'flex', alignItems: 'center' }}>
          Base Elements React - Demo <StarIcon height={'1em'} width='1em' />
        </PageTitle>
        <HorizontalStack gap='larger'>
          <Sidebar onRouteSelect={setHashRoute} currentRoute={hashRoute} />
          <CurrentSection hashRoute={hashRoute} />
        </HorizontalStack>
      </ThemeWrapper>
    </div>
  );
};

export default App;
