import React from 'react';
import Container from 'components/Container/Container';
import Colours from './sections/Colours';
import Grids from './sections/Grids';
import Buttons from './sections/Buttons';
import Forms from './sections/Forms';
import Type from './sections/Type';
import Panels from './sections/Panels';

import styles from './styleguide.css';

import Icon from 'components/Icon/Icon';

/**
 * Potential layout
 * ================
 *
 * - Brand colours ✔
 * - Grids ✔
 * - Typography
 * - Forms
 *   - Buttons
 *   - Inputs
 * - Feedback
 *   - Alerts
 *   - Banners
 * - Modals
 * - Icons
 */

export default class Styleguide extends React.Component {
  render() {
    return (
      <Container>
        <div className={styles.container}>
          <h1 className={styles.heading}>Loggins</h1>
          <em>Pact's styleguide and component/pattern library</em>
          <p>Make sure to hit the "view source" links on each section to see how to use the components described within.</p>

          <Colours/>
          <Type/>
          <Grids/>
          <Buttons/>
          <Forms/>
          <Panels/>
        </div>
      </Container>
    );
  }
}
