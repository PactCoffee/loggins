export function mountable(props, propName, componentName) {
  if (typeof props[propName] !== 'object' ||
    typeof props[propName].render !== 'function' && props[propName].nodeType !== 1) {
    return new Error(
      `Invalid prop of "${propName}" of value '${props[propName]}' supplied to '${componentName}. Expected a DOM element or an object that has a 'render' method`
    );
  }
}
