import { queryCity, queryContent } from '@/services';

export default {
  namespace: 'city',
  state: {
    detail: null,
    comments: [],
    content: '',
  },
  effects: {
    *queryDetail({ payload }, { call, put }) {
      const data = yield call(queryCity, payload);
      const {
        city: { vo: detail },
        commentList: comments,
      } = data;
      yield put({ type: 'detail', payload: { detail, comments: comments.map(i => i.vo) } });
    },
    *queryContent({ payload }, { call, put }) {
      const data = yield call(queryContent, payload);
      const { content } = data;
      yield put({ type: 'content', payload: content });
    },
  },
  reducers: {
    detail(state, { payload }) {
      const { detail, comments } = payload;
      return {
        ...state,
        detail,
        comments,
      };
    },
    content(state, { payload }) {
      return {
        ...state,
        content: payload,
      };
    },
  },
};
