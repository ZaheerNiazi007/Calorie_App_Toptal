import React, { useState } from "react";
//MATERIAL UI
import { Box, SwipeableDrawer, Button, Typography } from "@mui/material";
//MATERIAL UI STYLE
import { styled } from "@mui/material/styles";
//MATERIAL UI ICONS
import CloseIcon from "@mui/icons-material/Close";
//COMPONENTS
import { FoodForm } from "../FoodForm";
//MATERIAL UI TAG STYLING
const BootstrapButton = styled(Button)(({ theme }) => ({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 12,
  padding: "6px 12px",
  lineHeight: 1.5,
  backgroundColor: "#1A74BB",
  borderRadius: "0px",
  "&:hover": {
    backgroundColor: "#0069D9",
    borderColor: "#0062CC",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062CC",
    borderColor: "#005CBF",
  },
  "&:focus": { boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)" },
  [theme.breakpoints.up("md")]: { fontSize: 16 },
}));

// MAIN ARROW FUNCTION OF DRAWER
export default function SwipeableTemporaryDrawer() {
  //STATES
  const [state, setState] = useState({
    bottom: false,
  });
  //FUNCTION TO RELOAD THE PAGE
  const reload = () => {
    window.location.reload();
  };
  //FUNCTION OPEN AND CLOSE DRAWER
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  //FUNCTION COMPONENT OF BOTTOM-DRAWER
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "bottom" ? "auto" : 250, height: 300 }}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Button
          onClick={(toggleDrawer(anchor, false), reload)}
          sx={{ backgroundColor: "whitesmoke", borderRadius: "50%" }}
        >
          <CloseIcon />
        </Button>
      </Box>

      <FoodForm />
    </Box>
  );

  return (
    <div>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <BootstrapButton
            variant="contained"
            onClick={toggleDrawer(anchor, true)}
          >
            <Typography sx={{ typography: { md: "subtitle1", xs: "caption" } }}>
              + ADD FOOD
            </Typography>
          </BootstrapButton>

          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
