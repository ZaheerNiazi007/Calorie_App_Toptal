import React, { useState } from "react";
//MATERIAL UI
import { Box, SwipeableDrawer, Button } from "@mui/material";
//MATERIAL UI ICONS
import CloseIcon from "@mui/icons-material/Close";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
//COMPONENTS
import { FoodForm } from "../FoodForm";

// MAIN ARROW FUNCTION OF DRAWER
export default function EditList(id) {
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

      <FoodForm id={id} />
    </Box>
  );

  return (
    <div>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            variant="outlined"
            onClick={toggleDrawer(anchor, true)}
            sx={{
              border: "none",
              "&:hover": {
                border: "none",
              },
            }}
          >
            <DriveFileRenameOutlineIcon />
          </Button>

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
