import { REDUX_HOME_DUMP_ACTION } from '@redux/home/constants';
import _ from 'lodash';

export const initialState = {
  count: 0,
};

export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case REDUX_HOME_DUMP_ACTION:
      const currentCount = state.count;
      return _.set(state, 'count', currentCount + 1);

    default:
      return state;
  }
}