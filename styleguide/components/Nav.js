import React from 'react';
import {Link} from 'react-router';

import styles from './Nav.css';

export default class {
  render() {
    return (
      <nav className={styles.nav}>
        <ul>
          <li><Link to="colours">Colours</Link></li>
          <li><Link to="type">Type</Link></li>
          <li><Link to="grids">Grids</Link></li>
          <li><Link to="buttons">Buttons</Link></li>
          <li><Link to="forms">Forms</Link></li>
          <li><Link to="panels">Panels</Link></li>
        </ul>
      </nav>
    );
  }
}
