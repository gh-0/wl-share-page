import { queryQuestion } from '@/services';

export default {
  namespace: 'question',
  state: {
    detail: null,
    answers: [],
  },
  effects: {
    *query({ payload }, { call, put }) {
      const data = yield call(queryQuestion, payload);
      const question = data.question.vo;
      const answers = data.answerList.map(a => a.vo);
      yield put({ type: 'save', payload: { question, answers } });
    },
  },
  reducers: {
    save(state, { payload }) {
      const { question, answers } = payload;
      return {
        ...state,
        detail: question,
        answers,
      };
    },
  },
};
