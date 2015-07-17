import React, {Component} from 'react';

import Section from './Section';
import styles from '../styleguide.css';
import * as m from 'globals/modifiers.css';
import List from 'components/List/List';
import Panel from 'components/Panel/Panel';
import Icon from 'components/Icon/Icon';

export default class Panels extends Component {
  render() {
    return (
      <Section name="Panels">
        <Panel>
          <p>This is a panel</p>
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
              <List>
                <li>Also with a list</li>
                <li><a href="#">Like this</a></li>
                <li><a className="listActive" href="#">or this</a></li>
                <li>
                  <a className="listActive" href="#">
                    <Icon className={m.mrs} name="coffee"/>
                  and this
                  </a>
                </li>
              </List>
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
