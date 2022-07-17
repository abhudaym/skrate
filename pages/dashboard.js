import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, useTheme } from "@mui/material/styles";
import Layout from "../components/Layout";
import { Container, Divider, Grid, Stack } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const { user } = useAuth();
  const router = useRouter();
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState("home");
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
          {lgScreen && (
            <Container
              maxWidth
              sx={{ marginTop: "150px", paddingLeft: "0!important" }}
            >
              <Grid container>
                <Grid item lg={2}>
                  <Stack>
                    <div
                      onClick={() => {
                        setSelected("home");
                      }}
                      style={{
                        cursor: "pointer",
                        marginBottom: "40px",
                        borderLeft:
                          selected == "home" ? "5px solid #4F65F6" : "0px",
                      }}
                    >
                      <Sidebar
                        title="Home"
                        //   onClick={setSelected("home")}
                        active={selected == "home" ? true : false}
                      />
                    </div>
                    <div
                      onClick={() => {
                        setSelected("shuffle");
                      }}
                      style={{
                        cursor: "pointer",
                        borderLeft:
                          selected == "shuffle" ? "5px solid #4F65F6" : "0px",
                      }}
                    >
                      <Sidebar
                        title="Shuffle"
                        //   onClick={setSelected("shuffle")}
                        active={selected == "shuffle" ? true : false}
                      />
                    </div>
                  </Stack>
                </Grid>

                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ color: "black", height: "100vh", top: "-120px" }}
                />
              </Grid>
            </Container>
          )}
        </Layout>
      )}
    </Page>
  );
};

export default Dashboard;
