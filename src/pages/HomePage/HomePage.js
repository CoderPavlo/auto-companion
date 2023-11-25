import * as React from "react";
import { CardMedia, Grid, Typography, Button, Card,CardContent, Container} from "@mui/material";
import imageUrl from "./image/home_image.jpg";
import MiniCalendar from '../components/MiniCalendar';
import { useNavigate } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

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

    const cardContentStyle = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    };

    const borderStyle = {
        boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.75)',
        borderRadius: '15px',
        padding: '10px',
        width:'500px',
        height:'450px',
    };
    
    const BorderL={
        boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.75)',
        borderRadius: '15px',
        padding: '10px',
        width:'700px',
        height:'450px',
    }
   
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
    <Card >
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
            <Container maxWidth="100%"
                    sx={{
                        background: theme.palette.background.default,
                    }}>
                <Grid container spacing={2} marginTop={-12} marginLeft={10}  >
                    <Grid item xs={12} md={6}  sx={cardContentStyle} onClick={() => navigate('/garage')}>
                        <CardContent>
                            <div style={{ ...BorderL, backgroundColor: "#333333"}}>
                                <Button style={{ color: 'white' }}>{content[language].car}<NavigateNextIcon /></Button>
                            </div>
                        </CardContent>
                    </Grid>

                    <Grid item xs={12} md={6}  sx={cardContentStyle} onClick={() => navigate('/calendar')}>
                        <CardContent>
                            <div style={{ ...borderStyle, backgroundColor: "#333333"}}>
                                <Button style={{ color: 'white' }}>{content[language].cal}<NavigateNextIcon /></Button>
                                <MiniCalendar theme={theme} language={language}  />
                            </div>
                        </CardContent>
                    </Grid>

                    <Grid item xs={12} md={6}  sx={cardContentStyle} onClick={() => navigate('/promotions')}>
                        <CardContent>
                            <div style={{ ...BorderL, backgroundColor: "#333333"}}>
                                <Button style={{ color: 'white' }}>{content[language].Prom}<NavigateNextIcon /></Button>
                            </div>
                        </CardContent>
                    </Grid>

                    <Grid item xs={12} md={6}  sx={cardContentStyle} onClick={() => navigate('')}>
                        <CardContent>
                            <div style={{ ...borderStyle, backgroundColor: "#333333"}}>
                                <Button style={{ color: 'white' }}>{content[language].advice}<NavigateNextIcon /></Button>
                            </div>
                        </CardContent>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
        </Card>
    </div>
    
  );
}

export default HomePage;
