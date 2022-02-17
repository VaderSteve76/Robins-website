import React from "react";
import PDFViewer, { Worker } from "@phuocng/react-pdf-viewer";
import pdf from './Big Doodle Dreams Health Guarantee Contract.pdf';
// import "./styles.css";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";

export default function App() {
  return (
    <div className="App">
      <div style={{ overflow: "scroll", width: "100%" }}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
          <PDFViewer fileUrl={pdf} />
        </Worker>
      </div>
    </div>
  );
}










// import React, { Component } from 'react';
// import { Worker } from '@react-pdf-viewer/core';
// import { Viewer } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
// import pdf from './Big Doodle Dreams Health Guarantee Contract.pdf';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// // const defaultLayoutPluginInstance = defaultLayoutPlugin();
// const { Toolbar } = toolbarPluginInstance;
// const toolbarPluginInstance = toolbarPlugin();

// export default class Pdf extends Component {
//   render() {
//     return (
//       <div>
//         <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
//           <Toolbar />
//           <Viewer fileUrl={pdf} plugins={toolbarPluginInstance} />
//         </Worker>
//       </div>
//     );
//   }
// }

