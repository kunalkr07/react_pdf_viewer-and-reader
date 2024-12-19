import React, { useState } from "react";
import Navbar from "./components/Navbar"; //importing navbar
import PDFList from "./components/PDFList"; //importing pdfList
import Footer from "./components/Footer"; //importing footer
import About from "./components/About"; //importing about
import PDFViewer from "./components/PDFViewer"; //importing pdfViewer
import { BrowserRouter, Route, Routes } from "react-router-dom"; //Routers

export default function App() {
  //for serach state
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search query updates
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar onSearch={handleSearch} />

        <Routes>
          <Route path="/" element={<PDFList searchQuery={searchQuery} />} />
          <Route path="/about" element={<About />} />
          <Route path="/pdf-viewer" element={<PDFViewer />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
