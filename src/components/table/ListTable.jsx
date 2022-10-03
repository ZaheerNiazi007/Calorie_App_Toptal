import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { listUserAction } from "../../redux/actions/ListUserAction";
import {
  listAdminAction,
  DeletelistAdminAction,
} from "../../redux/actions/ListActions";
// MUI Styled
import { styled } from "@mui/material/styles";
//Material Ui
import {
  Button,
  Tooltip,
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
// Material Ui Icon
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
//Components
import Loader from "../Loader";
import EditList from "../Drawer/EditListDrawer";

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
export default function ListTable() {
  //REDUX
  const dispatch = useDispatch();
  //FETCHING DATA OF USERS FOR ADMIN
  const adminList = useSelector((state) => state.adminList);
  const { error, loading, admin } = adminList;
  //FETCHING DATA FOR USER ITSELF
  const userList = useSelector((state) => state.userList);
  const { user } = userList;

  //FUNCTION TO DELETE USER DATA
  const handleDelete = (id) => {
    dispatch(DeletelistAdminAction(id)).then(() => {
      window.location.reload();
    });
  };
  //USE-EFFECT
  useEffect(() => {
    dispatch(listAdminAction());
    dispatch(listUserAction());
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
          {admin ? (
            <TableHead>
              <TableRow>
                <StyledTableCell>Food Name</StyledTableCell>
                <StyledTableCell>User</StyledTableCell>
                <StyledTableCell>Calories</StyledTableCell>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell>Time</StyledTableCell>
                <StyledTableCell>Edit</StyledTableCell>
                <StyledTableCell>Delete</StyledTableCell>
              </TableRow>
            </TableHead>
          ) : (
            <TableHead>
              <TableRow>
                <StyledTableCell>Food Name</StyledTableCell>
                <StyledTableCell>Calories</StyledTableCell>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell>Time</StyledTableCell>
              </TableRow>
            </TableHead>
          )}
          {loading ? (
            <Loader />
          ) : error ? (
            <h3>{error}</h3>
          ) : (
            <TableBody>
              {admin
                ? admin.map((admin) => (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        {admin.name}
                      </StyledTableCell>
                      <StyledTableCell> {admin.user}</StyledTableCell>
                      <StyledTableCell> {admin.calories}</StyledTableCell>
                      <StyledTableCell> {admin.date_taken_on}</StyledTableCell>
                      <StyledTableCell> {admin.time_taken_at}</StyledTableCell>

                      <StyledTableCell>
                        <Button style={{ textDecoration: "none" }}>
                          <EditList id={admin.id} />
                        </Button>
                      </StyledTableCell>

                      <StyledTableCell>
                        <Tooltip title="Are you sure you want to delete this?">
                          <Button
                            style={{ textDecoration: "none", color: "red" }}
                            onClick={handleDelete.bind(this, admin.id)}
                          >
                            <DeleteOutlineIcon />
                          </Button>
                        </Tooltip>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))
                : user?.map((user) => (
                    <StyledTableRow key={user.id}>
                      <StyledTableCell component="th" scope="row">
                        {user.name}
                      </StyledTableCell>

                      <StyledTableCell> {user.calories}</StyledTableCell>
                      <StyledTableCell> {user.date_taken_on}</StyledTableCell>
                      <StyledTableCell> {user.time_taken_at}</StyledTableCell>
                    </StyledTableRow>
                  ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </Box>
  );
}
