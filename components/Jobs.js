import { Card, Stack, Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import { useAuth } from "../context/AuthContext";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const SCard = ({ role, organization, location, date }) => {
  const { user, logout } = useAuth();

  return (
    <Card
      sx={{
        margin: "5px",
        paddingTop: "10px",
        paddingBottom: "25px",
        boxShadow: "none!important",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          paddingLeft: "20px",
          paddingRight: "20px",
          minHeight: "80px",
        }}
      >
        <Typography
          variant="p"
          sx={{ fontFamily: "Poppins !important", fontWeight: 500 }}
        >
          <img
            src={user.displayPic}
            height="40px"
            width="40px"
            style={{ borderRadius: "100%" }}
          />
        </Typography>
        <Stack>
          <Typography
            variant="p"
            sx={{
              fontFamily: "Poppins !important",
              fontWeight: 500,
              paddingLeft: "5px",
            }}
          >
            {role}
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "Poppins !important",
              paddingLeft: "5px",
            }}
          >
            {organization}
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "Poppins !important",
              fontSize: "12px",
              paddingLeft: "5px",
            }}
          >
            {location}
          </Typography>
        </Stack>
        <Stack>
          <Typography
            variant="p"
            sx={{
              fontFamily: "Poppins !important",
              fontWeight: 500,
              paddingLeft: "5px",
            }}
          >
            {date}
          </Typography>
        </Stack>
        <ArrowRightAltIcon sx={{ fontWeight: 600 }} />
      </Stack>
    </Card>
  );
};

const Jobs = ({ jobs }) => {
  return (
    <>
      <Card
        sx={{
          marginRight: "20px",
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Container sx={{ paddingTop: "20px" }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Poppins !important",
              paddingBottom: "20px",
              marginBottom: "10px",
              marginLeft: "10px",
              fontWeight: 500,
            }}
          >
            New Jobs
          </Typography>
          <Stack>
            {jobs.map((item, i) => {
              return (
                <SCard
                  role={item.role}
                  organization={item.organization_name}
                  location={item.location}
                  date={item.date_posted}
                  key={i}
                />
              );
            })}
          </Stack>
        </Container>
      </Card>
    </>
  );
};

export default Jobs;
