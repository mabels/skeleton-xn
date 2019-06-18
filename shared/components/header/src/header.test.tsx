import * as React from 'react';
import { Header } from './header';
import { create } from 'react-test-renderer';
/*
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
*/

describe('header', () => {
  test('h level test', () => {
    const toTest = create(<Header level={4} title="Jo"/>).toJSON();
    expect(toTest.type).toBe('h4');
  });

  test('h title', () => {
    const toTest = create(<Header level={4} title="Jo"/>);
    expect(Array.from(toTest.root.findByType('h4').children)[0]).toBe('Jo');
  });

  test('h put around div', () => {
    const toTest = create(<Header level={4} title="Jo">
        <p>eins</p>
        <p>zwei</p>
        </Header>).toJSON() as any;
    expect(toTest[0].type).toBe('h4');
    expect(toTest[1].type).toBe('div');
    expect(toTest[1].children[0].type).toBe('p');
    expect(toTest[1].children[0].children[0]).toBe('eins');
    expect(toTest[2].type).toBe('div');
    expect(toTest[2].children[0].type).toBe('p');
    expect(toTest[2].children[0].children[0]).toBe('zwei');
  });

});
