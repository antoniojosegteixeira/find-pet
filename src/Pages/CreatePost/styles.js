const styles = {
  container: {
    mt: { xs: 1, sm: 3 },
    maxWidth: 700,
  },
  imageGrid: {
    display: "flex",
    justifyContent: "center",
  },
  svgWrapperBox: {
    mt: 2,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C0D2ED",
    overflow: "hidden",
    maxWidth: "450px",
    width: "100%",

    "& img": {
      position: "absolute",
      width: "100%",
      left: "15%",
    },

    "& svg": {
      zIndex: 10,
      width: "100%",
    },
  },
  formWrapper: {
    maxWidth: "600px",
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
