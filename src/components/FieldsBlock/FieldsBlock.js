import React, {Fragment} from 'react';
import {makeStyles} from "@mui/styles";
import {Container, TextField, Typography} from "@mui/material";
import PaperWrapper from "../PaperWrapper";
import RegularInput from "../RegularInput";

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


    const handleAddFields = () => {
        const values = [...props.experience];
        values.push({ place: '', position: '', start: '', end: '' });
        props.setExperience(values);
    };

    const handleRemoveFields = index => {
        const values = [...props.experience];
        values.splice(index, 1);
        props.setExperience(values);
    };


    const handleInputChange = (index, event) => {
        console.log(index + " " + event.target.value)
        const values = [...props.experience];
        if (event.target.name === "place") {
            values[index].place = event.target.value;
        }
        if (event.target.name === "position") {
            values[index].position = event.target.value;
            console.log('!!!!')
        }
        if (event.target.name === "start") {
            values[index].start = event.target.value;
        }

        if (event.target.name === "end") {
            values[index].end = event.target.value;
        }

        props.setExperience(values);
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
                            sx={{textAlign: 'right'}} >
                    {`${props.profileSymbolsLeft}/500`}
                </Typography>
            </PaperWrapper>

            <Typography variant="h5" className={classes.white} fontWeight="fontWeightBold">
                Experience
            </Typography>

            <PaperWrapper>
                <div className="paper-inner pointer" onClick={() => handleAddFields()}>

                    <Typography className={classes.mainColor} variant="h5" fontWeight="fontWeightBold">
                        + Add a position
                    </Typography>

                </div>
            </PaperWrapper>


            {props.experience.map((inputField, index) => (
                <Fragment key={`${inputField}~${index}`}>
                <PaperWrapper>

                    <Typography className={classes.mainColor} variant="h5" sx={{marginBottom: 1, textAlign: 'center'}} fontWeight="fontWeightBold">
                        Where
                    </Typography>

                    <div className="paper-inner">
                    <Typography variant="h6" display="inline-block" sx={{
                        paddingTop: '10px',
                        paddingRight: '10px',
                    }}>
                        Place
                    </Typography>

                    <TextField
                        label="Place"
                        name="place"
                        required={true}
                        value={props.experience.position}
                        onChange={event => handleInputChange(index, event)}
                        inputProps={{
                            maxLength: 50
                        }}
                        sx={{marginRight: 1}}
                        fullWidth
                        onBlur={() => props.onInputBlur()}
                        onKeyDown={(e) => props.onEnterPress(e)}
                    />

                        <Typography variant="h6" display="inline-block" sx={{
                            paddingTop: '10px',
                            paddingRight: '10px',
                        }}>
                            Position
                        </Typography>

                        <TextField
                            label="Position"
                            name="position"
                            required={true}
                            value={props.experience.position}
                            onChange={event => handleInputChange(index, event)}
                            inputProps={{
                                maxLength: 50
                            }}
                            fullWidth
                            onBlur={() => props.onInputBlur()}
                            onKeyDown={(e) => props.onEnterPress(e)}
                        />

                    </div>

                    <Typography className={classes.mainColor} variant="h5" sx={{marginBottom: 1, marginTop: 1, textAlign: 'center'}} fontWeight="fontWeightBold">
                       When
                    </Typography>

                    <div className="paper-inner">
                        <Typography variant="h6" display="inline-block" sx={{
                            paddingTop: '10px',
                            paddingRight: '10px',
                        }}>
                            Start
                        </Typography>

                        <TextField
                            label="Start"
                            name="start"
                            required={true}
                            value={props.experience.position}
                            onChange={event => handleInputChange(index, event)}
                            inputProps={{
                                maxLength: 50
                            }}
                            sx={{marginRight: 1}}
                            fullWidth
                            onBlur={() => props.onInputBlur()}
                            onKeyDown={(e) => props.onEnterPress(e)}
                        />

                        <Typography variant="h6" display="inline-block" sx={{
                            paddingTop: '10px',
                            paddingRight: '10px',
                        }}>
                            End
                        </Typography>

                        <TextField
                            label="End"
                            name="end"
                            value={props.experience.position}
                            onChange={event => handleInputChange(index, event)}
                            inputProps={{
                                maxLength: 50
                            }}
                            fullWidth
                            onBlur={() => props.onInputBlur()}
                            onKeyDown={(e) => props.onEnterPress(e)}
                        />

                    </div>


                    <div className="paper-inner pointer" style={{width: '7%', marginLeft: '93%'}} onClick={() => handleRemoveFields(index)}>
                        <Typography variant="subtitle1" className={classes.secColor}
                                    sx={{textAlign: 'right'}} >
                           remove
                        </Typography>
                    </div>


                </PaperWrapper>
                </Fragment>
            ))}


        </Container>
    );
};

