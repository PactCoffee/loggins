import React, { PropTypes } from 'react';
import { uniqueId } from 'lodash';
import { TransitionMotion, spring } from 'react-motion';

import Logo from 'components/Logo/Logo';
import Nav from './components/Nav';

import css from './styleguide.css';

const ROUTES = [
  'home',
  'colours',
  'type',
  'grids',
  'blocks',
  'buttons',
  'overlays',
  'forms',
  'panels',
  'icons',
];

let oldRouteName = '';
let newRouteName = '';

const physics = [160, 18];

export default class Styleguide extends React.Component {
  constructor(props) {
    super(props);
    this.getStyles = this.getStyles.bind(this);
    this.willEnter = this.willEnter.bind(this);
    this.willLeave = this.willLeave.bind(this);
  }

  componentWillMount() {
    if (this.props.children) {
      oldRouteName = this.props.children.props.location.pathname;
    }
  }
  componentWillReceiveProps(nextProps) {
    // Some dumb logic just so we know which transition to use
    if (!this.props.children && !nextProps.children) {
      oldRouteName = 'home';
      return;
    }

    if (!this.props.children) {
      oldRouteName = 'home';
      newRouteName = nextProps.children.props.location.pathname;
      return;
    }
    if (!nextProps.children) {
      oldRouteName = this.props.children.props.location.pathname;
      newRouteName = 'home';
      return;
    }
    const _oldRouteName = this.props.children.props.location.pathname;
    const _newRouteName = nextProps.children.props.location.pathname;
    if (_oldRouteName !== _newRouteName) {
      oldRouteName = _oldRouteName;
      newRouteName = _newRouteName;
    }
  }

  getStyles() {
    const { children } = this.props;
    return {
      [uniqueId('animator')]: {
        opacity: spring(1),
        x: spring(0, physics),
        child: children,
      },
    };
  }

  willEnter() {
    const { children } = this.props;
    const oldIndex = ROUTES.indexOf(oldRouteName.replace('/', ''));
    const newIndex = ROUTES.indexOf(newRouteName.replace('/', ''));
    return {
      opacity: spring(0),
      x: spring(newIndex > oldIndex ? 120 : -120, physics),
      child: children,
    };
  }

  willLeave(key, config) {
    const oldIndex = ROUTES.indexOf(oldRouteName.replace('/', ''));
    const newIndex = ROUTES.indexOf(newRouteName.replace('/', ''));
    return {
      opacity: spring(0),
      x: spring(newIndex > oldIndex ? -120 : 120, physics),
      child: config.child,
    };
  }

  render() {
    return (
      <div className={css.root}>
        <div className={css.heading}>
            <Logo className={css.logo} size="small" type="horizontal"/>
            <h1>
              <a href="https://github.com/PactCoffee/loggins">Loggins</a>
            </h1>
        </div>

        <Nav/>

        <div className={css.container}>
          <TransitionMotion styles={this.getStyles()}
            willEnter={this.willEnter}
            willLeave={this.willLeave}
          >
            {interpolatedcss =>
              <div className={css.animator}>
                {Object.keys(interpolatedcss).map((key, i) => {
                  const { child, opacity, x } = interpolatedcss[key];
                  return (
                    <div key={i} style={{
                      opacity,
                      transform: `translate3d(${x}%, 0,0)`,
                    }}
                    >
                      {child}
                    </div>
                  );
                })}
              </div>
            }
          </TransitionMotion>
        </div>
      </div>
    );
  }
}

Styleguide.propTypes = {
  children: PropTypes.any,
};
