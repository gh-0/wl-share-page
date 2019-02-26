import request from '@/utils/request';

async function baseQuery(url, params) {
  return request(`${url}/${params}`);
}

export async function queryCity(params) {
  return baseQuery('/share/base/city', params);
}

export async function queryContent(params) {
  return baseQuery('/city/article/content', params);
}

export async function queryQuestion(params) {
  return baseQuery('/share/base/question', params);
}
