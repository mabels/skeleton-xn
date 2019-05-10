import * as React from 'react';

export interface HeaderProps {
  readonly level: number;
  readonly title: string;
  readonly children?: React.ReactNode;
}

export function Header(props: HeaderProps): JSX.Element {
  return <>
    {React.createElement(`h${props.level}`, {}, props.title)}
    {React.Children.map(props.children, e => <div>{e}</div>)}
  </>;
}
