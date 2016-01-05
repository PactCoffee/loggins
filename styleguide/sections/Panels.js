import React, { Component } from 'react';

import Section from '../components/Section';
import * as m from 'globals/modifiers.css';
import Panel from 'components/Panel/Panel';
import Icon from 'components/Icon/Icon';
import styles from '../styleguide.css';

export default class Panels extends Component {
  render() {
    return (
      <Section name="Panels" href="https://github.com/PactCoffee/loggins/blob/master/styleguide%2Fsections%2FPanels.js">
        <Panel>
          <p>This is a <strong>rounded</strong> (and the default) panel</p>
        </Panel>
        <br/>

        <Panel squared>
          <p>This is a <strong>squared</strong> panel</p>
        </Panel>
        <br/>

        <div className={styles.grid}>

          <div className={styles.quarter}>
            <Panel>You can use them with grids</Panel>
          </div>
          <div className={styles.threequarter}>
            <Panel>
              Pretty easy. Just wrap the panel in a container that you control the width of.
            </Panel>
          </div>
        </div>

        <div className={[styles.grid, m.mtm].join(' ')}>
          <div className={styles.third}>
            <Panel>
              <ul>
                <li>Also with a list</li>
                <li><a href="#">Like this</a></li>
                <li><a className="listActive" href="#">or this</a></li>
                <li>
                  <a className="listActive" href="#">
                    <Icon className={m.mrs} name="coffee"/>
                  and this
                  </a>
                </li>
              </ul>
            </Panel>
          </div>
        </div>

        <div className={[styles.grid, m.mtm].join(' ')}>

          <div className={styles.half}>
            <Panel type="error">
              What the hell did you do!?!
            </Panel>
          </div>

          <div className={styles.half}>
            <Panel type="info">
              Oh so informative am I.
            </Panel>
          </div>
        </div>

        <div className={[styles.grid, m.mtm].join(' ')}>
          <div className={styles.half}>
            <Panel type="success">
              You gone done good, didn't you.
            </Panel>
          </div>
        </div>
      </Section>
    );
  }
}
