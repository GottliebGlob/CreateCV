import React from 'react';
import {Typography} from "@mui/material";
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

export const ExperienceInput = ({onInputBlur, onEnterPress, placeField, positionField, periodField}) => {
    const classes = useStyles();

    return (
      <>
          <Typography variant="h5" className={classes.white} fontWeight="fontWeightBold">
              Contacts
          </Typography>

          <PaperWrapper>
              <div className="paper-inner">
                  <RegularInput label="Email"
                                required
                                field={placeField}
                                onInputBlur={onInputBlur}
                                onEnterPress={onEnterPress}
                                margin={1}
                  />
                  <RegularInput label="Phone"
                                required
                                field={positionField}
                                onInputBlur={onInputBlur}
                                onEnterPress={onEnterPress}
                  />
              </div>
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
      </>
    );
};

