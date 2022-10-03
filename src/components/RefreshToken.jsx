import React, { useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";

function RefreshToken() {
  //STATES
  const [token, setToken] = useState("");
  const SubmitHandler = (e) => {
    e.preventDefault();
    let tk = JSON.parse(localStorage.getItem("userInfo"));
    let tok = {
      access: token,
      refresh: tk.refresh,
    };
    localStorage.setItem("userInfo", JSON.stringify(tok));
  };
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Typography color="primary"> RefreshToken:</Typography>
      <TextField
        id="outlined-basic"
        placeholder="Token"
        variant="outlined"
        sx={{ width: { xs: "auto", md: 250 } }}
        size="small"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
      <Button onClick={SubmitHandler} variant="contained">
        submit
      </Button>
    </Stack>
  );
}

export default RefreshToken;
