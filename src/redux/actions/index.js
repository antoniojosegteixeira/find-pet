import { login } from "../../services/auth";

export const signIn = (email, password) => async (dispatch) => {
  const res = await login(email, password);

  if (res.user) {
    dispatch({ type: "USER_LOGIN", payload: res.user });
  }
};
