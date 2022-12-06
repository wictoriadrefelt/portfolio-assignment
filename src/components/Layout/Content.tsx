import { Route, Routes } from "react-router-dom";
import { FC } from "react";
import Members from "../Pages/Members";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import { Box } from "@mantine/core";
import Profile from "../Pages/Profile";

const Content: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 1680, backgroundColor: "white" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/members/:slug" element={<Profile />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Content;
