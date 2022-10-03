import React, { useEffect, useState } from "react";
//MATERIAL UI
import { Button, Divider, TextField, Typography, Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
//COMPONENTS
import { ResponsiveDatePickers, ResponsiveTimePickers } from "./DataTimePicker";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import {
  EditlistAdminAction,
  UpdatelistAdminAction,
  AddAdminListAction,
  DropdownAdminAction,
} from "../redux/actions/ListActions";
import { UPDATE_ADMIN_LIST_RESET } from "../redux/constants/ListConstants";
import { AddUserListAction } from "../redux/actions/ListUserAction";
import dayjs from "dayjs";

//MAIN FORM ARROW FUNCTION OF DRAWER FORM
export const FoodForm = (id) => {
  //FETCHING USER_ID FROM LOCAL-STORAGE
  const user_id = JSON.parse(localStorage.getItem("user"));
  //STATES
  const [name, setName] = useState("");
  const [time_taken_at, setTime_Taken_at] = useState(dayjs("2020-01-01 12:00"));
  const [date_taken_on, setDate_Taken_on] = useState("");
  const [calories, setCalories] = useState();
  const [user, setUser] = useState();
  //REDUX
  const dispatch = useDispatch();
  //ADDING DATA IN FIELDS
  const adminDropdown = useSelector((state) => state.adminDropdown);
  const { admindropdown } = adminDropdown;
  //FETCHING DATA IN FIELDS
  const EditAdminList = useSelector((state) => state.EditAdminList);
  const { editadminlist } = EditAdminList;
  //UPDATING DATA IN FIELDS
  const UpdateAdminList = useSelector((state) => state.UpdateAdminList);
  const { success } = UpdateAdminList;
  const adminList = useSelector((state) => state.adminList);
  const { admin } = adminList;

  const handleChange = (event) => {
    setUser(event.target.value);
  };
  //USE-EFFECT
  useEffect(() => {
    dispatch(DropdownAdminAction());
  }, [dispatch]);

  useEffect(() => {
    if (!editadminlist || !editadminlist.name || success) {
      dispatch({ type: UPDATE_ADMIN_LIST_RESET });
      dispatch(EditlistAdminAction(id.id));
    } else {
      setName(editadminlist.name);
      setCalories(editadminlist.calories);
      setUser(editadminlist.user);
      setDate_Taken_on(editadminlist.date_taken_on);
      setTime_Taken_at(editadminlist.time_taken_at);
    }
    console.log("hello", id.id);
  }, [dispatch, editadminlist, id.id, success]);
  //FUNCTION TO UPDATE DATA
  const SubmitHandler = (e) => {
    e.preventDefault();
    let new_time =
      "" + time_taken_at.$H + ":" + time_taken_at.$m + ":" + time_taken_at.$s;
    console.log(time_taken_at);
    dispatch(
      UpdatelistAdminAction({
        id: id.id,
        calories: calories,
        date_taken_on: date_taken_on,
        name: name,
        time_taken_at: new_time,
        user: user,
      })
    );
    //   .then(() => {
    //   window.location.reload();
    // });
  };
  //FUNCTION TO CREATE DATA
  const SubmitHandler2 = (e) => {
    e.preventDefault();
    console.log(time_taken_at);

    let new_time =
      "" + time_taken_at.$H + ":" + time_taken_at.$m + ":" + time_taken_at.$s;

    dispatch(
      AddUserListAction({
        calories: calories,
        date_taken_on: date_taken_on,
        name: name,
        time_taken_at: new_time,
        user: user_id,
      })
    ).then(() => {
      window.location.reload();
    });
  };

  const SubmitHandler3 = (e) => {
    e.preventDefault();
    let new_time =
      "" + time_taken_at.$H + ":" + time_taken_at.$m + ":" + time_taken_at.$s;
    dispatch(
      AddAdminListAction({
        calories: calories,
        date_taken_on: date_taken_on,
        name: name,
        time_taken_at: new_time,
        user: user,
      })
    ).then(() => {
      window.location.reload();
    });
  };

  return (
    <div>
      <Box
        my={3}
        sx={{
          display: "flex",
          flexDirection: "center",
          justifyContent: "cenetr",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, color: "green", ml: 2 }}
        >
          Calories Burn / Gain
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", justifyContent: "space-evenly", my: 2 }}>
        <Box>
          <Typography>Name</Typography>
          <TextField
            id="outlined-basic"
            placeholder="Food Name"
            variant="outlined"
            sx={{ width: { xs: "auto", md: 150 } }}
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Box>

        {editadminlist ? (
          <Box>
            <Typography>User</Typography>
            <TextField
              id="outlined-basic"
              placeholder="Food Name"
              variant="outlined"
              sx={{ width: { xs: "auto", md: 150 } }}
              size="small"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </Box>
        ) : null}
        {admindropdown && admin && !editadminlist ? (
          <Box>
            <Typography>User</Typography>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth size="small">
                {/* <InputLabel id="demo-simple-select-label">User</InputLabel> */}
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={user}
                  onChange={handleChange}
                >
                  {admindropdown.map((admindropdown) => (
                    <MenuItem key={admindropdown.id} value={admindropdown.id}>
                      {admindropdown.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>
        ) : null}
        <Box>
          <Typography>Calories</Typography>
          <TextField
            id="outlined-basic"
            placeholder="Calories(g)"
            variant="outlined"
            sx={{ width: { xs: "auto", md: 150 } }}
            size="small"
            value={calories}
            onChange={(e) => setCalories(e.target.value.replace(/\D/g, ""))}
          />
        </Box>
        <Box>
          <Typography>Date</Typography>
          <ResponsiveDatePickers
            date={date_taken_on}
            setDate={setDate_Taken_on}
          />
        </Box>

        <Box>
          <Typography>Time</Typography>
          <ResponsiveTimePickers
            time={time_taken_at}
            setTime={setTime_Taken_at}
          />
        </Box>

        <Box>
          <Button
            onClick={
              editadminlist
                ? SubmitHandler
                : admin
                ? SubmitHandler3
                : SubmitHandler2
            }
            variant="contained"
            sx={{ mt: 3 }}
          >
            <Typography variant="caption">+ Add Food</Typography>
          </Button>
        </Box>
      </Box>

      <Divider />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 3,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            backgroundcolor: "primary",
            backgroundImage: `linear-gradient(45deg, #5514B4, #FF80FF)`,
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          don't eat LESS eat RIGHT
        </Typography>
      </Box>
    </div>
  );
};
