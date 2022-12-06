import { Route, Routes } from "react-router-dom";
import { FC } from "react";
import Members from "../Pages/Members";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import { Box } from "@mantine/core";

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
          {/* + Lägg till dynamisk profilsida */}
        </Routes>
      </Box>
    </Box>
  );
};

export default Content;
