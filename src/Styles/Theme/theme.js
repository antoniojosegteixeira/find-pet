import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    p: {
      fontFamily: "Roboto, Raleway, Arial",
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
