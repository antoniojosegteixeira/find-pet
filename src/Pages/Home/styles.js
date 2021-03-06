import cat from "../../Assets/Images/cat1.jpg";
import dog from "../../Assets/Images/dog1.jpg";
import bird from "../../Assets/Images/bird1.jpg";
import iguana from "../../Assets/Images/iguana1.jpg";

const styles = {
  container: {},
  heroInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    order: { xs: 2, sm: 1, md: 1, lg: 1 },
  },
  heroInfoAlt: {
    order: { xs: 2, sm: 2, md: 2, lg: 2 },
  },
  heroInfoBox: {
    padding: "0 5px 0 5px",
    textAlign: { xs: "center", sm: "start" },
    paddingLeft: { md: 5 },
  },
  title: {
    fontFamily: "Pangolin",
    fontSize: {
      sm: "1.8rem",
      md: "2.3rem",
      lg: "2.5rem",
    },
  },
  paragraph: {
    marginTop: 1,
  },
  heroBackground: {
    width: { lg: "60%", md: "100%" },
    margin: "0 auto",
    order: { xs: 1, sm: 2, md: 2, lg: 2 },
  },
  heroBackgroundAlt: {
    order: { xs: 1, sm: 1, md: 1, lg: 1 },
  },
  button: {
    marginTop: 4,
    padding: "12px 22px 12px 22px",
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
  secondBackgroundWrapper: {
    position: "relative",
    transform: "translateX(-5%)",
    "& img": {
      position: "absolute",
      width: "80%",
      bottom: "24%",
      left: "13%",
    },
  },
  animalBubble: {
    position: "absolute",
    width: { xs: "10vw", sm: "40px", lg: "50px" },
    height: { xs: "10vw", sm: "40px", lg: "50px" },
    overflow: "hidden",
    borderRadius: "50%",
    border: "2px solid purple",
    backgroundSize: "cover",

    "& img": {
      width: "100%",
    },
  },
  cat: {
    backgroundImage: `url(${cat})`,
    left: "10%",
    top: "14%",
  },
  dog: {
    backgroundImage: `url(${dog})`,
    right: "10%",
    top: "5%",
  },
  iguana: {
    backgroundImage: `url(${iguana})`,
    left: "0%",
    top: "50%",
  },
  bird: {
    backgroundImage: `url(${bird})`,
    right: "5%",
    top: "65%",
  },
};

export default styles;
