import './MainPage.css';
import {useEffect, useState, useCallback} from "react";

import {pdf} from "@react-pdf/renderer";

import {useFilePicker} from 'use-file-picker';

import {PdfDocument} from "../components/PdfComponents/DemoPage";

import {Grid} from "@mui/material"
import {makeStyles} from "@mui/styles"
import FieldsBlock from "../components/FieldsBlock";
import PresentationBlock from "../components/PresentationBlock";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
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

export const MainPage = () => {
    const classes = useStyles();

    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    const [mobileMarker, setMobileMarker] = useState(false)
    const [isLeftBlockActive, setIsLeftBlockActive] = useState(true)

    function debounce(fn, ms) {
        let timer
        return _ => {
            clearTimeout(timer)
            timer = setTimeout(_ => {
                timer = null
                fn.apply(this, arguments)
            }, ms)
        };
    }

    const [cvUrl, setCvUrl] = useState(null)
    const [loading, setLoading] = useState(true);
    const [inputFocus, setInputFocus] = useState(false)
    const [colorModalOpen, setColorModalOpen] = useState(true)

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



    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            window.innerWidth < 768 ? setMobileMarker(true) : setMobileMarker(false)

            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }, 200)

        window.addEventListener('resize', debouncedHandleResize)

        return _ => {
            window.removeEventListener('resize', debouncedHandleResize)
        }

    })

    useEffect(() => {
        window.innerWidth < 768 ? setMobileMarker(true) : setMobileMarker(false)
    },[])



    return (
        <div className="App">

            {
                mobileMarker ? isLeftBlockActive ? <div className="toggle-button">
                    <div>
                        <ArrowForwardIosIcon className="toggle-button__icon" onClick={() => setIsLeftBlockActive(!isLeftBlockActive)}
                                             sx={{ fontSize: '2rem' }}
                        />
                    </div>
                </div> : <div className="toggle-button toggle-button-left">
                    <div>
                        <ArrowBackIosIcon className="toggle-button__icon-left" onClick={() => setIsLeftBlockActive(!isLeftBlockActive)}
                                             sx={{ fontSize: '2rem' }}
                        />
                    </div>
                </div> : null
            }
            <Grid container
                  className={classes.container}
            >

                <Grid item container lg={6} md={6} sm={12} className={classes.root}
                      sx={{display: isLeftBlockActive ? 'flex' : 'none', paddingBottom: '40px'}} id="scroll">

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
                <Grid item lg={6} md={6} sm={12} sx={{
                    display: !isLeftBlockActive || !mobileMarker ? 'flex' : 'none',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: !mobileMarker ? 'auto' : '100vh',
                    width: !mobileMarker ? 'auto' : '100vw'
                }}>
                    <PresentationBlock dimensions={dimensions} cvUrl={cvUrl} onDocumentLoadSuccess={onDocumentLoadSuccess} PdfDoc={PdfDoc}/>



                </Grid>
            </Grid>


        </div>


    );
}


