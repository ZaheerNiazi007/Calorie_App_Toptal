import React from "react";
//MATERIAL UI
import Box from "@mui/material/Box";
//MATERIAL UI LOADER
import CircularProgress from "@mui/material/CircularProgress";

//MAIN ARROW FUNCTION OF LOADER
export default function CircularIndeterminate() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        m: 5,
      }}
    >
      Loading...
      <CircularProgress />
    </Box>
  );
}
