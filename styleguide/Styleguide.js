import React, {PropTypes} from 'react';
import Container from 'components/Container/Container';

import Nav from './components/Nav';

import styles from './styleguide.css';

export default class Styleguide extends React.Component {
  render() {
    return (
      <Container>
        <div className={styles.container}>
          <h1 className={styles.heading}>Loggins</h1>
          <em>Pact's styleguide and component/pattern library</em>
          <p>Make sure to hit the "view source" links on each section to see how to use the components described within.</p>

          <Nav/>

          {this.props.children}

        </div>
      </Container>
    );
  }
}

Styleguide.propTypes = {
  children: PropTypes.any
};
