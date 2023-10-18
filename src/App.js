import {BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar"
import StartPage from "./pages/StartPage/StartPage";
import GaragePage from "./pages/GaragePage/GaragePage";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#007BFF', // Синій (Primary Color)
      },
      secondary: {
        main: '#CCCCCC', // Сріблястий (Secondary Color)
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
          <Route path="/" element={<Navbar />}>
            <Route index element={<StartPage />} />
            
            <Route path="garage" element={<GaragePage />} />    

            
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
