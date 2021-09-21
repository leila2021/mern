import {
  REGISTER_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  AUTH_FAIL,
  SET_LOADING,
LOGOUT
} from "../const";
const initialState = {
  token: null,
  user: null,
  isLoding: false,
  isAuth: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, isLoding: true };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: payload.token,
        user: payload.user,
        isLoding: false,
        isAuth: true,
      };
case AUTH_FAIL: 
case LOGOUT: 
return{ ...state,isLoding:false, token:null, user:null, isAuth:false};


    default:
      return state;
  }
};
