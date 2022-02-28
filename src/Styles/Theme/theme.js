import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: "Open Sans, Raleway, Arial",
  },
});
theme = responsiveFontSizes(theme);

export default theme;
