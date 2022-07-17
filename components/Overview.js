import { Card, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const SCard = ({ title, number }) => {
  return (
    <Card
      sx={{
        margin: "10px",
        backgroundColor: "#F6F7FF",
        paddingTop: "20px",
        paddingBottom: "20px",
        boxShadow: "none!important",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ paddingLeft: "20px", paddingRight: "20px", minHeight: "80px" }}
      >
        <Typography
          variant="p"
          sx={{ fontFamily: "Poppins !important", fontWeight: 500 }}
        >
          {title}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Poppins !important",
            fontWeight: 500,
            color: "#4F65F6",
            paddingLeft: "5px",
          }}
        >
          {number}
        </Typography>
      </Stack>
    </Card>
  );
};

const Overview = ({ stats }) => {
  return (
    <Stack sx={{ marginBottom: "25px" }}>
      <Card
        sx={{ margin: "0 40px", boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)" }}
      >
        {stats && (
          <Container sx={{ paddingTop: "20px", paddingBottom: "20px" }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Poppins !important",
                marginBottom: "10px",
                marginLeft: "10px",
                fontWeight: 500,
              }}
            >
              Overview
            </Typography>
            <Grid container>
              <Grid item md={6}>
                <SCard title="Profile Views" number={stats.profile_views} />
              </Grid>
              <Grid item md={6}>
                <SCard
                  title="Mentorship Sessions"
                  number={stats.mentorship_sessions}
                />
              </Grid>
              <Grid item md={6}>
                <SCard title="Jobs Applied" number={stats.jobs_applied} />
              </Grid>
              <Grid item md={6}>
                <SCard title="Skills Verified" number={stats.skills_verified} />
              </Grid>
            </Grid>
          </Container>
        )}
      </Card>
    </Stack>
  );
};

export default Overview;
