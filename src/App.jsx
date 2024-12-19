import React, { useState } from "react-router-dom";
import Navbar from "./components/Navbar";
import PDFList from "./components/PDFList";
import Footer from "./components/Footer";
import About from "./components/About";
import PDFViewer from "./components/PDFViewer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
