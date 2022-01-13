import './PresentationBlock.css'
import React from 'react';
import {Document, Page} from "react-pdf/dist/umd/entry.webpack";
import {PDFDownloadLink} from "@react-pdf/renderer";

export const PresentationBlock = ({cvUrl, onDocumentLoadSuccess, PdfDoc}) => {
    return (
        <div className="pdf-block">
            <div className="pdf-wrapper">

                <Document
                    file={cvUrl}
                    onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={1} width={590}/>
                </Document>
            </div>

            <PDFDownloadLink
                document={PdfDoc}
                fileName="CV.pdf"
                style={{
                    textDecoration: "none",
                    padding: "10px",
                    color: "#4a4a4a",
                    backgroundColor: "#f2f2f2",
                    border: "1px solid #4a4a4a"
                }}
            >
                {({blob, url, loading, error}) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink>
        </div>
    );
};
