import clientType from '@/utils/client-type';
import openAppScheme from '@/utils/open-app-scheme';

export default function openApp(flag = true) {
  const [type, id] = window.location.href.split('/').slice(-2);
  const client = clientType();
  if (client.indexOf('wechat') != -1) {
    window.location.href = `?hash=${window.location.hash.slice(1)}/#/wechat`
  } else if (client.indexOf('android') != -1) {
    openAppScheme(
      `intent://wenliaokeji.com/action?action=${
        type === 'city' ? 'cityActivity' : 'question'
      }&id=${id}#Intent;package=com.wenliao.keji;scheme=wenliao;end;`,
      2000,
      () => flag && (window.location.href = `?hash=${window.location.hash.slice(1)}/#/download`)
    );
  } else if (client.indexOf('ios') != -1) {
    openAppScheme(`wenliao://id=${id}&tag=${type}`, 2000, () => flag && (window.location.href = `?hash=${window.location.hash.slice(1)}/#/download`));
  }
}
