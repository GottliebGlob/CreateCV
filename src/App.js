import './App.css';
import {useEffect, useState, useCallback} from "react";
import {PDFDownloadLink, pdf} from "@react-pdf/renderer";
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack';

import {PdfDocument} from "./components/DemoPage";

import {Container, Grid, TextField, Typography} from "@mui/material"
import {makeStyles} from "@mui/styles"
import PaperWrapper from "./components/PaperWrapper";
import RegularInput from "./components/RegularInput";


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#022E51',
    },
    white: {
        color: '#fff'
    },
    typo: {
        paddingTop: 10,
        paddingRight: 10,
    }
}));

const useFormField = (initialValue = "") => {
    const [value, setValue] = useState(initialValue);
    const onChange = useCallback((e) => setValue(e.target.value), []);
    return { value, onChange };
};

function App() {
    const classes = useStyles();

    const [cvUrl, setCvUrl] = useState(null)
    const [loading, setLoading] = useState(true);
    const [inputFocus, setInputFocus] = useState(false)

    const nameField = useFormField("");
    const sonameField = useFormField("");
    const positionField = useFormField("");
    const phoneField = useFormField("");
    const emailField = useFormField("");
    const skypeField = useFormField("");
    const telegramField = useFormField("");
    const linkedinField = useFormField("");
    const githubField = useFormField("");

    const onDocumentLoadSuccess = () => {
        setLoading(false);
    }

    const onEnterPress = (e) => {
        if(e.keyCode === 13){
            e.target.blur();
        }
    }

    const onInputBlur = () => {
        setInputFocus(!inputFocus)
    }

    const render = async () => {
        const blob = await pdf(<PdfDocument
            name={nameField.value}
            soname={sonameField.value}
            position={positionField.value}
            email={emailField.value}
            phone={phoneField.value}
            skype={skypeField.value}
            telegram={telegramField.value}
            linkedin={linkedinField.value}
            github={githubField.value}
        />).toBlob()
        setCvUrl(blob)
    }

    useEffect(() => {

        render()
    }, [inputFocus
    ])

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
                    <Container maxWidth="md">

                        <Typography variant="h5" className={classes.white} fontWeight="fontWeightBold">
                           General
                        </Typography>

                        <PaperWrapper>
                            <div className="paper-inner">

                                <RegularInput label="Name"
                                              required
                                              field={nameField}
                                              onInputBlur={onInputBlur}
                                              onEnterPress={onEnterPress}
                                              margin={1}
                                />

                                <RegularInput label="Soname"
                                              required
                                              field={sonameField}
                                              onInputBlur={onInputBlur}
                                              onEnterPress={onEnterPress}
                                />

                            </div>
                        </PaperWrapper>

                        <PaperWrapper>
                            <div className="paper-inner">
                                <RegularInput label="Position"
                                              required
                                              field={positionField}
                                              onInputBlur={onInputBlur}
                                              onEnterPress={onEnterPress}
                                />
                            </div>
                        </PaperWrapper>

                        <Typography variant="h5" className={classes.white} fontWeight="fontWeightBold">
                            Contacts
                        </Typography>

                        <PaperWrapper>
                            <div className="paper-inner">
                                <RegularInput label="Email"
                                              required
                                              field={emailField}
                                              onInputBlur={onInputBlur}
                                              onEnterPress={onEnterPress}
                                              margin={1}
                                />
                                <RegularInput label="Phone"
                                              required
                                              field={phoneField}
                                              onInputBlur={onInputBlur}
                                              onEnterPress={onEnterPress}
                                />
                            </div>
                        </PaperWrapper>

                        <PaperWrapper>
                            <div className="paper-inner">
                                <RegularInput label="Skype"
                                              field={skypeField}
                                              onInputBlur={onInputBlur}
                                              onEnterPress={onEnterPress}
                                              margin={1}
                                />
                                <RegularInput label="Telegram"
                                              field={telegramField}
                                              onInputBlur={onInputBlur}
                                              onEnterPress={onEnterPress}
                                />
                            </div>
                        </PaperWrapper>

                        <PaperWrapper>
                            <div className="paper-inner">
                            <RegularInput label="LinkedIn"
                                          field={linkedinField}
                                          onInputBlur={onInputBlur}
                                          onEnterPress={onEnterPress}
                                          margin={1}
                            />
                            <RegularInput label="GitHub"
                                          field={githubField}
                                          onInputBlur={onInputBlur}
                                          onEnterPress={onEnterPress}
                            />
                            </div>
                        </PaperWrapper>


                    </Container>
                </Grid>
                <Grid item md={6}>
                    <div className="App-header">
                        <div className="pdf-wrapper">

                            <Document
                                file={cvUrl}
                                onLoadSuccess={onDocumentLoadSuccess}>
                                <Page pageNumber={1} width={590}/>
                            </Document>
                        </div>

                        <PDFDownloadLink
                            document={<PdfDocument
                                name={nameField.value}
                                soname={sonameField.value}
                                position={positionField.value}
                                email={emailField.value}
                                phone={phoneField.value}
                                skype={skypeField.value}
                                telegram={telegramField.value}
                                linkedin={linkedinField.value}
                                github={githubField.value}
                            />}
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
                </Grid>
            </Grid>

        </div>
    );
}

export default App;
