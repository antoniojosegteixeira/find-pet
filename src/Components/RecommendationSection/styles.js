const styles = {
  container: {
    marginTop: { xs: 6, md: 1 },
    maxWidth: "1100px",
  },
  gridItem: {
    margin: "0 auto",
  },
  card: {
    width: "100%",
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
  cardInfo: {
    backgroundColor: "#124C5F",
  },
};

export default styles;
