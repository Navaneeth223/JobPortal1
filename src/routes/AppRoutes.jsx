import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Features from "../pages/Features";
import Components from "../pages/Components";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/company" element={<About />} />
      <Route path="/jobs" element={<Features />} />
      <Route path="/applications" element={<Components />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
