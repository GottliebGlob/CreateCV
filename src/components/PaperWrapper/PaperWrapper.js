import {styled} from '@mui/system';
import {Paper} from "@mui/material"


let mobileMarker = window.innerWidth<=768

export const PaperWrapper = styled(Paper)({
    paddingTop: mobileMarker ? 5 : 10,
    paddingBottom: mobileMarker ? 5 : 10,
    paddingLeft: mobileMarker ? 10 : 15,
    paddingRight: mobileMarker ? 10 : 15,
    marginBottom: mobileMarker ? '1rem' : '2rem',
    marginTop: mobileMarker ? '0.5rem' : '1rem'
})

