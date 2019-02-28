import React from 'react';
import UserInfo from '@/components/UserInfo';
import Image from '@/components/Image';
import styles from './styles.css';
import likeIcon from '@/assets/ic_tweet_detail_comment_like_n@svg.svg';
import moreIcon from '@/assets/ic_tweet_detail_comment_more_n@svg.svg';

class Comment extends React.Component {
  render() {
    const { content, likeNum, replyNum, image } = this.props;
    return (
      <div className={`${styles.wrap} clearfix`}>
        <UserInfo
          {...this.props}
          extra={
            <img
              src={moreIcon}
              style={{ width: '0.64rem', position: 'absolute', top: 0, right: 0 }}
            />
          }
        />
        <div className={styles.commentWrap}>
          <p className={styles.comment}>{content}</p>
          <Image
            src={image}
            style={{
              height: '1.8rem',
              width: '1.8rem',
              margin: '0',
            }}
          />
          <div className={styles.actionWrap}>
            {replyNum ? <div className={`${styles.reply} clearfix`}>{replyNum}条回复</div> : null}
            <div className={styles.like}>
              <img src={likeIcon} className={styles.likeIcon} />
              {likeNum}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
