import React, { useState } from "react";
//Material UI
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch } from "react-redux";
import { Logout } from "../../redux/actions/LoginActions";
//Material UI Style
const StyledListItemText = styled(ListItemText)({
  color: "black",
});
const DrawerComp = () => {
  //State
  const [openDrawer, setOpenDrawer] = useState(false);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(Logout());
  };
  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List
          sx={{ color: "black", width: { xs: "170px", sm: "300px" }, p: 4 }}
        >
          {/* {pages.map((page, index) => ( */}
          <ListItemButton>
            <ListItemIcon>
              <StyledListItemText></StyledListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <StyledListItemText>List</StyledListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <StyledListItemText>Calories</StyledListItemText>
            </ListItemIcon>
          </ListItemButton>
          {/* ))} */}
          <Tooltip title="Click here for logout">
            <Button variant="outlined" color="inherit" onClick={logoutHandler}>
              Logout
            </Button>
          </Tooltip>
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon style={{ color: "#E89121" }} />
      </IconButton>
    </React.Fragment>
  );
};
export default DrawerComp;
