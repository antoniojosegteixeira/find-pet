const reducers = {
  registerUser(state, action) {
    state.user = action.payload;
  },
};

export default reducers;
