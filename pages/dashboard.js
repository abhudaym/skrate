import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, useTheme } from "@mui/material/styles";
import Layout from "../components/Layout";
import { Card, Container, Divider, Grid, Stack } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import Sidebar from "../components/Sidebar";
import Overview from "../components/Overview";
import Sessions from "../components/Sessions";
import Jobs from "../components/Jobs";
import axios from "axios";

const Dashboard = () => {
  const { user } = useAuth();
  const router = useRouter();
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState("home");
  const [stats, setStats] = useState(null);
  const [sessions, setSessions] = useState(null);
  const [jobs, setJobs] = useState(null);
  const lgScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const mdScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const smScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(async () => {
    if (!user) {
      router.push("/");
      setLoading(false);
    }

    try {
      const data = await axios.get(
        "https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818"
      );
      const { dashboard_stats, upcoming_sessions, job_postings } = data.data;
      setStats(dashboard_stats);
      setSessions(upcoming_sessions);
      setJobs(job_postings);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [user, stats, loading]);

  return (
    <Page title="Skrate - Dashboard">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <Layout>
          <Container
            maxWidth
            sx={{
              marginTop: "150px",
              paddingLeft: "0!important",
              paddingRight: "0!important",
            }}
          >
            <Grid container>
              {lgScreen && (
                <Grid item lg={2} md={12}>
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
                        active={selected == "shuffle" ? true : false}
                      />
                    </div>
                  </Stack>
                </Grid>
              )}

              {/* <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ color: "black", height: "100vh", top: "-120px" }}
                /> */}
              <Grid item lg={6} md={12}>
                <Stack>
                  <Overview stats={stats} />
                  <Sessions sessions={sessions} />
                </Stack>
              </Grid>
              <Grid item lg={4} md={12}>
                <Jobs jobs={jobs} />
              </Grid>
            </Grid>
          </Container>
        </Layout>
      )}
    </Page>
  );
};

export default Dashboard;
