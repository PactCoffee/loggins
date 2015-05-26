import React, {Component} from 'react';

import {Btn} from 'components';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Does this work?</h1>
        <Btn>Yes!</Btn>
      </div>
    );
  }
}

if (typeof document !== 'undefined') {
  React.render(<App />, document.getElementById('outlet'));
}

export default App;
