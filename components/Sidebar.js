import { Stack, Typography } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Sidebar = ({ title, active }) => {
  console.log(title, active);
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
        //   sx={{ marginBottom: "50px" }}
      >
        {title == "Home" ? <HomeIcon /> : <DashboardIcon />}
        <Typography
          variant="p"
          sx={{
            color: "black",
            marginLeft: "5px",
            fontFamily: "Poppins !important",
          }}
        >
          {title}
        </Typography>
      </Stack>
    </>
  );
};

export default Sidebar;
