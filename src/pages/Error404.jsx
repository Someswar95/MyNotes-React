import * as React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { errorPageStyles } from "../hooks/Styling/useStyle";
import { Link } from "react-router-dom";

const Error404 = () => {
  const classes = errorPageStyles();
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box className={classes.grid_left}>
            <Typography variant="h1" color="secondary.dark">
              404
            </Typography>
            <Typography variant="body1" color="secondary">
              Oops! Looks like you followed a bad link. If you think this is a
              problem with us, please tell us
            </Typography>
            <Button
              variant="contained"
              color="primary"
              LinkComponent={Link}
              to="/"
              className={classes.md_1}
              sx={{ marginTop: "25px" }}
            >
              back home
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className={classes.grid_right}>
            <Avatar
              alt="error_404"
              src="./error_404.png"
              variant="square"
              className={classes.avatar}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Error404;
