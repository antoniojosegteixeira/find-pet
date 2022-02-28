import React from "react";
import styles from "./styles";

import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../Svg/Logo";

export default function Layout({ children }) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={styles.appbar}>
          <Toolbar>
            <Link to="/">
              <Button sx={styles.logo}>
                <Logo />
              </Button>
            </Link>

            <Box sx={{ flexGrow: 1 }}></Box>
            <Button color="primary" variant="contained" sx={styles.button}>
              <Typography variant="p" sx={styles.buttonText}>
                Entrar
              </Typography>
            </Button>
            <Button color="secondary" variant="contained" sx={styles.button}>
              <Typography variant="p" sx={styles.buttonText}>
                Registrar
              </Typography>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </>
  );
}
