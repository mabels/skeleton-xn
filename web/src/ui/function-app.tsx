import * as React from 'react';

export interface FunctionAppProps {
  level: number;
  title: string;
  children?: React.ReactNode;
}

export function FunctionApp(props: FunctionAppProps): JSX.Element {
  return <>
    {React.createElement(`h${props.level}`, {}, props.title)}
    {React.Children.map(props.children, e => <div>{e}</div>)}
  </>;
}
