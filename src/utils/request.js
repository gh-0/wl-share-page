import fetch from 'dva/fetch';

export default function request(url, options) {
  const baseURL =
    process.env.NODE_ENV === 'development' ? '/api' : 'https://server.wenliaokeji.com';
  return fetch(`${baseURL}/${url}`, options).then(response => response.json());
}