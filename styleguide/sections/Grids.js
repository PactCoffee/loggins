import React, { Component } from 'react';

import Section from '../components/Section';
import styles from '../styleguide.css';

export default class GridSection extends Component {
  render() {
    return (
      <Section name="Grids" href="https://github.com/PactCoffee/loggins/blob/master/styleguide/sections/Grids.js">
        <p>We use <a href="https://github.com/corysimmons/lost">lost</a> for grids. This means we can do whatever the hell we want with columns:</p>

        <div className={`${styles.lost} ${styles.red}`}>
          <div className={styles.quarter}>1/4</div>
          <div className={styles.quarter}>1/4</div>
          <div className={styles.quarter}>1/4</div>
          <div className={styles.quarter}>1/4</div>
        </div>

        <div className={`${styles.lost} ${styles.orange}`}>
          <div className={styles.third}>1/3</div>
          <div className={styles.third}>1/3</div>
          <div className={styles.third}>1/3</div>
        </div>

        <div className={`${styles.lost} ${styles.green}`}>
          <div className={styles.half}>1/2</div>
          <div className={styles.half}>1/2</div>
        </div>

        <div className={`${styles.lost} ${styles.grey}`}>
          <div className={styles.quarter}>1/4</div>
          <div className={styles.half}>1/2</div>
          <div className={styles.quarter}>1/4</div>
        </div>

        <p>These styles used above are not accessible from loggins, they're just used to display what's possible with the lost grid library.</p>

      </Section>
    );
  }
}
