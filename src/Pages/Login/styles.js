const styles = {
  container: {
    mt: { xs: 1, sm: 3 },
  },
  svgWrapper: {
    pt: 2,
    position: "relative",
    display: "flex",
    alignContent: "middle",
    alignItems: "center",
    justifyContent: "center",

    "& img": {
      position: "absolute",
      zIndex: 10,
      maxWidth: "450px",
      width: "100%",
    },

    "& svg": {
      position: "absolute",
      maxWidth: "490px",
      width: "100%",
    },
  },
  formWrapper: {
    maxWidth: "550px",
    margin: "0 auto",
  },
  title: {
    mt: 3,
    textAlign: { xs: "center", md: "start" },
  },
  form: {
    mt: 2,
    "& .MuiTextField-root": { width: "100%", mt: 2 },
  },
  addressBox: { display: "flex", flexDirection: "row" },
  stateInput: { mt: 2, ml: 1, maxWidth: "90px" },
  submitButton: {
    mt: 2,
    py: 1.2,
  },
};

export default styles;
