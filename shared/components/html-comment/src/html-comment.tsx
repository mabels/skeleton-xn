import * as React from 'react';
import { renderToString } from 'react-dom/server';

function replacer(
  _match: {},
  prefixComment: string,
  suffixComment: string,
  comment: string,
  _offset: number,
  _str: string,
): string {
  return `<${prefixComment}${comment}${suffixComment}>`;
}

function fixHTMLComment(str: string): string {
  return str.replace(
    /<html-comment\s+prefixComment="([^"]*)"\s+suffixComment="([^"]*)"[^\>]*\>([^\<]*)\<\/html-comment>/gm,
    replacer,
  );
}

export interface HTMLCommentProps {
  readonly prefixComment?: string;
  readonly suffixComment?: string;
}

export function HTMLComment(props: React.PropsWithChildren<HTMLCommentProps>): JSX.Element {
  return React.createElement('html-comment', {
    prefixComment: typeof props.prefixComment === 'string' ? props.prefixComment : '!--',
    suffixComment: typeof props.suffixComment === 'string' ? props.suffixComment : '--',
    dangerouslySetInnerHTML: {
      __html: props.children,
    },
  });
}

export interface HTMLCommentContainerProps {
  readonly tag?: string;
  // tslint:disable-next-line:no-any
  readonly [id: string]: any;
}

export function HTMLCommentContainer(
  props: React.PropsWithChildren<HTMLCommentContainerProps>,
): JSX.Element {
  const { children, tag, ...rest } = props;

  return React.createElement(props.tag || 'div', {
    ...rest,
    dangerouslySetInnerHTML: {
      __html: fixHTMLComment(renderToString(<>{props.children}</>)),
    },
  });
}

export function MsoIf(props: { condition?: string }): JSX.Element {
  return <HTMLComment suffixComment="">{`[if ${props.condition || 'mso'}]`}</HTMLComment>;
}

export function MsoEndif(props: {}): JSX.Element {
  return <HTMLComment prefixComment="!" suffixComment="--">{'[endif]'}</HTMLComment>;
}
