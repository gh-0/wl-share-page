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
        <div className={styles.download} onClick={()=>openApp(false)}>
          下载问聊
        </div>
      </header>
      <div className={styles.content}>{props.children}</div>
      <footer className={styles.pageFooter}>
        <img src={arrowIcon} onClick={openApp}/>
        <p onClick={openApp} className={`p-center ${styles.openBtn}`}>
          {/question/g.test(window.location.href)? "打开问聊，看更多回答":"打开问聊，说说我的想法"}
        </p>
      </footer>
    </div>
  );
}

export default BasicLayout;
