import React from 'react';
import Download from '@/pages/Download';
import backgroundImg from '@/assets/插画@svg.svg';
import iosHelpIcon from '@/assets/引导图@3x.png';
import helpIcon from "@/assets/引导图-浏览器@3x.png";
import clientType from '@/utils/client-type';

class Wechat extends React.Component {
  render() {
    const types = clientType();
    if (types.indexOf('wechat') === -1) {
      return <Download />;
      // window.location.href = "/#/download"
      // const search = new URLSearchParams(window.location.search);
      // const hash = search.get("hash");
      // if(hash) window.location.href = "/#" + hash;
      // else window.location.href = "/#/download"
    }
    return (
      <div
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          height: '100vh',
          padding: '0',
          background: '#fff',
          position: 'relative',
          backgroundImage: `url(${backgroundImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'left bottom',
        }}
      >
        <img
          style={{
            position: 'absolute',
            top: '0',
            right: '0',
            width: '7.2rem',
            margin: '32px',
          }}
          src={types.indexOf("ios")!==-1? iosHelpIcon: helpIcon}
        />
      </div>
    );
  }
}

export default Wechat;
