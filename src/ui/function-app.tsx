import * as React from 'react';

export interface FunctionAppProps {
  level: number;
  title: string;
  children?: React.ReactNode;
}

export function FunctionApp(props: FunctionAppProps): JSX.Element {
  const Header = React.createElement(`h${props.level}`);
  return <>
    {React.createElement(`h${props.level}`, {}, props.title)}
    {props.children}
  </>;
}
