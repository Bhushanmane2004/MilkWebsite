import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import React Router
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./componets/navbar";
import Footer from "./componets/footer";
import ContactPage from "./pages/contactus";
import Home from "./pages/Home";
import AboutShivamrut from "./pages/AboutShivamrut";
import Apply from "./pages/Apply";
import ChairmanDesk from "./pages/ChairmanDesk";
import Marketing from "./pages/Marketing";
import Notice from "./pages/Notice";
import Certifications from "./pages/Certifications";
import CattleFeedPlant from "./pages/CattleFeedPlant";
import AwardsAndRecognition from "./pages/AwardsAndRecognition";
import Director from "./pages/Director";
import MDMilkUnion from "./pages/MDMilkUnion";
import MilkProducers from "./pages/MilkProducers";
import MilkoTester from "./pages/MilkoTester";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/aboutshivamrut" element={<AboutShivamrut />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/chairmanDesk" element={<ChairmanDesk />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/cattlefeedplant" element={<CattleFeedPlant />} />
            <Route
              path="/awardsandrecognition"
              element={<AwardsAndRecognition />}
            />
            <Route path="/director" element={<Director />} />
            <Route path="/mdmilkunion" element={<MDMilkUnion />} />
            <Route path="/milkproducers" element={<MilkProducers />} />
            <Route path="/milkotester" element={<MilkoTester />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
