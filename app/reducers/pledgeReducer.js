import { createAction, handleActions } from 'redux-actions';

export const fetchPledges = createAction('FETCH_PLEDGES');
export const saveTimeoutID = createAction('SAVE_TIMEOUT_ID');

export const getPledges = state => state.pledges;

export const initialState = null;

const fetchPledgesReducer = handleActions(
  {
    [fetchPledges]: (state, action) => {
      return { ...state, ...action.payload };
    },
    [saveTimeoutID]: (state, action) => {
      return { ...state, timeoutID: action.payload };
    }
  },
  initialState
);

export default fetchPledgesReducer;