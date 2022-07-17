import { Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Page1 from "../components/Page1";
import styles from "../styles/Home.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import bg1 from "../assets/images/bg1.png";
import bg2 from "../assets/images/bg2.png";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

const RootStyle = styled("div")(({ theme }) => ({
  fontFamily: "Poppins !important",
  display: "flex",
  overflow: "hidden",
  height: "100vh",
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "center",
  },
}));

const H1style = styled(Typography)(() => ({
  fontFamily: "Poppins !important",
  fontWeight: 500,
}));

const Btn = styled(Button)(({ theme }) => ({
  fontFamily: "Poppins !important",
  fontSize: "1.5rem !important",
  backgroundColor: "#4F65F6",
  marginTop: "30px",
  paddingTop: 5,
  paddingBottom: 5,
  textTransform: "none",
  fontSize: "1rem",
  width: "100%",
  lineHeight: 1.5,
  [theme.breakpoints.down("lg")]: {
    paddingLeft: theme.spacing(12),
    paddingRight: theme.spacing(12),
  },
}));

const StyledImg1 = styled("img")(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  width: "500px",
  [theme.breakpoints.down("lg")]: {
    width: "250px",
  },
}));

const StyledImg2 = styled("img")(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  right: 0,
  width: "550px",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    marginLeft: "80px",
  },
  // marginLeft: "40px",
}));

export default function Home() {
  const router = useRouter();
  const { user, signIn } = useAuth();
  console.log(user);
  const signUpHandler = async () => {
    await signIn();
  };

  useEffect(() => {
    if (user) router.push("/dashboard");
  }, [user]);

  return (
    <Page1 title="Skrate - Login">
      <StyledImg1 src={bg1.src} />
      <StyledImg2 src={bg2.src} />
      <RootStyle>
        <Layout>
          <StyledContainer>
            <Stack>
              <H1style variant="h5">
                Welcome Back to
                <br /> Skrate
              </H1style>
              <Btn variant="contained" onClick={signUpHandler}>
                Sign In with Google
              </Btn>
            </Stack>
          </StyledContainer>
        </Layout>
      </RootStyle>
    </Page1>
  );
}
