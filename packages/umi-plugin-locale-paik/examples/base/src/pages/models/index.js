import { formatMessage } from 'umi/locale';

export default {
  namespace: 'globalModel',
  state: [],
  reducers: {
    click(state) {
      console.log(
        formatMessage({
          id: 'ssss-3434',
        }),
      );
      console.log(
        formatMessage({
          id: 'test-sdd',
        }),
      );
      return state;
    },
  },
};
