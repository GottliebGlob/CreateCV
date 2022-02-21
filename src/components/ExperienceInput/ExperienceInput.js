import React, {Fragment} from 'react';
import {TextField, Typography} from "@mui/material";
import PaperWrapper from "../PaperWrapper";
import {makeStyles} from "@mui/styles";

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

export const ExperienceInput = ({
                                    experience,
                                    handleInputChange,
                                    onEnterPress,
                                    onInputBlur,
                                    handleRemoveFields,
                                    firstField,
                                    secondField
                                }) => {
    const classes = useStyles();

    let mobileMarker = window.innerWidth<=768

    return (
        <>
            {experience.map((inputField, index) => (
                <Fragment key={`${inputField}~${index}`}>
                    <PaperWrapper>

                        <Typography className={classes.mainColor} variant="h5"
                                    sx={{marginBottom: 1, textAlign: 'center'}} fontWeight="fontWeightBold">
                            Where
                        </Typography>

                        <div className="paper-inner">
                            <Typography variant="h6" display="inline-block" sx={{
                                paddingTop: mobileMarker ? '5px' : '10px',
                                paddingRight: mobileMarker ? '5px' : '10px',
                            }}>
                                Place
                            </Typography>

                            <TextField
                                size={mobileMarker ? 'small' : 'normal'}
                                label={firstField}
                                name={firstField}
                                required={true}
                                value={experience.position}
                                onChange={event => handleInputChange(index, event)}
                                inputProps={{
                                    maxLength: 50
                                }}
                                sx={{marginRight: 1}}
                                fullWidth
                                onBlur={() => onInputBlur()}
                                onKeyDown={(e) => onEnterPress(e)}
                            />

                            <Typography variant="h6" display="inline-block" sx={{
                                paddingTop: mobileMarker ? '5px' : '10px',
                                paddingRight: mobileMarker ? '5px' : '10px',
                            }}>
                                Position
                            </Typography>

                            <TextField
                                size={mobileMarker ? 'small' : 'normal'}
                                label={secondField}
                                name={secondField}
                                required={true}
                                value={experience.position}
                                onChange={event => handleInputChange(index, event)}
                                inputProps={{
                                    maxLength: 50
                                }}
                                fullWidth
                                onBlur={() => onInputBlur()}
                                onKeyDown={(e) => onEnterPress(e)}
                            />

                        </div>

                        <Typography className={classes.mainColor} variant="h5"
                                    sx={{marginBottom: 1, marginTop: 1, textAlign: 'center'}}
                                    fontWeight="fontWeightBold">
                            When
                        </Typography>

                        <div className="paper-inner">
                            <Typography variant="h6" display="inline-block" sx={{
                                paddingTop: mobileMarker ? '5px' : '10px',
                                paddingRight: mobileMarker ? '5px' : '10px',
                            }}>
                                Start
                            </Typography>

                            <TextField
                                size={mobileMarker ? 'small' : 'normal'}
                                label="Start"
                                name="start"
                                required={true}
                                value={experience.position}
                                onChange={event => handleInputChange(index, event)}
                                inputProps={{
                                    maxLength: 50
                                }}
                                sx={{marginRight: 1}}
                                fullWidth
                                onBlur={() => onInputBlur()}
                                onKeyDown={(e) => onEnterPress(e)}
                            />

                            <Typography variant="h6" display="inline-block" sx={{
                                paddingTop: mobileMarker ? '5px' : '10px',
                                paddingRight: mobileMarker ? '5px' : '10px',
                            }}>
                                End
                            </Typography>

                            <TextField
                                size={mobileMarker ? 'small' : 'normal'}
                                label="End"
                                name="end"
                                value={experience.position}
                                onChange={event => handleInputChange(index, event)}
                                inputProps={{
                                    maxLength: 50
                                }}
                                fullWidth
                                onBlur={() => onInputBlur()}
                                onKeyDown={(e) => onEnterPress(e)}
                            />

                        </div>


                        <div className="paper-inner pointer" style={{width: '7%', marginLeft: mobileMarker ? '85%' : '93%'}}
                             onClick={() => handleRemoveFields(index)}>
                            <Typography variant="subtitle1" className={classes.secColor}
                                        sx={{textAlign: 'right'}}>
                                remove
                            </Typography>
                        </div>


                    </PaperWrapper>
                </Fragment>
            ))}
        </>
    );
};

