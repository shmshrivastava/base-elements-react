import React from 'react';
import { PageTitle } from 'base-elements-react';

interface PageProps {
  title?: string;
}

export function Page(props: React.PropsWithChildren<PageProps>) {
  return (
    <div>
      {props.title && <PageTitle>{props.title}</PageTitle>}
      {props.children}
    </div>
  );
}

Page.displayName = 'Page';
