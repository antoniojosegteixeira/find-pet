import React from "react";
import styles from "./styles";

import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import Logo from "../Svg/Logo";
import HeaderMenu from "../HeaderMenu";

export default function Layout({ children }) {
  return (
    <Box sx={styles.screen}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={styles.appbar}>
          <Toolbar>
            <Link to="/">
              <Button sx={styles.logo}>
                <Logo />
              </Button>
            </Link>

            <Box sx={{ flexGrow: 1 }}></Box>
            <Box sx={styles.buttonWrapper}>
              <Link to="/login">
                <Button color="primary" variant="contained" sx={styles.button}>
                  <Typography variant="p" sx={styles.buttonText} color="white">
                    Entrar
                  </Typography>
                </Button>
              </Link>
              <Link to="/registrar">
                <Button
                  color="secondary"
                  variant="contained"
                  sx={styles.button}
                >
                  <Typography
                    variant="p"
                    sx={styles.buttonText}
                    color="primary"
                  >
                    Registrar
                  </Typography>
                </Button>
              </Link>
            </Box>
            <Box sx={styles.menuWrapper}>
              <HeaderMenu />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
      <Box sx={styles.footer}>
        <AppBar position="static" sx={styles.appbar}>
          <Toolbar>
            <Typography color="primary" variant="subtitle2">
              © Construído por Antônio Teixeira
            </Typography>

            <Box sx={{ flexGrow: 1 }}></Box>

            <IconButton>
              <i className="fab fa-facebook"></i>
            </IconButton>

            <IconButton>
              <i className="fab fa-instagram"></i>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
}
