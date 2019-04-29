import React from 'react';
import { connect } from 'dva';
import moment from 'moment';
import Comment from '@/components/Comment';
import styles from './styles.css';
import iframe from './iframe.less';
import { Facebook, Instagram } from 'react-content-loader';
import DeletePage from '../Delete';
import WechatShareWrap from '@/components/WechatShareWrap';

class City extends React.Component {
  state = {
    height: 100,
  };
  componentWillMount() {
    const { dispatch, match } = this.props;
    const {
      params: { id },
    } = match;
    dispatch({ type: 'city/queryDetail', payload: id });
    dispatch({ type: 'city/queryContent', payload: id });
  }

  handleReceiveMessage = e => {
    const { height, type } = e.data;
    if (type === 'IFRAME_HEIGHT') this.setState({ height });
  };

  componentDidMount() {
    window.addEventListener('message', this.handleReceiveMessage, true);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.handleReceiveMessage, true);
  }

  render() {
    const { detail, comments, content, loading, match } = this.props;
    const {
      params: { id },
    } = match;
    const { cover, headImage } = detail || {};
    const iframeHeight = this.state.height;
    // 内容已删除

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
          <div className={styles.contentWrap}>
            <h1>{detail && detail.title}</h1>
            <div>
              <iframe
                height={iframeHeight}
                scrolling="no"
                style={{
                  overflow: 'hidden',
                  width: '100%',
                  outline: 'none',
                  padding: 0,
                  margin: 0,
                  border: 0,
                }}
                src={`//api.wenliaokeji.com/agent.html?url=${encodeURIComponent(
                  '//api.wenliaokeji.com/content.html?cityId=' + id
                )}`}
              />
            </div>
            {/* <div className={iframe.wrap} dangerouslySetInnerHTML={{ __html: content }} /> */}
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
    return !loading && !(content || detail) ? (
      <DeletePage />
    ) : (
      <WechatShareWrap>
        <div>{loading ? loaderEl : contentEl}</div>
      </WechatShareWrap>
    );
  }
}

export default connect(({ city, loading }) => ({
  ...city,
  loading: loading.models['city'],
}))(City);
