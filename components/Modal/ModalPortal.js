import React from 'react';
import cx from 'react/lib/cx';

export default React.createClass({

  propTypes: {
    className: React.PropTypes.string,
    isOpen: React.PropTypes.bool.isRequired,
    onRequestClose: React.PropTypes.func,
    children: React.PropTypes.any,
  },

  backgroundClick(e) {
    if (e.target.classList.contains('modal-container')) {
      this.props.onRequestClose(e);
    }
  },

  render() {
    const classes = cx({
      'is-open': this.props.isOpen,
    });

    // TODO: share code with Dropdown for non-this clicks

    return (
      <div onClick={this.backgroundClick} className={`Modal ${this.props.className} ${classes}`}>
        {this.props.onRequestClose ?
          <button
            className="Modal-close button button--mimic-link ss-delete"
            onClick={this.props.onRequestClose}
          />
          : null
        }
        <div className="Modal-window">
          <div className="Modal-window-inner">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  },
});
