import {createTheme, responsiveFontSizes} from "@mui/material";


let blueTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 480,
            md: 768,
            lg: 1024,
            xl: 1200,
        },
    },
    palette: {
        primary: {
            main: '#022E51',
        },
        secondary: {
            main: '#B74803',
        },
    },
})

blueTheme = responsiveFontSizes(blueTheme)



export default blueTheme