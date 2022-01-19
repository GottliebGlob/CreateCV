import React, {Fragment} from 'react';
import {Button, TextField, Typography} from "@mui/material";
import PaperWrapper from "../PaperWrapper";


export const LangsInput = ({onInputBlur, onEnterPress, handleInputChane, handleRemoveLang, langs}) => {

    return (
        <>
            {langs.map((inputField, index) => (
                <Fragment key={`${inputField}~${index}`}>
                    <PaperWrapper>

                        <div className="paper-inner distance">
                            <Typography variant="h6" display="inline-block" sx={{
                                paddingTop: '10px',
                                paddingRight: '10px',
                            }}>
                                {`№${index + 1}:`}
                            </Typography>

                            <TextField
                                label="Name of the language"
                                name="LangName"
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
                                paddingTop: '10px',
                                paddingRight: '10px',
                            }}>
                                Level:
                            </Typography>

                            <TextField
                                label="Level of the language"
                                name="Level"
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

                            <Button variant="outlined"
                                    sx={{
                                        height: 55,
                                        width: 150
                                    }}
                                    onClick={() => handleRemoveLang(index)} color="error">remove</Button>
                        </div>
                    </PaperWrapper>
                </Fragment>
            ))}
        </>
    );
};
