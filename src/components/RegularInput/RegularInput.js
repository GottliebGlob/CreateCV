import {TextField, Typography} from "@mui/material";


export const RegularInput = (props) => {
    let mobileMarker = window.innerWidth<=768

    return (
        <>
            <Typography variant="h6" display="inline-block" sx={{
                paddingTop: mobileMarker ? '5px' : '10px',
                paddingRight: mobileMarker ? '5px' : '10px',
            }}>
                {`${props.label}:`}
            </Typography>

            <TextField
                size={mobileMarker ? 'small' : 'normal'}
                label={props.label}
                required={props.required}
                {...props.field}
                inputProps={{
                    maxLength: props.maxLength
                }}
                fullWidth
                onBlur={() => props.onInputBlur()}
                onKeyDown={(e) => props.onEnterPress(e)}
                sx={{marginRight: props.margin, ...props.styles}}
                multiline={!!props.minRows}
                minRows={props.minRows}
            />
        </>
    )
}
