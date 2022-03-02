const styles = {
  baseStyle: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "100px",
    borderWidth: 4,
    borderRadius: 2,
    borderColor: "#2196f3",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#124c5f",
    fontFamily: "roboto",
    outline: "none",
    transition: "all .24s ease-in-out",
  },
  acceptStyle: {
    borderColor: "#01b13b",
    color: "#01b13b",
  },
  rejectStyle: {
    borderColor: "#ff1744",
    color: "#ff1744",
  },
  thumbsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    mt: 2,
  },
  imageList: {
    width: "100px",
    position: "relative",
    listStyle: "none",
    margin: "3px 4px",
  },
  image: {
    width: "100%",
  },
};

export default styles;
