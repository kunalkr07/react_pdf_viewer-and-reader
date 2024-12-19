import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'animate.css'; 

export default function Navbar({ onSearch }) {
  const [input, setInput] = useState("");
  const [isOpen, setOpen] = useState(false);
  

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

  //toggle sidebar
  const toggleSidebar = () => {
    console.log("toggled side bar");
   
      setOpen((prev) => !prev);
   
   
  };

  //close sidebar when click on mark
  const closeTab=()=>{
    setOpen(false)
  }

  return (
    <div>
      <nav>
        <div className="logo-name">
        <i
          className="fa-duotone fa-solid fa-hexagon-nodes"
          onClick={toggleSidebar}
        ></i>
          
        </div>

        <ul className={`links ${isOpen ? "active" : ""} animate__animated animate__backInDown`}>

        <i className="fa-solid fa-x mark" onClick={closeTab}></i>
          <li>
            <Link to="/about">About</Link>
          </li>
          <h5>It is a simple and efficient tool designed to streamline document management. With this project, <br /> you can create, organize, and download PDF files with ease. <br />Whether you're looking to compile your resume, manage reports, or store essential files,<br /> PDFList offers a user-friendly interface and seamless functionality to meet your needs.</h5>
         
  
        </ul>

        {/* serach bar starts */}
        <div className="search">
          <i className="search-icon fa-solid fa-magnifying-glass"></i>
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
