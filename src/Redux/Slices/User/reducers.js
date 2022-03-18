const reducers = {
  resetRequest(state) {
    return { ...state, loginStatus: "", error: "" };
  },
  logout(state) {
    return { ...state, user: {} };
  },
};

export default reducers;
