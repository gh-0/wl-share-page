import React from 'react';
import { connect } from 'dva';
import { Facebook, Instagram } from 'react-content-loader';
import Tag from '@/components/Tag';
import UserInfo from '@/components/UserInfo';
import Answer from '@/components/Answer';
import MediaContent from '@/components/MediaContent';
import WechatShareWrap from '@/components/WechatShareWrap';
import styles from './styles.css';
import pulldownIcon from '@/assets/ic_questionlist_detail_pulldown_n@svg.svg';
import hotIcon from '@/assets/ic_questionlist_detail_comment_hot_n@svg.svg';
import acceptIcon from '@/assets/ic_questionlist_detail_comment_accrpt_n@svg.svg';
import emptyHolder from '@/assets/空状态@svg.svg';
import openApp from '@/utils/open-app';
import DeletePage from '../Delete';

const genesMap = g => {
  return {
    1: '生活',
    2: '情感',
    3: '科技',
    4: '运动',
    5: '有趣',
    6: '其他',
  }[g];
};

const anCoinBackground = c => {
  switch (c) {
    case 0:
    case 10:
    case 20:
    case 50:
      return 'linear-gradient(-180deg, #FFE066 0%, #FFCC00 100%)';
    case 100:
    case 200:
    case 500:
      return 'linear-gradient(-180deg, #83EE9D 0%, #4CD964 100%)';
    case 1000:
    case 2000:
      return 'linear-gradient(-180deg, #FF99A1 0%, #FF4050 100%)';
  }
};

class Question extends React.Component {
  componentWillMount() {
    const { dispatch, match } = this.props;
    const {
      params: { id },
    } = match;
    dispatch({ type: 'question/query', payload: id });
  }

  render() {
    const { detail, answers, loading } = this.props;
    const hotInd = answers.findIndex(a => a.hot);
    const acceptInd = answers.findIndex(a => a.accept);

    const loaderEl = (
      <div style={{ margin: '.4rem', paddingTop: '1.2rem', height: '100vh' }}>
        <Facebook />
        <Instagram />
      </div>
    );
    if (loading) return loaderEl;
    return !loading && !detail ? (
      <DeletePage />
    ) : (
      <WechatShareWrap>
        <div className={styles.wrap}>
          <section className={styles.question}>
            <div className="clearfix">
              {detail &&
                detail.genes &&
                detail.genes.map(g => (
                  <Tag key={g} className={styles.tag}>
                    {genesMap(g)}
                  </Tag>
                ))}
              {detail && (
                <Tag
                  size="large"
                  color="#FFF"
                  background={
                    acceptInd >= 0
                      ? 'linear-gradient(-180deg, #E1E1E3 0%, #C8C9CC 100%)'
                      : anCoinBackground(detail.anCoin)
                  }
                  className={styles.tag}
                  style={{ float: 'right' }}
                >
                  {detail.anCoin === 0 ? '免费' : `${detail.anCoin}An`}
                </Tag>
              )}
            </div>
            <div className={styles.questionDetail}>
              <h1 className={styles.questionContent}>{detail && detail.content}</h1>
              <div>
                <MediaContent {...detail} />
              </div>
              <div className={styles.authorInfo}>
                <UserInfo
                  {...detail}
                  extra={
                    <span
                      style={{
                        fontFamily: 'DINCond-Bold',
                        fontSize: '0.37rem',
                        top: 0,
                        right: 0,
                        position: 'absolute',
                      }}
                    >
                      {detail && detail.score} 人气
                    </span>
                  }
                />
                {/* <Address {...detail} /> */}
              </div>
            </div>
          </section>
          <section className={styles.answerWrap}>
            <h2 className={styles.answerTitle}>
              全部回答：{detail && detail.answerNum}
              <span style={{ float: 'right', color: '#8A8A8F' }} onClick={openApp}>
                人气排序
                <img
                  src={pulldownIcon}
                  style={{ width: '0.53rem', position: 'relative', top: '.12rem' }}
                />
              </span>
            </h2>
            {hotInd < 0 || acceptInd >= 0 ? null : (
              <div className={`${styles.hotAnswerWrap} ${styles.answersItemWrap}`}>
                <Answer {...answers[hotInd]} />
                <img
                  src={hotIcon}
                  style={{ width: '1.07rem', position: 'absolute', top: 0, left: 0 }}
                />
              </div>
            )}
            {acceptInd < 0 ? null : (
              <div className={`${styles.hotAnswerWrap} ${styles.answersItemWrap}`}>
                <Answer {...answers[acceptInd]} />
                <img
                  src={acceptIcon}
                  style={{ width: '1.07rem', position: 'absolute', top: 0, left: 0 }}
                />
              </div>
            )}
            {answers && answers.length ? null : (
              <div style={{ paddingBottom: '14vh' }}>
                <img
                  src={emptyHolder}
                  style={{
                    display: 'block',
                    width: '6.13rem',
                    height: '4rem',
                    margin: '8px auto',
                  }}
                />
                <p style={{ textAlign: 'center', fontSize: '.37rem', color: '#8a8a8a' }}>
                  暂无评论
                </p>
              </div>
            )}
            {[
              ...answers.slice(0, Math.max(0, acceptInd >= 0 ? acceptInd : hotInd)),
              ...answers.slice((acceptInd >= 0 ? acceptInd : hotInd) + 1),
            ].map(a => (
              <div className={styles.answersItemWrap} key={a.userId}>
                <Answer {...a} />
              </div>
            ))}
          </section>
        </div>
      </WechatShareWrap>
    );
  }
}

export default connect(({ question, loading }) => ({
  ...question,
  loading: loading.models['question'],
}))(Question);
