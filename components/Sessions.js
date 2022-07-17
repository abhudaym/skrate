import {
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useAuth } from "../context/AuthContext";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const SCard = ({ mentor, timing, date, sessionType }) => {
  const { user, logout } = useAuth();

  return (
    <Card
      sx={{
        margin: "5px",
        paddingTop: "10px",
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
            {mentor}
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "Poppins !important",
              paddingLeft: "5px",
            }}
          >
            Flutter
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
            {timing}
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "Poppins !important",
              paddingLeft: "5px",
            }}
          >
            {date}
          </Typography>
        </Stack>
        <Button
          sx={{
            color: "black",
            bgcolor: sessionType == "Review" ? "#91AEE1" : "#E8C9D1",
            fontSize: "12px",
            fontFamily: "Poppins !important",
            textTransform: "none",
          }}
        >
          {sessionType}
        </Button>
        <ArrowRightAltIcon sx={{ fontWeight: 600 }} />
      </Stack>
    </Card>
  );
};

const Sessions = ({ sessions }) => {
  console.log(sessions);
  return (
    <Stack sx={{ marginBottom: "25px" }}>
      <Card
        sx={{ margin: "0 40px", boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)" }}
      >
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
            Upcoming Sessions
          </Typography>
          <Stack>
            {sessions &&
              sessions.map((item, i) => {
                return (
                  <SCard
                    mentor={item.mentor_name}
                    timing={item.timings}
                    date={item.date}
                    sessionType={item.session_type}
                    key={i}
                  />
                );
              })}
          </Stack>
        </Container>
      </Card>
    </Stack>
  );
};

export default Sessions;
