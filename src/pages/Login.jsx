import React, { useEffect, useState } from "react";
//MATERIAL UI
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/LoginActions";
//COMPONENTS
import "../App.css";
//REACT-ROUTER-DOM
import { useNavigate } from "react-router-dom";

//MAIN FORM ARROW FUNCTION
const Login = () => {
  //STATES
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  // NAVIGATOR
  let navigate = useNavigate();
  //REDUX
  const dispatch = useDispatch();
  //CHECKING WHETHER USER IS AUTHENTICATED
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  //USE-EFFECT
  useEffect(() => {
    if (userInfo) {
      navigate("/list");
      window.location.reload();
    } else {
      navigate("/");
    }
  }, [navigate, userInfo]);
  //FUNCTION TO SEND USER_NAME AND PASSWORD TP BACKEND
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://hospitalnews.com/wp-content/uploads/2016/07/ThinkstockPhotos-488214714-1.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Grid item xs={12} sm={8} md={5} elevation={6} square>
        <Box
          sx={{
            marginTop: { md: 20, xs: 10 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="div"
            color="error"
            style={{ fontWeight: 700 }}
            sx={{ typography: { md: "h3", xs: "h4" } }}
          >
            Simple Calorie App
          </Typography>
          <Typography
            component="h1"
            variant="h4"
            color="primary"
            sx={{ mt: 4, fontWeight: 700 }}
          >
            Sign In
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 2 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  name="username"
                  autoComplete="username"
                  type="text"
                  value={username}
                  sx={{ backgroundColor: "#E8F0FE" }}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={{ backgroundColor: "#E8F0FE" }}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
