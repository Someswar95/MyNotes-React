import * as React from "react";
import Base from "../components/Base";
import { isLoggedIn } from "../authorization/auth";
import { Button, Container } from "@mui/material";
import { homeStyles } from "../hooks/Styling/useStyle";

const LazyNotes = React.lazy(() => import("../components/Notes"));

const Home = () => {
  React.useEffect(() => {
    isLoggedIn();
  });

  const classes = homeStyles();

  return (
    <>
      <Base />
      {isLoggedIn() ? (
        <React.Suspense fallback="Loading...">
          <LazyNotes />
        </React.Suspense>
      ) : (
        <>
          <Container className={classes.root}>
            <Button>Hii</Button>
          </Container>
        </>
      )}
    </>
  );
};

export default Home;
