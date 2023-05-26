import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "components/Navbar";

const Layout = () => {
  return (
    <Box width="100%" height="100%">
      <React.Fragment>
        <Navbar />
        <Outlet />
      </React.Fragment>
    </Box>
  );
};

export default Layout;
