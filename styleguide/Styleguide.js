import React, {PropTypes} from 'react';
import RTG from 'react/lib/ReactCSSTransitionGroup';

import Nav from './components/Nav';
import Container from 'components/Container/Container';
import Logo from 'components/Logo/Logo';

import styles from './styleguide.css';

const ROUTES = [
  'home',
  'colours',
  'type',
  'grids',
  'buttons',
  'forms',
  'panels'
];
let oldRouteName = '';
let newRouteName = '';

export default class Styleguide extends React.Component {
  componentWillMount() {
    if (this.props.children) {
      oldRouteName = this.props.children.props.location.pathname;
    }
  }
  componentWillReceiveProps(nextProps) {
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
  render() {
    const oldIndex = ROUTES.indexOf(oldRouteName.replace('/', ''));
    const newIndex = ROUTES.indexOf(newRouteName.replace('/', ''));

    let transitionName;
    if (newIndex > oldIndex) {
      transitionName = 'transLeft';
    } else {
      transitionName = 'transRight';
    }

    return (
      <Container>
        <div className={styles.heading}>
            <Logo className={styles.logo} size="small" type="horizontal"/>
            <h1>
              Loggins
            </h1>
        </div>

        <Nav/>

        <div className={styles.container}>
          <RTG className={styles.animator} transitionName={transitionName}>
            {this.props.children ?
              <div key={this.props.children.props.location.pathname}>
                {this.props.children}
              </div>
             :
              <div key="home">
                <em>Pact's styleguide and component/pattern library</em>
                <p>Make sure to hit the "view source" links on each section to see how to use the components described within.</p>
              </div>
            }
          </RTG>
        </div>
      </Container>
    );
  }
}

Styleguide.propTypes = {
  children: PropTypes.any
};
