import clientType from '@/utils/client-type';
import openAppScheme from '@/utils/open-app-scheme';

export default function openApp(flag = true) {
  const [hashType, hashId] = window.location.href.split('/').slice(-2);
  const search = new URLSearchParams(window.location.search);

  const type = search.get('type') || hashType;
  const id = search.get('id') || hashId;

  const client = clientType();

  // 直接打开应用宝url
  if (!flag) {
    return window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.wenliao.keji";
  }

  if (client.indexOf('wechat') != -1) {
    window.location.href = `?type=${type}&id=${id}#/wechat`;
  } else if (client.indexOf('android') != -1) {
    openAppScheme(
      `intent://wenliaokeji.com/action?action=${
        type === 'city' ? 'cityActivity' : 'question'
      }&id=${id}#Intent;package=com.wenliao.keji;scheme=wenliao;end;`,
      2000,
      () =>
      flag &&
      window.location.hash !== '#/download' &&
      window.location.hash !== '#/wechat' &&
      (window.location.href = `/#/download`)
    );
  } else if (client.indexOf('ios') != -1) {
    openAppScheme(
      `wenliao://wenliao.com?id=${id}&tag=${type}`,
      2000,
      () =>
      flag &&
      window.location.hash !== '#/download' &&
      window.location.hash !== '#/wechat' &&
      (window.location.href = `/#/download`)
    );
  }
}
