import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './Nav.css';

export default class extends Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.state = {
      fixed: false,
      initNavOffset: null,
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    this.setState({
      initNavOffset: React.findDOMNode(this).offsetTop,
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll() {
    const currentScroll = window.scrollY;
    const isFixed = currentScroll > this.state.initNavOffset;
    if (this.state.fixed !== isFixed) {
      this.setState({
        fixed: isFixed,
      });
    }
  }

  render() {
    const css = [styles.nav, this.state.fixed ? styles.isFixed : null].join(' ');
    return (
      <nav className={css}>
        <ul>
          <li className={styles.home}><Link activeClassName="active" to="/">Home</Link></li>
          <li><Link activeClassName="active" to="/colours">Colours</Link></li>
          <li><Link activeClassName="active" to="/type">Type</Link></li>
          <li><Link activeClassName="active" to="/grids">Grids</Link></li>
          <li><Link activeClassName="active" to="/blocks">Blocks</Link></li>
          <li><Link activeClassName="active" to="/buttons">Buttons</Link></li>
          <li><Link activeClassName="active" to="/overlays">Overlays</Link></li>
          <li><Link activeClassName="active" to="/forms">Forms</Link></li>
          <li><Link activeClassName="active" to="/panels">Panels</Link></li>
          <li><Link activeClassName="active" to="/icons">Icons</Link></li>
        </ul>
      </nav>
    );
  }
}
