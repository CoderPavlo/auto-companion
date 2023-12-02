import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar"
import StartPage from "./pages/StartPage/StartPage";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useLanguage } from './context/LanguageContext';

import GaragePage from "./pages/GaragePage/GaragePage";
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import CalendarPage from './pages/CalendarPage/CalendarPage';
import HomePage from './pages/HomePage/HomePage';
import VinPage from './pages/VinPage/VinPage';
import BugsPage from './pages/BugsPage/BugsPage';
import UserProfile from './pages/UserProfile/UserProfile';
import HistoryPage from './pages/HistoryPage/HistoryPage';

import { IsLogged } from './helpers/axios_helper';

import car from './pages/components/images/car.png'
import PricingPage from './pages/PricingPage/PricingPage';
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
            <Route index element={IsLogged() ? <HomePage theme={theme} language={language}/> : <StartPage />} />
            
            <Route path="garage" element={<GaragePage theme={theme} language={language}/>} />    
            <Route path="calendar" element={<CalendarPage theme={theme} language={language}/>} />  
            <Route path="bugs" element={<BugsPage theme={theme} language={language}/>} />  
            <Route path="profile" element={<UserProfile />} />  

            <Route path="home" element={<HomePage theme={theme} language={language}/>} />

            <Route path="vehicle/:vin" element={<VinPage theme={theme} language={language} IsInGarage={false}/>}/>
            <Route path="garage/:vin" element={<VinPage theme={theme} language={language} IsInGarage={true}/>}/>
            <Route path="history" element={<HistoryPage theme={theme} language={language} car={car} vin='ZPBUA1ZL9KLA00848' make='Lamborghini' model='Urus'/>}/>
            <Route path="pricing" element={<PricingPage />}/>
          </Route>
          
          <Route path="/signIn" element={<SignInPage theme={theme} language={language} setLogged={setLogged}/>} />  
          <Route path="/signUp" element={<SignUpPage theme={theme} language={language} setLogged={setLogged}/>} />  
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
