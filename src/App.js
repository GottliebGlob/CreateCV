import './App.css';
import {useEffect, useState} from "react";
import { PDFDownloadLink, pdf} from "@react-pdf/renderer";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import {PdfDocument} from "./components/DemoPage";

import {Container, Grid, TextField, Typography} from "@mui/material"
import {makeStyles} from "@mui/styles"
import PaperWrapper from "./components/PaperWrapper";


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#022E51',
    },
    white: {
        color: '#fff'
    },
    typo: {
       paddingTop: 10,
        paddingRight: 5
    }
}));

function App() {
    const classes = useStyles();
    const cvWidth = (window.innerHeight * 0.9) * 0.7

    const [cvUrl, setCvUrl] = useState(null)
    const [loading, setLoading] = useState(true);

    const [text, setText] = useState('some text')

    const onDocumentLoadSuccess = () => {
        setLoading(false);
    }

    const render = async () => {
        const blob = await pdf(<PdfDocument text={text}/>).toBlob()
        setCvUrl(blob)
    }

    useEffect(() => {
        render()
    }, [text])

    const handleChange = (event) => {
        setText(event.target.value)
    }

  return (
    <div className="App">
        <Grid container
              spacing={2}>
            <Grid item container md={6} className={classes.root}
                  direction="column"
                  alignItems="center"
                  justify="center">
                <Typography variant="h2" className={classes.white} fontWeight="fontWeightBold">
                    Your Resume
                </Typography>
                <Container>
                   <PaperWrapper sx={{ flexDirection: 'row', alignItems: 'flex-end' }} >
                        <Typography variant="h4" display="inline-block"  className={classes.typo}>
                           Name:
                        </Typography>
                        <TextField
                            display="inline-block"
                        value={text}
                        onChange={handleChange}
                        />
                   </PaperWrapper>
                </Container>
            </Grid>
            <Grid item md={6}>
                <div className="App-header">
                    <div className="pdf-wrapper">

                        <Document
                            file={cvUrl}
                            onLoadSuccess={onDocumentLoadSuccess}>
                            <Page pageNumber={1} width={cvWidth}/>
                        </Document>
                    </div>
                    <input
                        type="text"
                        value={text}
                        onChange={handleChange}
                    />

                    <PDFDownloadLink
                        document={<PdfDocument text={text}/>}
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
                </div>
            </Grid>
        </Grid>

    </div>
  );
}

export default App;
