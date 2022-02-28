const styles = {
  container: {
    marginTop: { xs: 6, md: 1 },
    maxWidth: "1100px",
  },
  gridContainer: {},
  gridItem: {
    margin: "0 auto",
    position: "relative",
    display: "flex",
  },
  card: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardInfo: {
    textAlign: "center",
    backgroundColor: "#124C5F",
    height: "100%",
  },
  imgWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
    backgroundColor: "transparent",

    "& img": {
      zIndex: 2,
      width: "80%",
    },
  },
  imgBackground: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "80%",
    backgroundColor: "#FFF1A6",
    borderRadius: " 30px 30px 0 0 ",
  },
};

export default styles;
