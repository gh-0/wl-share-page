import React from 'react';
import styles from './styles.css';
import vIcon from '@/assets/ic_authentication_n@svg.svg';
import openApp from '@/utils/open-app';

class UserInfo extends React.Component {
  render() {
    const { auth, headImage, username, date, extra, level } = this.props;
    return (
      <div className={`${styles.wrap} clearfix`} onClick={openApp}>
        <div className={styles.headImageWrap}>
          <img className={styles.headImage} src={headImage} />
          {auth && <img className={styles.vIcon} src={vIcon} />}
        </div>
        <div className={styles.info}>
          <p className={styles.name}>
            {username}
            <span style={{ fontFamily: 'DINCond-Bold' }}>{level ? `Lv.${level}` : ''}</span>
          </p>
          <p className={styles.date}>{date}</p>
        </div>
        <div className={styles.extra}>{extra}</div>
      </div>
    );
  }
}

export default UserInfo;
