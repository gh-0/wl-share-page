import clientType from '@/utils/client-type';
import openAppScheme from '@/utils/open-app-scheme';

export default function openApp() {
  const [type, id] = window.location.href.split('/').slice(-2);
  const client = clientType();
  switch (client) {
    case 'android':
      openAppScheme(
        `intent://wenliaokeji.com/action?action=${
          type === 'city' ? 'cityActivity' : 'question'
        }&id=${id}#Intent;package=com.wenliao.keji;scheme=wenliao;end;`,
        2000,
        () => {
          window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.wenliao.keji';
        }
      );
      break;
    case "ios":
      openAppScheme(`wenliao://id=${id}&tag=${type}`, 2000, () => {
        window.location.href = 'https://itunes.apple.com/cn/app/%E9%97%AE%E8%81%8A-%E8%AE%A9%E7%A4%BE%E4%BA%A4%E5%9B%9E%E5%BD%92%E7%94%9F%E6%B4%BB/id1156785581?ls=1&mt=8';
      })
  }
}
