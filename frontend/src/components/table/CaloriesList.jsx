import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
// MUI Styled
import { styled } from "@mui/material/styles";
//Material Ui
import {
  Box,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
//Components
import Loader from "../Loader";
import {
  caloriesAvgAction,
  listCaloriesAction,
} from "../../redux/actions/CaloriesActions";

//MUI TAG STYLING
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.black,
    backgroundColor: theme.palette.action.hover,
    border: "none",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {},
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

//MAIN FORM ARROW FUNCTION OF LIST-TABLE
export default function CaloriesListTable() {
  //REDUX
  const dispatch = useDispatch();
  //FETCHING DATA OF USERS FOR ADMIN
  const caloriesList = useSelector((state) => state.caloriesList);
  const { error, loading, cal } = caloriesList;
  const caloriesAvg = useSelector((state) => state.caloriesAvg);
  const { cal_avg } = caloriesAvg;
  //USE-EFFECT
  useEffect(() => {
    dispatch(listCaloriesAction());
    dispatch(caloriesAvgAction());
  }, [dispatch]);
  return (
    <Box>
      <TableContainer
        component={Paper}
        sx={{
          border: "1px solid #F0F0F0",
          borderRadius: "0px",
        }}
      >
        <Table aria-label="customized table">
          {cal_avg ? (
            <TableHead>
              <TableRow>
                <StyledTableCell>User ID</StyledTableCell>
                <StyledTableCell>
                  Average Calories - Last 7 Days
                </StyledTableCell>
              </TableRow>
            </TableHead>
          ) : (
            <TableHead>
              <TableRow>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell>Total Calories</StyledTableCell>
              </TableRow>
            </TableHead>
          )}

          {loading ? (
            <Loader />
          ) : error ? (
            <h3>{error}</h3>
          ) : (
            <TableBody>
              {cal_avg
                ? cal_avg.map((cal_avg) => (
                    <StyledTableRow>
                      <StyledTableCell>{cal_avg.user_id}</StyledTableCell>
                      <StyledTableCell>{cal_avg.avg_score}</StyledTableCell>
                    </StyledTableRow>
                  ))
                : cal?.map((cal) => (
                    <StyledTableRow>
                      <StyledTableCell>{cal.date_taken_on}</StyledTableCell>
                      <StyledTableCell>{cal.calorie}</StyledTableCell>
                    </StyledTableRow>
                  ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </Box>
  );
}
