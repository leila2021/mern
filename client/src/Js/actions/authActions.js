import {
  LOGIN_USER_SUCCESS,
  REGISTER_USER_SUCCESS,
  AUTH_FAIL,
  SET_LOADING,
  LOGOUT,GET_AUTH_USER
} from "../const";
import axios from "axios";
//Auth User
export const getAuthUser= ()=> async (dispatch)=>{
const config={
headers:{
"Authorization":localStorage.getItem("token")

}

}

}

//LOGIN USER
export const login = (formData) => async (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });

  try {
    const res = await axios.post("/user/login", formData);
     localStorage.setItem("token",res.data.token)
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const response = error.response.data;
    if (Array.isArray(response)) {
      response.forEach((err) => alert(err.msg));
    }
    console.dir(error);
    dispatch({
      type: AUTH_FAIL,
    });
  }
};
// Logout user
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
