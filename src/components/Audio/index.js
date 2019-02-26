import React from 'react';
import pauseIcon from '@/assets/ic_questionlist_voice_stop_n@3x.png';
import playIcon from "@/assets/lALPDgQ9qgp7iQ_MkMyQ_144_144.png";
import styles from './styles.css';


class Audio extends React.Component {
  state = {
    play: false
  }

  handlePlay = () => {
    const { play } = this.state;
    const { audio } = this;
    if (play) {
      audio && audio.pause();
    } else {
      audio && audio.play();
    }
    this.setState({
      play: !play
    })
  }

  handleCanPlay = (...params) => {
    console.log(params);
  }

  render() {
    const { src } = this.props;
    const { play } = this.state;
    return (
      <div className={styles.audioWrap} onClick={this.handlePlay}>
        <img src={play? pauseIcon: playIcon} style={{
          width: "1.07rem",
          float: "left",
          padding: ".21rem",
          marginLeft: "8px"
        }} />
        <audio src={src} ref={a=>this.audio=a} onCanPlay={this.handleCanPlay}/>
        <span style={{
          fontFamily: "PingFangSC-Regular",
          fontSize: "0.37rem",
          color: "#FF4050",
          float: "right",
          lineHeight: "1.07rem",
          marginRight: "16px",
          letterSpacing: "-0.3px",
        }}>59”s</span>
      </div>
    );
  }
}

export default Audio
