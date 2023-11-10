import React from 'react'
import {BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar"
import StartPage from "./pages/StartPage/StartPage";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useLanguage } from './context/LanguageContext';

import GaragePage from "./pages/GaragePage/GaragePage";
import SignIn from "./pages/SignIn/SignIn";
function App() {

  
  const { language, setLanguage } = useLanguage();

  const [logged, setLogged] = React.useState(false);
  const theme = createTheme({
    palette: {
      primary: {
        main: '#007BFF', // Синій (Primary Color)
      },
      secondary: {
        main: '#959595', // Сріблястий (Secondary Color)
      },
      background: {
        default: '#333333', // Темно-сірий (Background Color)
      },
      error: {
        main: '#FF5733', // Червоний (Accent Color)
      },
      success: {
        main: '#28A745', // Зелений (Positive Action Color)
      },
      warning: {
        main: '#FFC107', // Помаранчевий (Warning Color)
      },
      text: {
        primary: '#FFFFFF', // Білий (Text Color)
      },
      common: {
        white: '#FFFFFF', // Білий (Background Color)
      },
    },
  });

  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar logged={logged}/>}>
            <Route index element={<StartPage />} />
            
            <Route path="garage" element={<GaragePage />} />    
            <Route path="calendar" element={<div />} />  
            <Route path="bugs" element={<div />} />  
            <Route path="promotions" element={<div />} />  
            
          </Route>
          
          <Route path="/signIn" element={<SignIn theme={theme} language={language} setLogged={setLogged}/>} />  
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
