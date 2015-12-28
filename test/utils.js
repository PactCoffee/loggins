import {
  createRenderer,
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
} from 'react-addons-test-utils';

export function shallowRender(component) {
  const renderer = createRenderer();
  renderer.render(component);
  return renderer.getRenderOutput();
}

export function domRender(component) {
  const { type } = shallowRender(component);
  const result = renderIntoDocument(component);
  return findRenderedDOMComponentWithTag(result, type);
}
