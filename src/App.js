import React from "react";
import { Routes, Route } from "react-router-dom";
import AddressManagement from "./pages/addressManagement";
import NotFound from "./pages/notFound";
import Navbar from "./components/navbar";
import LocationSelection from "./pages/locationSelection";
import LocationPage from "./components/locationPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LocationSelection />} />
        <Route path="/addresses" element={<AddressManagement />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
