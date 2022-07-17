import { AppBar, Container, Typography } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Logo from "../assets/images/skrate_logo.png";

const CustomHeader = () => {
  return (
    <AppBar sx={{ bgcolor: "transparent", boxShadow: 0, padding: 0 }}>
      <Container
        sx={{
          width: "100vw",
          padding: "0 !important",
          margin: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <LazyLoadImage
          src={Logo.src}
          sx={{ position: "relative", top: "-20px" }}
        />
      </Container>
    </AppBar>
  );
};

export default CustomHeader;
