import './SkillsInput.css'
import React, {Fragment} from 'react';
import {TextField, Typography, Button} from "@mui/material";
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

export const SkillsInput = ({
                                skills,
                                handleInputChange,
                                handleChildInputChange,
                                handleAddChildField,
                                onEnterPress,
                                onInputBlur,
                                handleRemoveSkillGroup,
                                handleRemoveSkill
                            }) => {
    const classes = useStyles();

    let mobileMarker = window.innerWidth<=768


    return (
        <>
            {skills.map((parentField, parentIndex) => (
                <Fragment key={`${parentField}~${parentIndex}`}>

                    <Typography className={classes.white} sx={{textAlign: 'center'}} variant="h6"
                                fontWeight="fontWeightBold">
                        • {parentField.groupName.length ? parentField.groupName : `Skill group №${parentIndex + 1}`}
                    </Typography>

                    <PaperWrapper>
                        <div className="paper-inner">

                            <Typography variant="h6" display="inline-block" sx={{
                                paddingTop: mobileMarker ? '5px' : '10px',
                                paddingRight: mobileMarker ? '5px' : '10px',
                            }}>
                                Skill:
                            </Typography>

                            <TextField
                                label="Skill or a group of skills"
                                name="GroupName"
                                required={true}
                                size={mobileMarker ? 'small' : 'normal'}
                                value={parentField.groupName}
                                onChange={event => handleInputChange(parentIndex, event)}
                                inputProps={{
                                    maxLength: 50
                                }}
                                sx={{marginRight: 1}}
                                fullWidth
                                onBlur={() => onInputBlur()}
                                onKeyDown={(e) => onEnterPress(e)}
                            />

                            <Button variant="outlined"
                                    size={mobileMarker ? 'small' : 'medium'}
                                    onClick={() => handleAddChildField(parentIndex)}>ADD</Button>

                        </div>

                        {parentField.childSkills.map((inputField, index) => (
                            <Fragment key={`${inputField}~${index}`}>


                                <div className="paper-inner distance">
                                    <Typography variant="h6" display="inline-block" sx={{
                                        paddingTop: mobileMarker ? '5px' : '10px',
                                        paddingRight: mobileMarker ? '5px' : '10px',
                                    }}>
                                        {`№${index + 1}:`}
                                    </Typography>

                                    <TextField
                                        label="Name of the skill"
                                        name="SkillName"
                                        size={mobileMarker ? 'small' : 'normal'}
                                        required={true}
                                        value={inputField.skillName}
                                        onChange={event => handleChildInputChange(index, event, parentIndex)}
                                        inputProps={{
                                            maxLength: 50,
                                        }}
                                        sx={{paddingRight: 1}}
                                        fullWidth
                                        onBlur={() => onInputBlur()}
                                        onKeyDown={(e) => onEnterPress(e)}
                                    />

                                    <Button variant="outlined"
                                            sx={{height: 55}}
                                            onClick={() => handleRemoveSkill(index)} color="error">remove</Button>

                                </div>

                            </Fragment>
                        ))}

                        <div className="paper-inner pointer" style={{width: '7%', marginLeft: mobileMarker ? '85%' : '93%'}}
                             onClick={() => handleRemoveSkillGroup(parentIndex)}>
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

