import { AppBar, Button, Container, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Logo from "../assets/images/skrate_logo1.png";
import { styled } from "@mui/material/styles";
import { useAuth } from "../context/AuthContext";

const logoutHandler = async () => {
  await logout();
};

const LogoImg = styled(LazyLoadImage)(({ theme }) => ({
  position: "relative",
  marginTop: "30px",
  [theme.breakpoints.down("lg")]: {
    height: "60px",
    top: 0,
  },
}));

const CustomHeader = () => {
  const { user, logout } = useAuth();

  const logoutHandler = async () => {
    await logout();
  };
  return (
    <AppBar sx={{ bgcolor: "transparent", boxShadow: 0, padding: 0 }}>
      <Container
        maxWidth
        sx={{
          width: "100vw",
          padding: "0 !important",
          margin: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <LogoImg src={Logo.src} />
        {user && (
          <Stack direction="row">
            <Button
              variant="contained"
              sx={{ marginLeft: "auto", marginRight: "20px" }}
              onClick={logoutHandler}
            >
              Sign Out
            </Button>
            <Button
              variant="contained"
              sx={{ marginLeft: "auto", marginRight: "20px" }}
            >
              Sign Out
            </Button>
          </Stack>
        )}
      </Container>
    </AppBar>
  );
};

export default CustomHeader;
