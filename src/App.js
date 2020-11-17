import React from "react";
import { Document, Page, pdfjs, pdfjsLib } from "react-pdf";
import "./styles.css";

// import file from "/public/document.pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/webpack/index");
// pdfjsLib.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/build/pdf.worker.js");
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function App() {
  return (
    <div className="App">
      <Document file={"/document.pdf"}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}
