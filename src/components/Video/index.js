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
          poster={src.split('?')[0] + '?x-oss-process=video/snapshot,t_50,f_jpg,w_0,h_0,m_fast'}
          // preload="metadata"
          controls={true}
          onEnded={() => this.setState({ play: false })}
          onClick={this.handlePlay}
          width="100%"
          src={src}
          ref={v => (this.video = v)}
        />
      </div>
    );
  }
}

export default Video;
