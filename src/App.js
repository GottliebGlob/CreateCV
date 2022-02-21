import './App.css';
import {useEffect, useState} from "react";
import MainPage from "./mainPage";
import {ThemeProvider} from "@mui/material";
import blueTheme from './blueTheme'
import blackTheme from './blackTheme'


function App() {
    const [colorModalVisible, setColorModalVisible] = useState(true)
    const [colorTheme, setColorTheme] = useState('blue')
    const mainTheme = colorTheme === 'blue' ? blueTheme : blackTheme


    return (
        <ThemeProvider theme={mainTheme}>
        <div className="App">
         <MainPage />
        </div>
        </ThemeProvider>
    );
}

export default App;
