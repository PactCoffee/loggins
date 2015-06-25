import React, {Component, PropTypes} from 'react';

import styles from './CoffeeInfo.css';
import * as t from 'globals/typography.css';
import * as m from 'globals/modifiers.css';

export default class CoffeeInfo extends Component {

  render() {
    return (
      <div className={styles.root}>
        <h1 className={[t.primary, m.larger, m.alignc, m.mts, m.mbs].join(' ')}>{this.props.coffee}</h1>
        <p className={[m.italic, m.alignc, m.mts, m.mbl].join(' ')}>
          {this.props.tastingNote}
        </p>

        <div className={[styles.row, styles.grid, m.mtl, m.mbl].join(' ')}>
          <div className={styles.half}>
            <p className={[t.title, m.small].join(' ')}>Origin</p>
            <p className={m.italic}>{this.props.origin}</p>
          </div>

          <div className={styles.half}>
            <p className={[t.title, m.small, m.alignr].join(' ')}>Farm</p>
            <p className={[m.italic, m.alignr].join(' ')}>{this.props.farm}</p>
          </div>
        </div>

        <div className={[styles.row, styles.grid].join(' ')}>
          <div className={styles.half}>
            <p className={[t.title, m.small].join(' ')}>Varietal</p>
            <p className={m.italic}>{this.props.varietal}</p>
          </div>

          <div className={styles.half}>
            <p className={[t.title, m.small, m.alignr].join(' ')}>Process</p>
            <p className={[m.italic, m.alignr].join(' ')}>{this.props.process}</p>
          </div>
        </div>

        <div className={styles.coffee}>
          <img className="image" src={this.props.mugUrl} />
        </div>

      </div>
    );
  }
}

CoffeeInfo.propTypes = {
  coffee: PropTypes.string.isRequired,
  tastingNote: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  farm: PropTypes.string.isRequired,
  varietal: PropTypes.string.isRequired,
  process: PropTypes.string.isRequired,
  mugUrl: PropTypes.string,
  lightBg: PropTypes.bool
};

