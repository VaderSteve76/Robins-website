import React, { Component } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// import { ToolbarSlot } from '@react-pdf-viewer/toolbar';
import pdf from './Big Doodle Dreams Health Guarantee Contract.pdf';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// const defaultLayoutPluginInstance = defaultLayoutPlugin();

export default class Pdf extends Component {
  render() {
    return (
      <div>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
          <Viewer fileUrl={pdf} />
        </Worker>
      </div>
    );
  }
}