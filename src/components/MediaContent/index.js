import React from 'react';
import Image from '@/components/Image';
import Video from '@/components/Video';
import Audio from '@/components/Audio';
import Vote from '@/components/Vote';

class MediaContent extends React.Component {
  render() {
    const { images, audio, voteVo, video } = this.props;
    const voteEl = voteVo ? <Vote voteVo={voteVo} /> : null;
    const imagesContentEl =
      images &&
      images.map((url, _, arr) => {
        const wh = /w_(\d+)&h_(\d+)/g.exec(url);
        const w = parseInt(wh[1]);
        const h = parseInt(wh[2]);
        if (w - h >= h / 3 && arr.length === 1) {
          // 4 : 3
          return (
            <Image
              key={url}
              src={url}
              width="6.16rem"
              height="3.47rem"
              style={{ float: 'left', marginRight: '8px' }}
            />
          );
        } else if (h - w >= w / 3 && arr.length === 1) {
          // 3 : 4
          return (
            <Image
              key={url}
              src={url}
              width="3.47rem"
              height="6.16rem"
              style={{ float: 'left', marginRight: '8px' }}
            />
          );
        } else {
          // 4 : 4
          return (
            <Image
              key={url}
              src={url}
              width="4rem"
              height="4rem"
              style={{ display: 'inline-block', marginRight: '8px' }}
            />
          );
        }
      });
    const videoEl = video ? <Video src={video} /> : null;
    const audioEl = audio ? <Audio src={audio} /> : null;

    return (
      <div
        style={{
          marginTop: '.27rem',
          position: 'relative',
          overflow: 'hidden',
          overflowX: 'auto',
          whiteSpace: 'nowrap',
        }}
      >
        {voteEl}
        {audioEl}
        {videoEl}
        {imagesContentEl}
      </div>
    );
    // const audioEl =
  }
}

export default MediaContent;
