import React from 'react';
import { connect } from 'dva';
import moment from 'moment';
import Comment from '@/components/Comment';
import Address from '@/components/Address';
import styles from './styles.css';
import iframe from './iframe.less';
import { Facebook, Instagram } from 'react-content-loader';

class City extends React.Component {
  componentWillMount() {
    const { dispatch, match } = this.props;
    const {
      params: { id },
    } = match;
    dispatch({ type: 'city/queryDetail', payload: id });
    dispatch({ type: 'city/queryContent', payload: id });
  }
  render() {
    const { detail, comments, content, loading } = this.props;
    const { cover, headImage } = detail || {};

    const loaderEl = (
      <div style={{ margin: '.4rem', paddingTop: '1.2rem', height: '100vh' }}>
        <Facebook />
        <Instagram />
      </div>
    );

    const contentEl = (
      <div>
        <header>
          <img src={cover} className={styles.cover} />
        </header>
        <section className={`${styles.articleWrap} clearfix`}>
          <div className={`${styles.userBar} clearfix`}>
            <img src={headImage} className={styles.headImage} />
            <div className={styles.userInfo}>
              <p className={styles.userName}>{detail && detail.username}</p>
              <p>{moment(detail && detail.timestamp).format('YY年MM月 hh:mm')}</p>
            </div>
            <p className={styles.readTotal}>{detail && detail.readNum} 阅读</p>
          </div>
          <Address address={detail && detail.address} />
          <div className={styles.contentWrap}>
            <h1>{detail && detail.title}</h1>
            <div className={iframe.wrap} dangerouslySetInnerHTML={{ __html: content }} />
          </div>
          <section className={styles.topicWrap}>
            <h2>相关话题</h2>
            {detail &&
              detail.topic &&
              detail.topic.map((t, ind) => {
                return <span key={ind}>{t.content}</span>;
              })}
          </section>
        </section>
        <section className={styles.commentWrap}>
          <h2 className={styles.commentTotal}>
            全部评论 <span>{detail && detail.commentNum}</span>
          </h2>
          <section className={styles.commentListWrap}>
            {comments.map((c, ind) => {
              return <Comment {...c} level={false} key={ind} />;
            })}
          </section>
        </section>
      </div>
    );
    return <div>{loading ? loaderEl : contentEl}</div>;
  }
}

export default connect(({ city, loading }) => ({
  ...city,
  loading: loading.models['city'],
}))(City);
