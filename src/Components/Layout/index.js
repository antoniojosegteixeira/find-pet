import React from "react";
import styles from "./styles";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Layout({ children }) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={styles.appbar}>
          <Toolbar>
            <Button color="primary" variant="contained">
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </>
  );
}
