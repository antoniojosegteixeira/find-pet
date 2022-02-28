import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: "Open Sans, Raleway, Arial",
  },
  palette: {
    primary: {
      main: "#124C5F",
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
