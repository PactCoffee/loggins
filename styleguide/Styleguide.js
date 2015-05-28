import React from 'react';
import Colours from './sections/Colours';
import Grids from './sections/Grids';
import Buttons from './sections/Buttons';
import Forms from './sections/Forms';

import styles from './styleguide.css';

/**
 * Potential layout
 * ================
 *
 * - Brand colours
 * - Typography
 * - Forms
 *   - Buttons
 *   - Inputs
 * - Feedback
 *   - Alerts
 *   - Banners
 * - Modals
 * - Icons
 * - Grids (describe usage rather than prescribe)
 */

export default class Styleguide extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>Pact Styleguide &amp; Component Library</h1>
        <p>I need to write some kind of description here.</p>

        <Grids/>
        <Colours/>
        <Buttons/>
        <Forms/>
      </div>
    );
  }
}
