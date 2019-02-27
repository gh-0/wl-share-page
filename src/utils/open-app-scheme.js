export default function openAppScheme(scheme, timeout = 2000, fallback) {
  // android
  // scheme = 'intent://wenliaokeji.com/action?action=cityActivity&id=18522#Intent;package=com.wenliao.keji;scheme=wenliao;end;';
  window.location.href = scheme;
  const last = Date.now();
  setTimeout(function() {
    if (Date.now() - last < timeout + 1000) {
      if (typeof fallback === 'function') fallback();
    }
  }, timeout);
}
