import React from 'react';
import clientType from '@/utils/client-type';
import backgroundImg from '@/assets/插画@svg.svg';
import logoIcon from '@/assets/logo.png';
import openApp from '@/utils/open-app';

class Download extends React.Component {
  render() {
    const types = clientType();
    if (types.indexOf('wechat') === -1) {
      openApp();    
    }
    return (
      <div
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          height: '100vh',
          padding: '0',
          background: '#fff',
          backgroundImage: `url(${backgroundImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'left bottom',
        }}
      >
        <div
          style={{
            width: '6.67rem',
            margin: '0 auto',
            padding: '0',
            paddingTop: '20vh',
            textAlign: 'center',
          }}
        >
          <img src={logoIcon} style={{ width: '2rem' }} />
          <p
            style={{
              fontSize: '0.48rem',
              fontWeight: 'bold',
            }}
          >
            问聊，有温度
          </p>
          <div
            style={{
              padding: '.32rem 2.09rem',
              backgroundImage: 'linear-gradient(-135deg, #FF3344 0%, #FF6040 100%)',
              borderRadius: '45px',
              marginTop: '8vh',
              display: "flex",
              alignItems: "center"
            }}
          >
            <a
              style={{
                color: '#fff',
                fontSize: '0.4rem',
                textDecoration: "none",
                display: "block",
                width: "100%",
                textAlign: 'center'
              }}
              href={
                clientType().indexOf('ios') !== -1
                  ? 'https://itunes.apple.com/cn/app/%E9%97%AE%E8%81%8A-%E8%AE%A9%E7%A4%BE%E4%BA%A4%E5%9B%9E%E5%BD%92%E7%94%9F%E6%B4%BB/id1156785581?ls=1&mt=8'
                  : 'http://a.app.qq.com/o/simple.jsp?pkgname=com.wenliao.keji'
              }
            >
              下载问聊
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Download;
