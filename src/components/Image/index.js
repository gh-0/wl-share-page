import React from 'react';

class Image extends React.Component {
  render() {
    const { src, width, height, style } = this.props;
    return (
      <div
        style={{
          width,
          height,
          padding: 0,
          margin: 0,
          borderRadius: '0.05rem',
          backgroundImage: `url(${src})`,
          backgroundClip: 'padding-box',
          backgroundRepeat: 'no-repeat',
          backgroundOrigin: 'padding-box',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          ...style,
        }}
      />
    );
  }
}

export default Image;
