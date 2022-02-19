import React from "react";
import { connect } from "react-redux";
import { logout } from "../services/auth";

function Home({ user }) {
  console.log(user);
  return (
    <div>
      Home
      <hr />
      <span></span>
      <hr />
      <button onClick={() => logout()}>LOGOUT</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Home);
