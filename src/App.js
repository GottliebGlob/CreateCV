import logo from './logo.svg';
import './App.css';
import { PDFDownloadLink } from "@react-pdf/renderer";
import {PdfDocument} from "./components/DemoPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
