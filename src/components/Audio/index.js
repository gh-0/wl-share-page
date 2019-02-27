import React from 'react';
import pauseIcon from '@/assets/ic_questionlist_voice_stop_n@3x.png';
import playIcon from '@/assets/lALPDgQ9qgp7iQ_MkMyQ_144_144.png';
import styles from './styles.css';

class Audio extends React.Component {
  componentWillReceiveProps(props) {
    const { src } = props;
    const duration = parseInt(/&l_(\d+)/g.exec(src)[1]);
    this.setState({ duration, time: duration });
  }

  state = {
    play: false,
    duration: 0,
    time: 0,
  };

  handlePlay = () => {
    const { play } = this.state;
    const { audio } = this;
    if (play) {
      audio && audio.pause();
    } else {
      audio && audio.play();
    }
    this.setState({
      play: !play,
    });
  };

  handleTimeUpdate = () => {
    const { duration } = this.state;
    this.setState({ time: parseInt(duration - this.audio.currentTime) });
  };

  handleEnded = () => {
    const { duration } = this.state;
    this.setState({ time: duration });
    this.setState({ play: false });
  };

  render() {
    const { src } = this.props;
    const { play, time } = this.state;
    return (
      <div className={styles.audioWrap} onClick={this.handlePlay}>
        <img
          src={play ? pauseIcon : playIcon}
          style={{
            width: '1.07rem',
            float: 'left',
            padding: '.21rem',
            marginLeft: '8px',
          }}
        />
        <audio
          src={src}
          ref={a => {
            this.audio = a;
          }}
          controls={false}
          onCanPlay={this.handleCanPlay}
          onEnded={this.handleEnded}
          onTimeUpdate={this.handleTimeUpdate}
        />
        <span
          style={{
            fontFamily: 'PingFangSC-Regular',
            fontSize: '0.37rem',
            color: '#FF4050',
            float: 'right',
            lineHeight: '1.07rem',
            marginRight: '16px',
            letterSpacing: '-0.3px',
          }}
        >
          {time}”s
        </span>
      </div>
    );
  }
}

export default Audio;
