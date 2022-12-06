import { Route, Routes } from "react-router-dom";
import { FC } from "react";
import Members from "../Pages/Members";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";

const Content: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/contact" element={<Contact />} />
        {/* + Lägg till dynamisk profilsida */}
      </Routes>
    </>
  );
};

export default Content;
