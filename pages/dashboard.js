import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Layout from "../components/Layout";
import { Container } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

const Dashboard = () => {
  const { user } = useAuth();
  const router = useRouter();
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const lgScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const mdScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const smScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (!user) {
      router.push("/");
      setLoading(false);
    } else if (user) {
      setLoading(false);
    }
  }, [user]);

  return (
    <Page title="Skrate - Dashboard">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <Layout>
          <Container sx={{ margin: "100px" }}>H1llo</Container>
        </Layout>
      )}
    </Page>
  );
};

export default Dashboard;
