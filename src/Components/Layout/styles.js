const styles = {
  screen: {
    minHeight: "100vh",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  appbar: {
    backgroundColor: "white",
  },
  logo: {
    width: "150px",
  },
  logoLink: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    margin: "0 5px",
    padding: "8px 32px",
  },
  buttonText: {
    fontSize: ".8rem",
  },
  buttonWrapper: { display: { xs: "none", md: "block" } },
  menuWrapper: {
    display: { xs: "block", md: "none" },
  },
  footer: {
    flexGrow: 1,
    display: "flex",
    alignItems: "end",
  },
};

export default styles;
