import * as React from "react";
import { CardMedia, Grid, Typography, Button } from "@mui/material";
import imageUrl from "./image/home_image.jpg";
import MiniCalendar from '../components/MiniCalendar';
import { useNavigate } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const borderStyle = {
  border: '1px solid black',
  borderRadius: '15px',
  padding: '10px',
  width:'650px',
  height:'450px',
};

const HomePage = ({ theme, language }) => {
    const navigate = useNavigate()
    const currentDate = new Date();
    const getFormattedDate = (locale) => {
        return currentDate.toLocaleDateString(locale, {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      };
   
    const content = {
        uk: {
            title: "Доброго дня, Павло!",
            body: {formattedDate: getFormattedDate('uk-UA') },
            car:"Мої авто", 
            Prom:"Акції", 
            advice: "Поради",
            cal:"Календар",
        },
        en: {
            title: "Hello, Pavlo!",
            body: {formattedDate: getFormattedDate('en-US') },
            car:"My cars", 
            Prom: "Promotions", 
            advice:"Advice",
            cal: "Calendar",
        }
    };
    return (
    <div style={{ marginTop: '10px' }}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                <div >
                    <CardMedia
                    component="img"
                    alt="Home Image"
                    height="300"
                    width="100%"
                    image={imageUrl}
                    style={{ objectFit: 'cover' }}
                    />

                    <Typography theme={theme} language={language} variant="h5" style={{ position: "absolute", top: "100px", left: "100px", color: "white" }}>
                        {content[language].title}
                    </Typography>
                    <Typography theme={theme} language={language} variant="body1" style={{ position: "absolute", top: "135px", left: "100px", color: "white" }}>
                        {content[language].body.formattedDate}
                    </Typography>
                </div>
            </Grid>

            <Grid container spacing={2} marginTop={-12}>
                <Grid item xs={12} md={6}  style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }} onClick={() => navigate('/garage')}>
                    <div style={{ ...borderStyle, backgroundColor: "#333333"}}>
                        <Button style={{ color: 'white' }}>{content[language].car}<NavigateNextIcon /></Button>
                    </div>
                </Grid>

                <Grid item xs={12} md={6}  style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }} onClick={() => navigate('/calendar')}>
                    <div style={{ ...borderStyle, backgroundColor: "#333333"}}>
                        <Button style={{ color: 'white' }}>{content[language].cal}<NavigateNextIcon /></Button>
                        <MiniCalendar theme={theme} language={language} />
                    </div>
                </Grid>

                <Grid item xs={12} md={6}  style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }} onClick={() => navigate('/promotions')}>
                    <div style={{ ...borderStyle, backgroundColor: "#333333"}}>
                        <Button style={{ color: 'white' }}>{content[language].Prom}<NavigateNextIcon /></Button>
                    </div>
                </Grid>

                <Grid item xs={12} md={6}  style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }} onClick={() => navigate('')}>
                    <div style={{ ...borderStyle, backgroundColor: "#333333"}}>
                        <Button style={{ color: 'white' }}>{content[language].advice}<NavigateNextIcon /></Button>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    </div>
  );
}

export default HomePage;
