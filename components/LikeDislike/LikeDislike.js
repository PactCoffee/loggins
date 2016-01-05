import React, { Component, PropTypes } from 'react';

import styles from './LikeDislike.css';
import * as m from 'globals/modifiers.css';
import Icon from 'components/Icon/Icon';

export default class LikeDislike extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: props.liked === true,
      disliked: props.liked === false,
    };
    this.like = this.like.bind(this);
    this.dislike = this.dislike.bind(this);
    this.id = new Date().getTime();
  }

  like() {
    if (this.state.liked) {
      return this.clear();
    }

    this.setState({
      liked: true,
      disliked: false,
    });
    this.props.onChange(true);
  }

  dislike() {
    if (this.state.disliked) {
      return this.clear();
    }

    this.setState({
      liked: false,
      disliked: true,
    });
    this.props.onChange(false);
  }

  clear() {
    this.setState({
      liked: false,
      disliked: false,
    });
    this.props.onChange(null);
  }

  render() {
    const outerStyles = [
      styles.root,
      this.state.liked ? styles.liked : null,
      this.state.disliked ? styles.disliked : null,
    ].join(' ');

    return (
      <form className={outerStyles}>

        <input
          id={`dislike-${this.id}`}
          className={styles.dislike}
          onChange={this.dislike}
          checked={this.state.disliked}
          type="radio"
        />
        <label htmlFor={`dislike-${this.id}`}>
          <Icon className={m.rotate180} name="thumb"/>
        </label>

        <input
          id={`like-${this.id}`}
          className={styles.like}
          onChange={this.like}
          checked={this.state.liked}
          type="radio"
        />
        <label htmlFor={`like-${this.id}`}>
          <Icon name="thumb"/>
        </label>
      </form>
    );
  }
}

LikeDislike.propTypes = {

  // true = liked
  // false = disliked
  // null = no selection
  liked: PropTypes.any,

  // Called with the user's preference
  onChange: PropTypes.func.isRequired,
};
