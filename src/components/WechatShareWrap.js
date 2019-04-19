import { Component } from 'react';
import fetch from 'dva/fetch';
import { connect } from 'dva';

class WechatShareWrap extends Component {
  componentWillMount() {
    const { wx, location } = window;

    const url = location.href.split('#')[0];
    fetch(`https://api.wenliaokeji.com/wechat?url=${encodeURI(url)}`)
      .then(res => res.json())
      .then(data => {
        const { appId, timestamp, nonceStr, signature } = data;
        wx.config({
          appId,
          timestamp: parseInt(timestamp),
          nonceStr,
          signature,
          jsApiList: [
            'updateAppMessageShareData',
            'updateTimelineShareData',
            'onMenuShareAppMessage',
            'onMenuShareTimeline',
          ],
        });
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    const { children, question, city } = this.props;

    const { location, wx } = window;
    if (question.detail) {
      wx.ready(function() {
        //需在用户可能点击分享按钮前就先调用
        wx.onMenuShareAppMessage({
          title: `"${question.detail.username}" 遇到了问题，听说你能帮忙？`, // 分享标题
          desc: question.detail.content, // 分享描述
          link: location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl:
            (question.detail.images &&
              question.detail.images.length &&
              question.detail.images[0]) ||
            (question.detail.video &&
              question.detail.video.split('?')[0] +
                '?x-oss-process=video/snapshot,t_50,f_jpg,w_0,h_0,m_fast') ||
            'http://www.wenliaokeji.com/qfy-content/uploads/2018/12/b8a36a8bb3a087ae3e00f45fb36fdfc6.png', // 分享图标
        });
        wx.onMenuShareTimeline({
          title: `"${question.detail.username}" 遇到了问题，听说你能帮忙？`, // 分享标题
          link: location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl:
            (question.detail.images &&
              question.detail.images.length &&
              question.detail.images[0]) ||
            (question.detail.video &&
              question.detail.video.split('?')[0] +
                '?x-oss-process=video/snapshot,t_50,f_jpg,w_0,h_0,m_fast') ||
            'http://www.wenliaokeji.com/qfy-content/uploads/2018/12/b8a36a8bb3a087ae3e00f45fb36fdfc6.png', // 分享图标
        });
      });
    } else if (city.detail) {
      // @TODO
      wx.ready(function() {
        wx.onMenuShareAppMessage({
          title: city.detail.title, // 分享标题
          desc: '来自问聊APP', // 分享描述
          link: location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl:
            city.detail.cover ||
            'http://www.wenliaokeji.com/qfy-content/uploads/2018/12/b8a36a8bb3a087ae3e00f45fb36fdfc6.png', // 分享图标
        });
        wx.onMenuShareTimeline({
          title: city.detail.title, // 分享标题
          link: location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl:
            city.detail.cover ||
            'http://www.wenliaokeji.com/qfy-content/uploads/2018/12/b8a36a8bb3a087ae3e00f45fb36fdfc6.png', // 分享图标
        });
      });
    }
    return children;
  }
}

export default connect(({ question, city }) => ({ question, city }))(WechatShareWrap);
