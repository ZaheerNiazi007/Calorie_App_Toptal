import React, { useState } from "react";
//material UI
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
  Tooltip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
//MATERIAL UI ICON
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
//Components
import DrawerComp from "./Drawer";
import "../../App.css";
//React-Router-Dom
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Logout } from "../../redux/actions/LoginActions";
//Material UI Custom Styles
const StyledTab = styled(Tab)({
  color: "white",
});
//Dummy Data
const tabs = [
  {
    label: "List",
    path: "/list",
  },
  {
    label: "Calories",
    path: "/calories",
  },

  //   {
  //     label: "About Us",
  //     path: "/aboutus",
  //   },
];
//Header function
const Header = () => {
  //State
  const [value, setValue] = useState();
  //Theme Constants
  const theme = useTheme();
  //Material UI Responsive Views
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  //REDUX
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(Logout());
  };
  return (
    <React.Fragment>
      <AppBar sx={{ position: "sticky" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <RestaurantMenuOutlinedIcon />
          </IconButton>
          <Typography
            component="div"
            style={{ fontWeight: 700 }}
            sx={{ flexGrow: 1, typography: { md: "h6", xs: "caption" } }}
          >
            Simple Calorie App
          </Typography>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                TabIndicatorProps={{ style: { background: "white" } }}
                sx={{ marginLeft: "auto", mr: 3 }}
                textColor="white"
                indicatorColor="secondary"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                {tabs.map(({ label, path }) => (
                  <StyledTab
                    key={label}
                    label={label}
                    component={Link}
                    to={path}
                  />
                ))}
              </Tabs>
              <Tooltip title="Click here for logout">
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={logoutHandler}
                >
                  Logout
                </Button>
              </Tooltip>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
export default Header;
