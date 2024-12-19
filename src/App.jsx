import React, { useState } from "react";
import Navbar from "./components/Navbar";
import PDFList from "./components/PDFList";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PDFViewer from "./components/PDFViewer";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search query updates
  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <div>
      <BrowserRouter>
        <Navbar onSearch={handleSearch} />
     <PDFViewer/>

        <Routes>
          <Route
            path="/"
            element={<PDFList searchQuery={searchQuery} />}
          ></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
