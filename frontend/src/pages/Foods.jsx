import React, { useEffect } from "react";
//MATERIAL UI
import { Box, Card, Grid, Typography, Container } from "@mui/material";
// COMPONENTS
import ListTable from "../components/table/ListTable";
import SwipeableTemporaryDrawer from "../components/Drawer/CreateListDrawer";
import { useDispatch, useSelector } from "react-redux";
import {
  listUserAction,
  UserCaloriesRequestAction,
} from "../redux/actions/ListUserAction";
import { listAdminAction } from "../redux/actions/ListActions";

// MAIN ARROW FUNCTION OF MAIN PAGE
const Foods = () => {
  const dispatch = useDispatch();
  const userListRequest = useSelector((state) => state.userListRequest);
  const { req } = userListRequest;
  const userList = useSelector((state) => state.userList);
  const { user } = userList;
  const adminList = useSelector((state) => state.adminList);
  const { admin } = adminList;

  //USE-EFFECT
  useEffect(() => {
    dispatch(UserCaloriesRequestAction());
    dispatch(listUserAction());
    dispatch(listAdminAction());
  }, [dispatch]);
  return (
    <Container component="main" sx={{ mt: 3 }} maxWidth="md">
      {admin ? (
        <Box
          sx={{
            backgroundColor: "whitesmoke",
            display: "none",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6">{req?.message}</Typography>
        </Box>
      ) : user ? (
        <Box
          sx={{
            backgroundColor: "whitesmoke",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6">{req?.message}</Typography>
        </Box>
      ) : null}

      <Box
        sx={{
          minHeight: "400px",
          maxWidth: "100%",
          display: { md: "flex" },
          flexDirection: { md: "column" },
          alignItems: { md: "center" },
        }}
      >
        <Grid
          pt={2}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              padding: "30px",
              border: "1px solid #C0BEBE",
              borderRadius: "0px",
              mb: 6,
              minHeight: 300,
              width: { md: "90%", xs: "none" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", md: "row" },
                justifyContent: "space-between",
              }}
              mb={4}
            >
              <Typography
                style={{ fontWeight: 600 }}
                sx={{
                  ml: 2,
                  color: "#0169D9",
                  typography: { md: "h5", xs: "subtitle1" },
                }}
              >
                Food List
              </Typography>
              <SwipeableTemporaryDrawer />
            </Box>
            <ListTable />
          </Card>
        </Grid>
      </Box>
    </Container>
  );
};

export default Foods;
