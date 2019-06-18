import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { HTMLComment, HTMLCommentContainer, MsoEndif, MsoIf } from './html-comment';

test('comment', () => {
  const toTest = renderToString(
    <HTMLCommentContainer>
      <div>meno</div>
      <HTMLComment>line1 line2</HTMLComment>
      <div>
        meno
        <HTMLComment />
        <div>nested</div>
        wurst
        <HTMLComment />
      </div>
      <HTMLComment> meno doof </HTMLComment>
    </HTMLCommentContainer>,
  );
  expect(toTest.startsWith('<div')).toBeTruthy();
  expect(toTest).not.toContain('\n');
  expect(toTest).not.toContain('\r');
  expect(toTest).toContain('meno<!---->');
  expect(toTest).toContain('wurst<!---->');
  expect(toTest).toContain('<!--line1 line2-->');
  expect(toTest).toContain('<!-- meno doof -->');
  expect(toTest).toContain('<div>nested</div>');
});

test('commentContainerTag', () => {
  const toTest = renderToString(
    <HTMLCommentContainer tag="table" wurst="maus">
      <div>meno</div>
    </HTMLCommentContainer>,
  );
  expect(toTest.startsWith('<table')).toBeTruthy();
  expect(toTest).toContain('wurst="maus"');
});

test('commentPreffixSuffix', () => {
  const toTest = renderToString(
    <HTMLCommentContainer tag="table" wurst="maus">
      1
      <HTMLComment prefixComment="Menoöffnet" suffixComment="menoschließt">
        testing
      </HTMLComment>
      2
      <HTMLComment prefixComment="mo" suffixComment="om">
        testing
      </HTMLComment>
    </HTMLCommentContainer>,
  );
  expect(toTest).toContain('1<Menoöffnettestingmenoschließt>');
  expect(toTest).toContain('2<motestingom>');
});

test('MsoIf MsoEndif', () => {
  const toTest = renderToString(<HTMLCommentContainer>
      1<MsoIf />
      2<MsoIf condition="gte mso 9" />
      Hallo
      3<MsoEndif/>
    </HTMLCommentContainer>);
  // console.log(toTest);
  expect(toTest).toContain('3<![endif]-->');
  expect(toTest).toContain('1<!--[if mso]>');
  expect(toTest).toContain('2<!--[if gte mso 9]>');
});
