import React, {Fragment} from 'react';
import {TextField, Typography} from "@mui/material";
import PaperWrapper from "../PaperWrapper";
import RegularInput from "../RegularInput";
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
                                    secondField }) => {
    const classes = useStyles();

    return (
      <>
          {experience.map((inputField, index) => (
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
                              paddingTop: '10px',
                              paddingRight: '10px',
                          }}>
                              Position
                          </Typography>

                          <TextField
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
                              paddingTop: '10px',
                              paddingRight: '10px',
                          }}>
                              End
                          </Typography>

                          <TextField
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


                      <div className="paper-inner pointer" style={{width: '7%', marginLeft: '93%'}}
                           onClick={() => handleRemoveFields(index)}>
                          <Typography variant="subtitle1" className={classes.secColor}
                                      sx={{textAlign: 'right'}} >
                              remove
                          </Typography>
                      </div>


                  </PaperWrapper>
              </Fragment>
          ))}
      </>
    );
};

