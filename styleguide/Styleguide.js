import React from 'react';
import BtnSection from './sections/BtnSection';
import FormSection from './sections/FormSection';

import styles from './styleguide.css';

export default class Styleguide extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>Pact Styleguide &amp; Component Library</h1>

        <BtnSection/>
        <FormSection/>
      </div>
    );
  }
}
