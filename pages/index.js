import { Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Page from "../components/Page";
import styles from "../styles/Home.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import bg1 from "../assets/images/bg1.png";
import bg2 from "../assets/images/bg2.png";

const RootStyle = styled("div")(() => ({
  fontFamily: "Poppins !important",
  display: "flex",
  overflow: "hidden",
  height: "100vh",
  alignItems: "center",
}));

const H1style = styled(Typography)(() => ({
  fontFamily: "Poppins !important",
  fontWeight: 500,
}));

const Btn = styled(Button)(() => ({
  fontFamily: "Poppins !important",
  backgroundColor: "#4F65F6",
  marginTop: "20px",
  paddingTop: 5,
  paddingBottom: 5,
  textTransform: "none",
  fontSize: "1rem",
}));

export default function Home() {
  return (
    <Page title="Skrate - Login">
      <img
        src={bg1.src}
        style={{ position: "absolute", top: 0, right: 0, height: "400px" }}
      ></img>
      <img
        src={bg2.src}
        style={{ position: "absolute", bottom: 0, right: 0, width: "550px" }}
      ></img>
      <RootStyle>
        <Layout>
          <Container sx={{ marginLeft: "80px" }}>
            <Stack>
              <H1style variant="h5">
                Welcome Back to
                <br /> Skrate
              </H1style>
              <Btn variant="contained">Sign In with Google</Btn>
            </Stack>
          </Container>
        </Layout>
      </RootStyle>
    </Page>
  );
}
