import React, { useEffect } from "react";
import CaloriesListTable from "../components/table/CaloriesList";
import { Box, Card, Grid, Typography, Container, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  caloriesAvgAction,
  totalEntriesAction,
} from "../redux/actions/CaloriesActions";

function Calories() {
  //REDUX
  const dispatch = useDispatch();
  //FETCHING DATA OF USERS FOR ADMIN
  const totalEntries = useSelector((state) => state.totalEntries);
  const { total_entries } = totalEntries;
  //FETCHING DATA OF USERS FOR ADMIN
  const caloriesAvg = useSelector((state) => state.caloriesAvg);
  const { cal_avg } = caloriesAvg;
  useEffect(() => {
    dispatch(caloriesAvgAction());
    dispatch(totalEntriesAction());
  }, [dispatch]);
  return (
    <Container component="main" sx={{ mt: 3 }} maxWidth="xl">
      <Box
        sx={{
          minHeight: "400px",
          width: "100%",
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
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              padding: "30px",
              border: "1px solid #C0BEBE",
              borderRadius: "0px",
              mb: 3,
              minHeight: 300,
              width: { md: "40%", xs: "none" },
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
                Calories List
              </Typography>
            </Box>
            <CaloriesListTable />
          </Card>
          {cal_avg ? (
            <Card
              sx={{
                padding: "30px",
                border: "1px solid #C0BEBE",
                borderRadius: "0px",
                mb: 3,
                minHeight: 300,
                width: { md: "40%", xs: "none" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Stack direction="column" spacing={3}>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>
                    Last Week
                  </Typography>
                  <Box
                    sx={{
                      width: 200,
                      height: 100,
                      backgroundColor: "primary.light",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      "&:hover": {
                        backgroundColor: "primary.dark",
                        opacity: [0.9, 0.8, 0.7],
                      },
                    }}
                  >
                    <Typography variant="h3" sx={{ color: "white" }}>
                      {total_entries
                        ? total_entries.Number_of_enteries_in_last_7_days
                        : "no data"}
                    </Typography>
                  </Box>
                </Stack>
                <Stack direction="column" spacing={3}>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>
                    Week before that
                  </Typography>
                  <Box
                    sx={{
                      width: 200,
                      height: 100,
                      backgroundColor: "primary.dark",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      "&:hover": {
                        backgroundColor: "primary.main",
                        opacity: [0.9, 0.8, 0.7],
                      },
                    }}
                  >
                    <Typography variant="h3" sx={{ color: "white" }}>
                      {total_entries
                        ? total_entries.Number_of_enteries_week_before_last_one
                        : "no dta"}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Card>
          ) : null}
        </Grid>
      </Box>
    </Container>
  );
}

export default Calories;
