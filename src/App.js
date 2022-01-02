import './App.css';
import {useEffect, useState, useCallback} from "react";
import {PDFDownloadLink, pdf} from "@react-pdf/renderer";
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import { useFilePicker } from 'use-file-picker';

import {PdfDocument} from "./components/DemoPage";

import {Container, Grid, TextField, Typography, Button} from "@mui/material"
import {makeStyles} from "@mui/styles"
import PaperWrapper from "./components/PaperWrapper";
import RegularInput from "./components/RegularInput";


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#022E51',
        height: '100vh',
        overflow: 'auto',
        display: 'flex',
    },
    container: {
        display: 'flex',
        height: '100%'

    },
    white: {
        color: '#fff',
    },
    mainColor: {
        color: '#022E51',
    },
    resume: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 10
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

    const [picture, setPicture] = useState(null)
    const nameField = useFormField("");
    const surnameField = useFormField("");
    const positionField = useFormField("");
    const phoneField = useFormField("");
    const emailField = useFormField("");
    const skypeField = useFormField("");
    const telegramField = useFormField("");
    const linkedinField = useFormField("");
    const githubField = useFormField("");
    const profileField = useFormField("");
    const [profileSymbolsLeft, setProfileSymbolsLeft] = useState(0)

    const [openFileSelector, { filesContent }] = useFilePicker({
        readAs: 'DataURL',
        accept: 'image/*',
        multiple: true,
        limitFilesConfig: { max: 1 },
        maxFileSize: 50
    });

    useEffect(() => {
        if (!!filesContent.length) {
           setPicture(filesContent[0].content)
            onInputBlur()
        }
    }, [filesContent.length])


    useEffect(() => {
        setProfileSymbolsLeft(profileField.value.length)
    }, [profileField.value])

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
            picture={picture}
            name={nameField.value}
            surname={surnameField.value}
            position={positionField.value}
            email={emailField.value}
            phone={phoneField.value}
            skype={skypeField.value}
            telegram={telegramField.value}
            linkedin={linkedinField.value}
            github={githubField.value}
            profile={profileField.value}
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
                  className={classes.container}
            >
                <Grid item container md={6} className={classes.root} id="scroll"
                      direction="column"
                      alignItems="center"
                      justify="center">


                    <Container maxWidth="md">
                        <Typography variant="h2" className={classes.resume} fontWeight="fontWeightBold">
                            Your Resume
                        </Typography>

                        <Typography variant="h5" className={classes.white} fontWeight="fontWeightBold">
                            Profile picture
                        </Typography>

                        <PaperWrapper>
                            <div className="paper-inner pointer" onClick={() => openFileSelector()}>

                                <Typography className={classes.mainColor} variant="h5" fontWeight="fontWeightBold">
                                    Browse files
                                </Typography>

                            </div>
                        </PaperWrapper>

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

                                <RegularInput label="Surname"
                                              required
                                              field={surnameField}
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

                        <Typography variant="h5" className={classes.white} fontWeight="fontWeightBold">
                            About
                        </Typography>

                        <PaperWrapper>
                            <div className="paper-inner">
                                <RegularInput label="Profile"
                                              field={profileField}
                                              required
                                              onInputBlur={onInputBlur}
                                              onEnterPress={onEnterPress}
                                              minRows={4}
                                              maxLenght={500}
                                />
                            </div>

                            <Typography variant="subtitle1"
                                        sx={{textAlign: 'right'}} >
                                {`${profileSymbolsLeft}/500`}
                            </Typography>
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
                                picture={picture}
                                name={nameField.value}
                                soname={surnameField.value}
                                position={positionField.value}
                                email={emailField.value}
                                phone={phoneField.value}
                                skype={skypeField.value}
                                telegram={telegramField.value}
                                linkedin={linkedinField.value}
                                github={githubField.value}
                                profile={profileField.value}
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
