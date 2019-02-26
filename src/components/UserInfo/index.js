import React from 'react';
import styles from './styles.css';
import vIcon from '@/assets/ic_authentication_n@svg.svg';

class UserInfo extends React.Component {
  render() {
    const { auth, headImage, username, date, extra, level } = this.props;
    return (
      <div className={`${styles.wrap} clearfix`}>
        <div className={styles.headImageWrap}>
          <img className={styles.headImage} src={headImage} />
          {auth && <img className={styles.vIcon} src={vIcon} />}
        </div>
        <div className={styles.info}>
          <p className={styles.name}>
            {username}
            <span>{level ? `Lv.${level}` : ''}</span>
          </p>
          <p className={styles.date}>{date}</p>
        </div>
        <div className={styles.extra}>{extra}</div>
      </div>
    );
  }
}

export default UserInfo;
