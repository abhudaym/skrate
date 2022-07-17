import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CustomHeader from "./CustomHeader";
import Image from "next/image";
import { styled } from "@mui/material/styles";

const StyledDiv = styled("div")(() => ({
  position: "relative",
}));

const Layout = ({ children }) => {
  return (
    <>
      <StyledDiv>
        <CustomHeader />

        {children}
      </StyledDiv>
    </>
  );
};

export default Layout;
