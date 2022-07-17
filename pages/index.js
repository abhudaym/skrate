import { styled } from "@mui/material/styles";
import Head from "next/head";
import Image from "next/image";
import Page from "../components/page";
import styles from "../styles/Home.module.css";

const RootStyle = styled("div")(() => ({
  fontFamily: "Poppins",
  display: "flex",
  overflow: "hidden",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
}));

export default function Home() {
  return (
    <Page title="Skrate - Login">
      <RootStyle>
        <h1>Hello</h1>
      </RootStyle>
    </Page>
  );
}
