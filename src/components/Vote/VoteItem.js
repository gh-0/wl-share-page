import React from 'react';
import styles from './styles.css';

class VoteItem extends React.Component {
  render() {
    const { vote, content, ind, poll, total, borderColor, progressColor, color } = this.props;
    // 投票未结束
    if (!vote) {
      return (
        <p
          style={{
            fontSize: '0.37rem',
            color: '#FF4050',
            textAlign: 'center',
            borderRadius: '40px',
            border: '1px solid #FF4050',
            padding: '.24rem',
          }}
        >
          {ind}. {content}
        </p>
      );
    } else {
      return (
        <div className={styles.endedWrap}>
          <div>
            <span
              style={{
                fontSize: '0.48rem',
                color: color || '#000',
                textAlign: 'center',
              }}
            >
              {ind}
            </span>
            <span
              style={{
                fontFamily: 'DINCond-Bold',
                fontSize: '.27rem',
                color: color || '#FF4050',
                letterSpacing: 0,
                textAlign: 'center',
              }}
            >
              {' '}
              名
            </span>
          </div>
          <div className={styles.progress} style={{ borderColor: borderColor }}>
            <div
              style={{
                background: progressColor,
                minWidth: '.6rem',
                width: `${parseInt((100 * poll) / total)}%`,
              }}
              className={styles.progressBar}
            />
            <span style={{ margin: '8px' }}>
              {ind}. {content}
            </span>
            <span style={{ position: 'absolute', right: '4em' }}>{poll}票</span>
            <span style={{ float: 'right', marginRight: '8px' }}>
              {parseInt((100 * poll) / total)}%
            </span>
          </div>
        </div>
      );
    }
  }
}

export default VoteItem;
