import React, {Fragment} from 'react';
import {Button, TextField, Typography, InputLabel, Select, MenuItem} from "@mui/material";
import PaperWrapper from "../PaperWrapper";


export const LangsInput = ({onInputBlur, onEnterPress, handleInputChane, handleRemoveLang, langs}) => {
    let mobileMarker = window.innerWidth<=768

    return (
        <>
            {langs.map((inputField, index) => (
                <Fragment key={`${inputField}~${index}`}>
                    <PaperWrapper>

                        <div className="paper-inner distance">
                            <Typography variant="h6" display="inline-block" sx={{
                                paddingTop: mobileMarker ? '5px' : '10px',
                                paddingRight: mobileMarker ? '5px' : '10px',
                            }}>
                                {`№${index + 1}:`}
                            </Typography>

                            <TextField
                                label="Name of the language"
                                name="LangName"
                                size={mobileMarker ? 'small' : 'normal'}
                                required={true}
                                value={inputField.skillName}
                                onChange={event => handleInputChane(index, event)}
                                inputProps={{
                                    maxLength: 50,
                                }}
                                sx={{paddingRight: 1}}
                                fullWidth
                                onBlur={() => onInputBlur()}
                                onKeyDown={(e) => onEnterPress(e)}
                            />

                            <Typography variant="h6" display="inline-block" sx={{
                                paddingTop: mobileMarker ? '5px' : '10px',
                                paddingRight: mobileMarker ? '5px' : '10px',
                            }}>
                                Level:
                            </Typography>

                            <Select
                                value={inputField.skillName}
                                onChange={event => handleInputChane(index, event)}
                                size={mobileMarker ? 'small' : 'normal'}
                                label="Level of the language"
                                name="Level"
                                fullWidth
                                onBlur={() => onInputBlur()}
                            >
                                <MenuItem value={'A1'}>Beginner</MenuItem>
                                <MenuItem value={'A2'}>Elementary</MenuItem>
                                <MenuItem value={'B1'}>Intermediate</MenuItem>
                                <MenuItem value={'B2'}>Upper-Intermediate</MenuItem>
                                <MenuItem value={'C1'}>Advanced</MenuItem>
                                <MenuItem value={'C2'}>Proficiency</MenuItem>
                            </Select>

                            <div style={{width: '2rem'}}></div>

                            <Button variant="outlined"
                                    sx={{
                                        height: mobileMarker ? 40 : 55,
                                        width: 150,

                                    }}
                                    size={mobileMarker ? 'small' : 'medium'}
                                    onClick={() => handleRemoveLang(index)} color="error">remove</Button>
                        </div>
                    </PaperWrapper>
                </Fragment>
            ))}
        </>
    );
};
