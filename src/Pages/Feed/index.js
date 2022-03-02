import React from "react";
import styles from "./styles";

import {
  Container,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  IconButton,
  CardMedia,
  Grid,
} from "@mui/material";
import Layout from "../../Components/Layout";

export default function Feed() {
  return (
    <Layout>
      <Container sx={styles.container}>
        <Grid sx={styles.postContainer} container spacing={3}>
          <Grid item>
            <Card sx={styles.card}>
              <CardMedia
                component="img"
                sx={styles.cardImage}
                image="https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-732x549-thumbnail-732x549.jpg"
                alt="Live from space album cover"
              />
              <Box sx={styles.cardInfo}>
                <CardContent sx={styles.cardContent}>
                  <Typography component="div" variant="h5">
                    Belinha
                  </Typography>
                  <Typography
                    variant="p"
                    color="text.secondary"
                    component="div"
                  >
                    Espécie: Cão
                  </Typography>
                  <Typography
                    variant="p"
                    color="text.secondary"
                    component="div"
                  >
                    Tutor(a): João Silva
                  </Typography>
                  <Typography
                    variant="p"
                    color="text.secondary"
                    component="div"
                  >
                    Raça: SRD
                  </Typography>
                  <Typography
                    variant="p"
                    color="text.secondary"
                    component="div"
                  >
                    Cidade: Cuiabá - MT
                  </Typography>
                  <Typography
                    variant="p"
                    color="text.secondary"
                    component="div"
                  >
                    Data: 01/03/2022
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
