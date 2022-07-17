import {
  AppBar,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Logo from "../assets/images/skrate_logo1.png";
import { styled } from "@mui/material/styles";
import { useAuth } from "../context/AuthContext";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const logoutHandler = async () => {
  await logout();
};

const LogoImg = styled(LazyLoadImage)(({ theme }) => ({
  position: "relative",
  marginTop: "0px",
  marginLeft: "10px",
  height: "40px",
  [theme.breakpoints.down("lg")]: {
    height: "60px",
    top: 0,
  },
}));

const CustomHeader = () => {
  const { user, logout } = useAuth();
  const theme = useTheme();

  const lgScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const mdScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const smScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const logoutHandler = async () => {
    await logout();
  };
  return (
    <AppBar
      sx={{ bgcolor: "transparent", boxShadow: 0, padding: "20px 0 0 0" }}
    >
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
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <Button
              variant="contained"
              sx={{
                fontFamily: "Poppins !important",
                fontSize: "16px",
                fontWeight: 500,
                marginLeft: "auto",
                marginRight: "20px",
                padding: "5px 30px",
                bgcolor: "#4F65F6",
                textTransform: "none",
              }}
              onClick={logoutHandler}
            >
              Sign Out
            </Button>
            <Button
              sx={{
                marginLeft: "auto",
                marginRight: "5px",
              }}
            >
              <img
                src={user.displayPic}
                height="40px"
                width="40px"
                style={{ borderRadius: "100%" }}
              />
            </Button>
            <Typography
              variant="p"
              sx={{
                color: "black",
                fontFamily: "Poppins !important",
                marginRight: "70px",
                fontWeight: 400,
              }}
            >
              {user.displayName}
            </Typography>
          </Stack>
        )}
      </Container>
    </AppBar>
  );
};

export default CustomHeader;
