import React from 'react';

import * as m from 'globals/modifiers.css';
import styles from './Home.css';

export default class Home {
  render() {
    return (
      <div>
        <div className={m.alignc}>
          <span className={styles.loggins}/>
          <h1>Loggins</h1>
          <em>Pact's styleguide &amp; component library</em>
        </div>
      </div>
    );
  }
}
