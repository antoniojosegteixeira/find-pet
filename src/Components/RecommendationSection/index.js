import React from "react";
import styles from "./styles";

import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Card,
  CardMedia,
  CardActions,
  CardContent,
} from "@mui/material";
import client1 from "../../Assets/Images/hugging-cat.png";

export default function RecommendationSection() {
  return (
    <Container>
      <Card sx={{ maxWidth: 345 }}>
        <Box sx={styles.imgWrapper}>
          <Box sx={styles.imgBackground}></Box>
          <img src={client1} alt="Mulher abraçada com cachorro" />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  );
}
