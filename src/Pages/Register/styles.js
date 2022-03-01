const styles = {
  container: {
    mt: { xs: 1, sm: 3 },
    maxWidth: "1100px",
  },
  svgWrapper: {
    position: "relative",
    "& img": {
      position: "absolute",
      width: "85%",
      top: "4%",
      left: "10%",
    },
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
};

export default styles;
