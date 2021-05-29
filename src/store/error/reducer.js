import { LOGIN_ERROR, REGISTER_ERROR } from './actionTypes';

const initialState = {
  errorMessage: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
    case REGISTER_ERROR:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
