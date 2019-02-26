import React from 'react';
import styles from './styles.css';

class Tag extends React.Component {
  render() {
    const { children, size, color, background, style } = this.props;
    return (
      <span
        {...this.props}
        style={{ ...style, color, background }}
        className={`${styles.tag} ${this.props.className} ${size === 'large' ? styles.large : ''}`}
      >
        {children}
      </span>
    );
  }
}

export default Tag;
