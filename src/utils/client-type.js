export default function clientType() {
  const ua = navigator.userAgent.toLowerCase();
  if (/micromessenger/.test(ua)) return 'wechat';
  else if (ua.indexOf('android') != -1) return 'android';
  else if (ua.indexOf('iphone') != -1 || ua.indexOf('ipad') != -1) return 'ios';
}
