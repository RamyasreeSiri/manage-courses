import React from 'react';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';
// import ShallowRender from 'react-test-renderer/shallow';

import CourseForm from './CourseForm.js';
function setup() {
  let props = {
    course: {},
    saving: false,
    errors: {},
    onSave: () => { },
    onChange: () => { }
  };
  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}
describe('CourseForm via React Test Utils', () => {
  it('renders form and h1', () => {
    const { output } = setup();
    expect(output.type).toBe('form');
  });
});
