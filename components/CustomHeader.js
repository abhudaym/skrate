import { AppBar, Container, Typography } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Logo from "../assets/images/skrate_logo.png";
import { styled } from "@mui/material/styles";

const LogoImg = styled(LazyLoadImage)(({ theme }) => ({
  position: "relative",
  top: "-20px",
  [theme.breakpoints.down("lg")]: {
    height: "150px",
    top: 0,
  },
}));

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
        <LogoImg src={Logo.src} />
      </Container>
    </AppBar>
  );
};

export default CustomHeader;
