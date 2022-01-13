import React from 'react';
import {makeStyles} from "@mui/styles";
import {Container, Typography} from "@mui/material";
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




        </Container>
    );
};

