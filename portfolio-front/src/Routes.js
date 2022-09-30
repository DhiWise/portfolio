import React from "react";
import HomePage from "pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
