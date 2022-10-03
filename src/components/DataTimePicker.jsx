import React from "react";
//MATERIAL UI
import { Stack, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

//MAIN FUNCTION FOR DATE  PICKER
export function ResponsiveDatePickers(props) {
  //FETCHING STATE FROM ANOTHER COMPONENT USING PROPS
  const { date, setDate } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DatePicker
          disableFuture
          format="YYYY-MM-DD"
          toolbarFormat="YYYY-MM-DD"
          views={["year", "month", "day"]}
          inputFormat="YYYY-MM-DD"
          value={date}
          onChange={(newValue) => {
            setDate(newValue.format("YYYY-MM-DD"));
          }}
          renderInput={(params) => <TextField size="small" {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}

//MAIN FUNCTION FOR DATE  PICKER
export function ResponsiveTimePickers(props) {
  //FETCHING STATE FROM ANOTHER COMPONENT USING PROPS
  const { time, setTime } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <TimePicker
          ampm={false}
          openTo="hours"
          views={["hours", "minutes", "seconds"]}
          inputFormat="HH:mm:ss"
          mask="__:__:__"
          defaultTime={new Date(2007, 11, 5, 8, 23, 17)}
          value={time}
          onChange={(newValue) => {
            setTime(newValue.format("YYYY-MM-DDTHH:mm:ss"));
          }}
          renderInput={(params) => <TextField size="small" {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
