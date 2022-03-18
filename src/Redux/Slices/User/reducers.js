const reducers = {
  resetRequest(state) {
    return { ...state, loginStatus: "", error: "" };
  },
};

export default reducers;
