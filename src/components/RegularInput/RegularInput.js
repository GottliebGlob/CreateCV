import {TextField, Typography} from "@mui/material";


export const RegularInput = (props) => {

    return (
        <>
            <Typography variant="h6" display="inline-block" sx={{
                paddingTop: '10px',
                paddingRight: '10px',
            }}>
                {`${props.label}:`}
            </Typography>

            <TextField
                label={props.label}
                required={props.required}
                {...props.field}
                fullWidth
                onBlur={() => props.onInputBlur()}
                onKeyDown={(e) => props.onEnterPress(e)}
                sx={{marginRight: props.margin}}
            />
        </>
    )
}