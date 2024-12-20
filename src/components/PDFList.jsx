import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

export default function PDFList({ searchQuery }) {
  const [file, setFile] = useState([]);
  const navigate = useNavigate(); // Initialize the navigate function

  // Fetch data from the API
  useEffect(() => {
    fetch("https://api.npoint.io/dee51ea017d20efdfcc8")
      .then((response) => response.json())
      .then((data) => setFile(data))
      .catch((error) => {
        console.error("Error fetching PDF data:", error);
      });
  }, []);

  // Filter files based on the search query
  const filteredFiles = file.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePdfSelect = (pdfLink) => {
    // Navigate to PDF viewer route and pass the pdfLink in state
    navigate("/pdf-viewer", { state: { pdfUrl: pdfLink } });
  };

  return (
    <div className="list-container">
      {filteredFiles.length > 0 ? (
        filteredFiles.map((element, idx) => (
          <div
            className="card my-2 mx-2"
            key={element.name + idx}
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">{element.name}</h5>
              <h5 className="card-subtitle mb-2 text-warning">
                {element.published}
              </h5>
              <p className="card-text">{element.author}</p>
              <button
                className="element-btn"
                onClick={() => handlePdfSelect(element.link)} // Navigate to the PDF viewer
              >
                View PDF
              </button>
            </div>
          </div>
        ))
      ) : (
        <h3>No results found.</h3>
      )}
    </div>
  );
}
