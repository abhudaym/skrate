import PropTypes from "prop-types";
import Head from "next/head";
import { forwardRef } from "react";
// @mui
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, meta, title, ...other }, ref) => (
  <>
    <Head>
      <title>{`${title}`}</title>
      {meta}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
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

export default Page;
