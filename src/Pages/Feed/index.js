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

const PostCard = () => {
  return (
    <Grid item xs={6} sm={4}>
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
            <Typography variant="p" color="text.secondary" component="div">
              Espécie: Cão
            </Typography>
            <Typography variant="p" color="text.secondary" component="div">
              Tutor(a): João Silva
            </Typography>
            <Typography variant="p" color="text.secondary" component="div">
              Raça: SRD
            </Typography>
            <Typography variant="p" color="text.secondary" component="div">
              Cidade: Cuiabá - MT
            </Typography>
            <Typography variant="p" color="text.secondary" component="div">
              Data: 01/03/2022
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
};

export default function Feed() {
  return (
    <Layout>
      <Container sx={styles.container}>
        <Box sx={styles.postWrapper}>
          <Grid container sx={styles.postContainer} spacing={3}>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}
