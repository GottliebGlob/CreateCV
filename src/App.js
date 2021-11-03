import './App.css';
import {useEffect, useState, useCallback} from "react";
import {PDFDownloadLink, pdf} from "@react-pdf/renderer";
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack';

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
    }, [nameField.value,
            sonameField.value,
            positionField.value,
            emailField.value,
            phoneField.value,
            skypeField.value,
            telegramField.value,
            linkedinField.value,
            githubField.value
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
                        <PaperWrapper>
                            <div className="paper-inner">
                                    <Typography variant="h6" display="inline-block" className={classes.typo}>
                                        Name:
                                    </Typography>
                                    <TextField
                                        label="Name"
                                        required
                                        fullWidth
                                        {...nameField}
                                        sx={{marginRight: 1}}
                                    />
                                    <Typography variant="h6" display="inline-block" className={classes.typo}>
                                        Soname:
                                    </Typography>
                                    <TextField
                                        label="Soname"
                                        required
                                        fullWidth
                                        {...sonameField}
                                    />
                            </div>
                        </PaperWrapper>

                        <PaperWrapper>
                            <div className="paper-inner">
                                    <Typography variant="h6" display="inline-block" className={classes.typo}>
                                        Position:
                                    </Typography>

                                        <TextField
                                            label="Position"
                                            required
                                            {...positionField}
                                            fullWidth
                                        />

                            </div>
                        </PaperWrapper>

                        <PaperWrapper>
                            <div className="paper-inner">
                                <Typography variant="h6" display="inline-block" className={classes.typo}>
                                    Email:
                                </Typography>
                                <TextField
                                    label="Email"
                                    required
                                    fullWidth
                                    {...emailField}
                                    sx={{marginRight: 1}}
                                />
                                <Typography variant="h6" display="inline-block" className={classes.typo}>
                                    Phone:
                                </Typography>
                                <TextField
                                    label="Phone"
                                    required
                                    fullWidth
                                    {...phoneField}
                                />
                            </div>
                        </PaperWrapper>

                        <PaperWrapper>
                            <div className="paper-inner">
                                <Typography variant="h6" display="inline-block" className={classes.typo}>
                                    Skype:
                                </Typography>
                                <TextField
                                    label="Skype"
                                    fullWidth
                                    {...skypeField}
                                    sx={{marginRight: 1}}
                                />
                                <Typography variant="h6" display="inline-block" className={classes.typo}>
                                    Telegram:
                                </Typography>
                                <TextField
                                    label="Telegram"
                                    fullWidth
                                    {...telegramField}
                                />
                            </div>
                        </PaperWrapper>

                        <PaperWrapper>
                            <div className="paper-inner">
                                <Typography variant="h6" display="inline-block" className={classes.typo}>
                                    LinkedIn:
                                </Typography>
                                <TextField
                                    label="LinkedIn"
                                    fullWidth
                                    {...linkedinField}
                                    sx={{marginRight: 1}}
                                />
                                <Typography variant="h6" display="inline-block" className={classes.typo}>
                                    GitHub:
                                </Typography>
                                <TextField
                                    label="Github"
                                    fullWidth
                                    {...githubField}
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
