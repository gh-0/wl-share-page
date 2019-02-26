import React from 'react';
import playIcon from '@/assets/ic_questionlist_video_play_n@3x.png';

class Video extends React.Component {
  state = {
    play: false,
  };

  handlePlay = () => {
    const { play } = this.state;
    if (!play) {
      this.video.play();
      this.setState({
        play: true,
      });
    } else {
      this.video.pause();
      this.setState({
        play: false,
      });
    }
  };

  render() {
    const { src } = this.props;
    const { play } = this.state;
    return (
      <div style={{ width: '100%', position: 'relative' }}>
        <video
          onEnded={() => this.setState({ play: false })}
          onClick={this.handlePlay}
          width="100%"
          src={src}
          ref={v => (this.video = v)}
        />
        <img
          src={playIcon}
          style={{
            width: '1.17rem',
            position: 'absolute',
            top: '50%',
            left: '50%',
            zIndex: play ? -1 : 0,
            transform: 'translateX(-50%) translateY(-50%)',
          }}
        />
      </div>
    );
  }
}

export default Video;
