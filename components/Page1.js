import Head from "next/head";
import { forwardRef } from "react";
// @mui
import { Box } from "@mui/material";

const Page1 = forwardRef(({ children, meta, title, ...other }, ref) => (
  <>
    <Head>
      <title>{`${title}`}</title>
      {meta}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>

    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));

Page1.displayName = "Page1";
export default Page1;
