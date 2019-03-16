export default function clientType() {
  const types = [];
  const ua = navigator.userAgent.toLowerCase();
  if (/micromessenger/.test(ua) || ua.indexOf('qq') != -1 || ua.indexOf('weibo') !== -1)
    types.push('wechat');
  if (ua.indexOf('android') != -1) types.push('android');
  if (ua.indexOf('iphone') != -1 || ua.indexOf('ipad') != -1) types.push('ios');
  return types;
}
