import React from 'react';
import { SectionHeading, Card } from 'base-elements-react/dist';
import { VerticalStack } from 'base-elements-react/dist';

function CardSection() {
  return (
    <VerticalStack className='section'>
      <SectionHeading>Card</SectionHeading>
      <Card elevation='low'>Low card component :p</Card>
      <br />
      <Card>Normal card component :p</Card>
      <br />
      <Card elevation='high'>High card component :p</Card>
    </VerticalStack>
  );
}

export default CardSection;
