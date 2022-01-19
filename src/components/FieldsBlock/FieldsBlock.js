import React, {Fragment} from 'react';
import {makeStyles} from "@mui/styles";
import {Container, TextField, Typography} from "@mui/material";
import PaperWrapper from "../PaperWrapper";
import RegularInput from "../RegularInput";
import ExperienceInput from "../ExperienceInput";
import SkillsInput from "../SkillsInput";
import LangsInput from "../LangsInput";

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
    secColor: {
        color: '#B74803'
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

export const FieldsBlock = (props) => {

    const {onInputBlur, onEnterPress, openFileSelector} = props
    const classes = useStyles();


    const handleAddExperience = () => {
        const values = [...props.experience];
        values.push({place: '', position: '', start: '', end: ''});
        props.setExperience(values);
    };

    const handleRemoveExperience = index => {
        onInputBlur()
        const values = [...props.experience];
        values.splice(index, 1);
        props.setExperience(values);
    };


    const handleExperienceChange = (index, event) => {

        const values = [...props.experience];
        if (event.target.name === "Place") {
            values[index].place = event.target.value;
        }
        if (event.target.name === "Position") {
            values[index].position = event.target.value;
        }
        if (event.target.name === "start") {
            values[index].start = event.target.value;
        }

        if (event.target.name === "end") {
            values[index].end = event.target.value;
        }

        props.setExperience(values);
    };

    const handleAddEducation = () => {
        const values = [...props.education];
        values.push({place: '', degree: '', start: '', end: ''});
        props.setEducation(values);
    };

    const handleRemoveEducation = index => {
        onInputBlur()
        const values = [...props.education];
        values.splice(index, 1);
        props.setEducation(values);
    };

    const handleEducationChange = (index, event) => {

        const values = [...props.education];
        if (event.target.name === "Place") {
            values[index].place = event.target.value;
        }
        if (event.target.name === "Degree") {
            values[index].position = event.target.value;
        }
        if (event.target.name === "start") {
            values[index].start = event.target.value;
        }

        if (event.target.name === "end") {
            values[index].end = event.target.value;
        }

        props.setExperience(values);
    };

    const handleAddSkillGroup = () => {
        const values = [...props.skills];
        values.push({groupName: '', childSkills: []});
        props.setSkills(values);
    };

    const handleRemoveSkillGroup = index => {
        onInputBlur()
        const values = [...props.skills];
        values.splice(index, 1);
        props.setSkills(values);
    };

    const handleSkillGroupChange = (index, event) => {

        const values = [...props.skills];
        if (event.target.name === "GroupName") {
            values[index].groupName = event.target.value;
        }

        props.setSkills(values);
    };

    const handleAddSkill = (index) => {
        const values = [...props.skills]
        values[index].childSkills.push({skillName: ''})
        props.setSkills(values);
    };

    const handleRemoveSkill = (index) => {
        onInputBlur()
        const values = [...props.skills];
        values[index].childSkills.splice(index, 1);
        props.setSkills(values);
    };

    const handleSkillChange = (index, event, parentIndex) => {

        const values = [...props.skills];

        values[parentIndex].childSkills[index].skillName = event.target.value

        props.setSkills(values);
    };


    const handleAddLang = () => {
        const values = [...props.langs];
        values.push({name: '', level: ''});
        props.setLangs(values);
    };

    const handleRemoveLang = index => {
        onInputBlur()
        const values = [...props.langs];
        values.splice(index, 1);
        props.setLangs(values);
    };

    const handleLangsChange = (index, event) => {

        const values = [...props.langs];

        if (event.target.name === "Level") {
            values[index].level = event.target.value;
        } else {
            values[index].name = event.target.value;
        }
        props.setLangs(values);
    };


    return (
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
                        + Browse files
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
                                  field={props.nameField}
                                  onInputBlur={onInputBlur}
                                  onEnterPress={onEnterPress}
                                  margin={1}
                    />

                    <RegularInput label="Surname"
                                  required
                                  field={props.surnameField}
                                  onInputBlur={onInputBlur}
                                  onEnterPress={onEnterPress}
                    />

                </div>
            </PaperWrapper>

            <PaperWrapper>
                <div className="paper-inner">
                    <RegularInput label="Position"
                                  required
                                  field={props.positionField}
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
                                  field={props.emailField}
                                  onInputBlur={onInputBlur}
                                  onEnterPress={onEnterPress}
                                  margin={1}
                    />
                    <RegularInput label="Phone"
                                  required
                                  field={props.phoneField}
                                  onInputBlur={onInputBlur}
                                  onEnterPress={onEnterPress}
                    />
                </div>
            </PaperWrapper>

            <PaperWrapper>
                <div className="paper-inner">
                    <RegularInput label="Skype"
                                  field={props.skypeField}
                                  onInputBlur={onInputBlur}
                                  onEnterPress={onEnterPress}
                                  margin={1}
                    />
                    <RegularInput label="Telegram"
                                  field={props.telegramField}
                                  onInputBlur={onInputBlur}
                                  onEnterPress={onEnterPress}
                    />
                </div>
            </PaperWrapper>

            <PaperWrapper>
                <div className="paper-inner">
                    <RegularInput label="LinkedIn"
                                  field={props.linkedinField}
                                  onInputBlur={onInputBlur}
                                  onEnterPress={onEnterPress}
                                  margin={1}
                    />
                    <RegularInput label="GitHub"
                                  field={props.githubField}
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
                                  field={props.profileField}
                                  required
                                  onInputBlur={onInputBlur}
                                  onEnterPress={onEnterPress}
                                  minRows={4}
                                  maxLenght={500}
                    />
                </div>

                <Typography variant="subtitle1"
                            sx={{textAlign: 'right'}}>
                    {`${props.profileSymbolsLeft}/500`}
                </Typography>
            </PaperWrapper>

            <Typography variant="h5" className={classes.white} fontWeight="fontWeightBold">
                Experience
            </Typography>

            <PaperWrapper>
                <div className="paper-inner pointer" onClick={() => handleAddExperience()}>

                    <Typography className={classes.mainColor} variant="h5" fontWeight="fontWeightBold">
                        + Add an experience
                    </Typography>

                </div>
            </PaperWrapper>


            <ExperienceInput experience={props.experience}
                             onInputBlur={onInputBlur}
                             onEnterPress={onEnterPress}
                             handleInputChange={handleExperienceChange}
                             handleRemoveFields={handleRemoveExperience}
                             firstField="Place"
                             secondField="Position"
            />

            <Typography variant="h5" className={classes.white} fontWeight="fontWeightBold">
                Education
            </Typography>

            <PaperWrapper>
                <div className="paper-inner pointer" onClick={() => handleAddEducation()}>

                    <Typography className={classes.mainColor} variant="h5" fontWeight="fontWeightBold">
                        + Add an education
                    </Typography>

                </div>
            </PaperWrapper>

            <ExperienceInput experience={props.education}
                             onInputBlur={onInputBlur}
                             onEnterPress={onEnterPress}
                             handleInputChange={handleEducationChange}
                             handleRemoveFields={handleRemoveEducation}
                             firstField="Place"
                             secondField="Degree"
            />

            <Typography variant="h5" className={classes.white} fontWeight="fontWeightBold">
                Skills
            </Typography>

            <PaperWrapper>
                <div className="paper-inner pointer" onClick={() => handleAddSkillGroup()}>

                    <Typography className={classes.mainColor} variant="h5" fontWeight="fontWeightBold">
                        + Add a skill or a group of skills
                    </Typography>

                </div>
            </PaperWrapper>

            <SkillsInput skills={props.skills}
                         onInputBlur={onInputBlur}
                         onEnterPress={onEnterPress}
                         handleInputChange={handleSkillGroupChange}
                         handleRemoveSkillGroup={handleRemoveSkillGroup}
                         handleAddChildField={handleAddSkill}
                         handleChildInputChange={handleSkillChange}
                         handleRemoveSkill={handleRemoveSkill}
            />

            <Typography variant="h5" className={classes.white} fontWeight="fontWeightBold">
                Languages
            </Typography>

            <PaperWrapper>
                <div className="paper-inner pointer" onClick={() => handleAddLang()}>

                    <Typography className={classes.mainColor} variant="h5" fontWeight="fontWeightBold">
                        + Add a language
                    </Typography>

                </div>
            </PaperWrapper>

            <LangsInput langs={props.langs}
                        onInputBlur={onInputBlur}
                        onEnterPress={onEnterPress}
                        handleInputChane={handleLangsChange}
                        handleRemoveLang={handleRemoveLang}
            />

        </Container>
    );
};

