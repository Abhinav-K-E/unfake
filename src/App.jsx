import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Pricing from "./pages/Pricing/Pricing";

function App() {
  const [page, setPage] = useState(true);

  return (
    <div className="app">
      <div>
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
      <Navbar page={page} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/certification" element={<Home />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
