import 'es5-shim';

beforeEach(function() {
  sinon.stub(console, 'warn');
});

afterEach(function() {
  if (typeof console.warn.restore === 'function') {
    assert(!console.warn.called, () => {
      return `${console.warn.getCall(0).args[0]} \nIn '${this.currentTest.fullTitle()}'`;
    });
    console.warn.restore();
  }
});

describe('Process environment for tests', function () {
  it('Should be development for React console warnings', function () {
    assert.equal(process.env.NODE_ENV, 'development');
  });
});

// Tell webpack to load in all the context or something i dunno
const context = require.context('./components', true, /-test\.js$/);
context.keys().forEach(context);
