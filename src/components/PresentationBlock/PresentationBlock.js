import './PresentationBlock.css'
import React from 'react';
import {Document, Page} from "react-pdf/dist/umd/entry.webpack";
import {PDFDownloadLink} from "@react-pdf/renderer";
import theme from "../../blueTheme";

export const PresentationBlock = ({dimensions, cvUrl, onDocumentLoadSuccess, PdfDoc}) => {

    let cvHeight = 0
    let cvWidth = 0

    if (dimensions.width >= 1200) {
       cvHeight = dimensions.height * 0.95 - 70
        cvWidth = cvHeight / Math.sqrt(2)
    }
    if (dimensions.width >= 768 && dimensions.width < 1200) {
        cvWidth = (dimensions.width * 0.48) - 20
        cvHeight = cvWidth * Math.sqrt(2)
    }
    if (dimensions.width < 768) {
        cvWidth = (dimensions.width * 0.9) - 20
        cvHeight = cvWidth * Math.sqrt(2)
    }


    return (
        <div className="pdf-block">
            <div className="pdf-wrapper" style={{height: cvHeight, width: cvWidth}}>

                <Document
                    file={cvUrl}
                    onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={1} width={cvWidth}/>
                </Document>
            </div>

            <PDFDownloadLink
                document={PdfDoc}
                fileName="CV.pdf"
                style={{
                    textDecoration: "none",
                    padding: "10px",
                    marginTop: "10px",
                    color: '#022E51',
                    fontWeight: 'bold',
                    backgroundColor: "#fff",
                    borderRadius : 5
                }}
            >
                {({blob, url, loading, error}) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink>

        </div>
    );
};
