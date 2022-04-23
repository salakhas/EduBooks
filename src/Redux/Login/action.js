export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const loginLoading = () => {
  return { type: LOGIN_LOADING };
};

export const loginSuccess = (payload) => {
  return { type: LOGIN_SUCCESS, payload: payload };
};

export const loginFailure = () => {
  return { type: LOGIN_ERROR };
};
