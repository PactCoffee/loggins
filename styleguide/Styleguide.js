import React from 'react';
import Container from 'components/Container/Container';
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
      <Container>
        <div className={styles.container}>
          <h1 className={styles.heading}>Loggins</h1>
          <em>Pact's styleguide and component/pattern library</em>
          <p>Make sure to hit the "view source" links on each section to see how to use the component described within.</p>

          <Grids/>
          <Colours/>
          <Buttons/>
          <Forms/>
        </div>
      </Container>
    );
  }
}
