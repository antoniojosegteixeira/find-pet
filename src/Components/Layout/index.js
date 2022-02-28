import React from "react";
import styles from "./styles";

import { AppBar, Box, Toolbar, Typography, Button, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../Svg/Logo";

export default function Layout({ children }) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={styles.appbar}>
          <Toolbar>
            <Button sx={styles.logo}>
              <Link href="/" sx={styles.logoLink}>
                <Logo />
              </Link>
            </Button>

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
