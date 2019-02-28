import styles from './index.css';
import logoIcon from '@/assets/wenliao_logo@svg.svg';
import arrowIcon from '@/assets/展开@svg.svg';
import openApp from '@/utils/open-app';

function BasicLayout(props) {
  return (
    <div className={styles.wrap}>
      <header className={styles.pageHeader}>
        <img src={logoIcon} onClick={openApp} />
        <span>问聊 - 让生活有温度</span>
        <div className={styles.download} onClick={openApp}>
          下载问聊
        </div>
      </header>
      <div className={styles.content}>{props.children}</div>
      <footer className={styles.pageFooter}>
        <img src={arrowIcon} />
        <div className={styles.openBtn}>打开问聊，一起参与回答</div>
      </footer>
    </div>
  );
}

export default BasicLayout;
