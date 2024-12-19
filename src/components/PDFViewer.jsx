import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook

const PDFViewer = () => {
  const location = useLocation(); // Get the location object
  const { pdfUrl } = location.state || {}; // Retrieve the PDF URL from state

  if (!pdfUrl) return <div>No PDF selected.</div>;

  return (
    <div>
    <div className="pdf-viewer">
    <h2>PDF Viewer</h2>
      <iframe
        src={pdfUrl}
        width="100%"
        height="600px"
        title="PDF Viewer"
      ></iframe>
    </div>
    </div>
  );
};

export default PDFViewer;
