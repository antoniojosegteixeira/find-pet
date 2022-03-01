import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    p: {
      fontFamily: "Roboto, Raleway, Arial",
    },
    h3: {
      fontFamily: "Pangolin",
      fontSize: {
        sm: "1.8rem",
        md: "2.3rem",
        lg: "2.5rem",
      },
    },
  },
  palette: {
    primary: {
      main: "#124C5F",
    },
    secondary: {
      main: "#C7E7E1",
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
