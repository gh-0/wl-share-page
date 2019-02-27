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
  }
}
