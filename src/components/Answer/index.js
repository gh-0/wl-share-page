import React from 'react';
import UserInfo from '@/components/UserInfo';
import Tag from '@/components/Tag';
import Image from '@/components/Image';
import moreIcon from '@/assets/ic_tweet_detail_comment_more_n@svg.svg';
import supportIcon from '@/assets/ic_questionlist_detail_comment_support_n@svg.svg';
import opposeIcon from '@/assets/ic_questionlist_detail_comment_oppose_n@svg.svg';
import styles from './styles.css';

class Answer extends React.Component {
  render() {
    const { content, image } = this.props;
    return (
      <div>
        <UserInfo
          {...this.props}
          extra={
            <img
              src={moreIcon}
              style={{ width: '0.64rem', position: 'absolute', top: 0, right: 0 }}
            />
          }
        />
        <p className={styles.content}>{content}</p>
        {image && (
          <Image
            src={image}
            style={{
              height: '1.8rem',
              width: '1.8rem',
              margin: '8px 1.3rem 0',
            }}
          />
        )}
        <section className={styles.actionWrap}>
          <Tag className={styles.action}>6条回复</Tag>
          <div className={styles.rightAction}>
            <Tag className={styles.action}>互动</Tag>
            <Tag className={styles.action}>
              <img src={supportIcon} className={styles.actionIcon} /> 234
            </Tag>
            <Tag className={styles.action}>
              <img src={opposeIcon} className={styles.actionIcon} /> 234
            </Tag>
          </div>
        </section>
      </div>
    );
  }
}

export default Answer;
