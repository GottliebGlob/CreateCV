import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import { PDFDownloadLink, pdf} from "@react-pdf/renderer";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import {PdfDocument} from "./components/DemoPage";


function App() {

    const [cvUrl, setCvUrl] = useState(null)
    const [loading, setLoading] = useState(true);

    const onDocumentLoadSuccess = () => {
        setLoading(false);
    }

    const render = async () => {
        const blob = await pdf(<PdfDocument />).toBlob()
        setCvUrl(blob)
    }

    useEffect(() => {
        render()
    }, [])

  return (
    <div className="App">
      <header className="App-header">
            <div className="pdf-wrapper">

                <Document
                    file={cvUrl}
                    onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={1} width={2000} canvasBackground="transparent"/>
                </Document>
            </div>


        <PDFDownloadLink
            document={<PdfDocument />}
            fileName="CV.pdf"
            style={{
              textDecoration: "none",
              padding: "10px",
              color: "#4a4a4a",
              backgroundColor: "#f2f2f2",
              border: "1px solid #4a4a4a"
            }}
        >
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
      </header>
    </div>
  );
}

export default App;
