import React from "react";
import { connect } from "react-redux";
import { signIn } from "../redux/actions";

const Login = ({ user, signIn }) => {
  return (
    <div>
      Login
      <button onClick={() => signIn("email2@email.com", "1234567890")}>
        LOGIN
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: (email, password) => dispatch(signIn(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
