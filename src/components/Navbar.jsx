
import React, { useState } from "react";

export default function Navbar({ onSearch }) {
  const [input, setInput] = useState("");

  // Navbar scroll function
  window.addEventListener("scroll", () => {
    let navbar = document.querySelector("nav");
    if (window.scrollY > 30) {
      navbar.classList.add("background");
    } else {
      navbar.classList.remove("background");
    }
  });

  // Handle input changes and notify the parent
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    onSearch(value); // Pass the search query to the parent
  };

    // Handle search on Enter key press
    const handleKeyPress = (e) => {
      if (e.key === "Enter" && input.trim() !== "") {
        onSearch(input); // Trigger the search callback
      }
    };

  return (
    <div>
      <nav>
        <div className="logo-name">
          <h3>PDFify</h3>
        </div>
       

        {/* serach bar starts */}
        <div className="search">
      <i class="search-icon fa-solid fa-magnifying-glass"></i>
          <input
            type="search"
            value={input}
            onKeyDown={handleKeyPress} // Listen for the Enter key
            onChange={handleInputChange}
            placeholder="Search your PDF"
          />
       
        </div>
      </nav>
    </div>
  );
}
