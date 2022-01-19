import './App.css';
import {useEffect, useState, useCallback} from "react";

import {pdf} from "@react-pdf/renderer";

import {useFilePicker} from 'use-file-picker';

import {PdfDocument} from "./components/PdfComponents/DemoPage";

import {Grid} from "@mui/material"
import {makeStyles} from "@mui/styles"
import FieldsBlock from "./components/FieldsBlock";
import PresentationBlock from "./components/PresentationBlock";


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
}));

const useFormField = (initialValue = "") => {
    const [value, setValue] = useState(initialValue);
    const onChange = useCallback((e) => setValue(e.target.value), []);
    return {value, onChange};
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
    const [experience, setExperience] = useState([])
    const [education, setEducation] = useState([])
    const [skills, setSkills] = useState([])
    const [langs, setLangs] = useState([])

    const [openFileSelector, {filesContent}] = useFilePicker({
        readAs: 'DataURL',
        accept: 'image/*',
        multiple: true,
        limitFilesConfig: {max: 1},
        maxFileSize: 50
    });

    const PdfDoc = <PdfDocument
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
        experience={experience}
        education={education}
        skills={skills}
        langs={langs}
    />

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
        if (e.keyCode === 13) {
            e.target.blur();
        }
    }

    const onInputBlur = () => {
        setInputFocus(!inputFocus)
    }

    const render = async () => {
        const blob = await pdf(PdfDoc).toBlob()
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

                    <FieldsBlock
                        onInputBlur={onInputBlur}
                        onEnterPress={onEnterPress}
                        openFileSelector={openFileSelector}
                        nameField={nameField}
                        surnameField={surnameField}
                        positionField={positionField}
                        emailField={emailField}
                        phoneField={phoneField}
                        skypeField={skypeField}
                        telegramField={telegramField}
                        linkedinField={linkedinField}
                        githubField={githubField}
                        profileField={profileField}
                        profileSymbolsLeft={profileSymbolsLeft}
                        experience={experience}
                        setExperience={setExperience}
                        education={education}
                        setEducation={setEducation}
                        skills={skills}
                        setSkills={setSkills}
                        langs={langs}
                        setLangs={setLangs}
                    />

                </Grid>
                <Grid item md={6} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <PresentationBlock cvUrl={cvUrl} onDocumentLoadSuccess={onDocumentLoadSuccess} PdfDoc={PdfDoc}/>
                </Grid>
            </Grid>

        </div>
    );
}

export default App;
