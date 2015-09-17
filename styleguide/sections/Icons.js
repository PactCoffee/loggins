import React from 'react';
import Section from '../components/Section';

import * as allIcons from 'components/Icon/icons.js';
import * as m from 'globals/modifiers.css';
import Icon from 'components/Icon/Icon';

export default class Icons {
  render() {
    delete allIcons.default;

    const container = {
      textAlign: 'center',
    };
    const outer = {
      display: 'inline-block',
      textAlign: 'center',
      padding: '0.5em',
      width: '10em',
    };
    const title = {
      fontFamily: 'monospace',
    };
    const icon = {
      display: 'block',
      margin: '0 auto',
      fontSize: '3em',
      background: 'rgba(255,255,255,0.7)',
      borderRadius: '2px',
    };

    return (
      <Section name="Icons" href="https://github.com/PactCoffee/loggins/blob/master/styleguide%2Fsections%2FIcons.js">
        <h2>Icon component</h2>
        <p>
          Use like: <code>{'<Icon name="heart"/>'}</code> to produce: <Icon name="heart"/>
        </p>
        <p>You can pass classnames in too to modify their look:
          <br/>
          <Icon name="chevron"/>
          <Icon name="chevron" className={m.rotate90}/>
          <Icon name="chevron" className={m.rotate180}/>
          <Icon name="chevron" className={m.rotate270}/>
        </p>

        <h2>All our icons</h2>
        <div style={container}>
          {Object.keys(allIcons).map(k =>
            <div style={outer}>
              <Icon style={icon} name={k}/>
              <span style={title}>{k}</span>
            </div>
          )}
        </div>
      </Section>
    );
  }
}
