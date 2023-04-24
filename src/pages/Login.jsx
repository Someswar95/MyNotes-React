import * as React from "react";
import { loginUser } from "../services/UserService";
import { doLogin } from "../authorization/auth";
import { Link, useNavigate } from "react-router-dom";
import { loginStyles } from "../hooks/Styling/useStyle";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Base from "../components/Base";

const Login = () => {
  const classes = loginStyles();

  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setCredentials({
      ...credentials,
      [field]: actualValue,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (credentials.email.trim() === "" || credentials.password.trim() === "") {
      console.log("Email or Password is required !!");
      return;
    }

    loginUser(credentials)
      .then((data) => {
        doLogin(data, () => {
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Base />
      {isMobile ? (
        <Container className={classes.root}>
          <Typography variant="body1" color="secondary">
            LOGIN
          </Typography>
          <Typography variant="h4" color="secondary.dark" fontWeight="800">
            Welcome back
          </Typography>
          <Typography variant="body1" color="secondary">
            Login to manage your account
          </Typography>
          <Box
            component="form"
            onSubmit={handleLogin}
            sx={{ marginTop: "30px" }}
          >
            <Typography variant="body2" color="secondary.main">
              Enter your email
            </Typography>
            <TextField
              fullWidth
              type="text"
              label="Email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={(e) => handleChange(e, "email")}
              sx={{ marginTop: "10px" }}
            />

            <Box sx={{ marginTop: "30px" }}>
              <Grid container spacing={10}>
                <Grid item xs={6}>
                  <Typography variant="body2" color="secondary.main">
                    Enter your password
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption" color="info.main">
                    Forgot your password?
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <TextField
              fullWidth
              type="password"
              label="Password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={(e) => handleChange(e, "password")}
              sx={{ marginTop: "10px" }}
            />
            <Box sx={{ marginTop: "30px" }}>
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  <Typography variant="body2" color="secondary.main">
                    Don't have an account yet?{" "}
                    <Typography
                      display="inline"
                      variant="body2"
                      color="info.light"
                      component={Link}
                      to="/register"
                    >
                      Sign up here.
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Box display="flex" justifyContent="flex-end">
                    <Button variant="contained" type="submit">
                      Login
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      ) : (
        <Container className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box>
                <Avatar
                  alt="cover_login"
                  src="./cover_1.png"
                  variant="square"
                  sx={{ width: "85%", height: "85%" }}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ marginTop: "100px" }}>
                <Typography variant="body1" color="secondary">
                  LOGIN
                </Typography>
                <Typography
                  variant="h4"
                  color="secondary.dark"
                  fontWeight="800"
                >
                  Welcome back
                </Typography>
                <Typography variant="body1" color="secondary">
                  Login to manage your account
                </Typography>
                <Box
                  component="form"
                  onSubmit={handleLogin}
                  sx={{ marginTop: "30px" }}
                >
                  <Box>
                    <Typography variant="body2" color="secondary.main">
                      Enter your email
                    </Typography>
                    <TextField
                      fullWidth
                      type="text"
                      label="Email"
                      id="email"
                      name="email"
                      value={credentials.email}
                      onChange={(e) => handleChange(e, "email")}
                      sx={{ marginTop: "10px" }}
                    />
                  </Box>
                  <Box sx={{ marginTop: "30px" }}>
                    <Grid container spacing={38}>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="secondary.main">
                          Enter your password
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="caption" color="info.main">
                          Forgot your password?
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  <TextField
                    fullWidth
                    type="password"
                    label="Password"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={(e) => handleChange(e, "password")}
                    sx={{ marginTop: "10px" }}
                  />
                  <Box sx={{ marginTop: "30px" }}>
                    <Grid container spacing={2}>
                      <Grid item xs={8}>
                        <Typography variant="body2" color="secondary.main">
                          Don't have an account yet?{" "}
                          <Typography
                            display="inline"
                            variant="body2"
                            color="info.light"
                            component={Link}
                            to="/register"
                          >
                            Sign up here.
                          </Typography>
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Box display="flex" justifyContent="flex-end">
                          <Button variant="contained" type="submit">
                            Login
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Login;
