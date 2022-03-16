import React from "react";
import styles from "./styles";

import { Box, CircularProgress } from "@mui/material";

export default function index() {
  return (
    <Box sx={styles.loadingScreen}>
      <CircularProgress />
    </Box>
  );
}
