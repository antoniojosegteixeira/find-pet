const styles = {
  container: { maxWidth: "900px" },
  heroInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid red",
  },
  title: { fontFamily: "Pangolin" },
  heroBackground: {
    width: "60%",
  },
  button: {
    marginTop: 4,
  },
  backgroundWrapper: {
    position: "relative",
    "& img": {
      position: "absolute",
      width: "70%",
      bottom: "5%",
      left: "15%",
    },
  },
};

export default styles;
