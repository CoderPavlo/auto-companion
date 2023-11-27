import * as React from "react";
import { CardMedia, Grid, Typography, Button, Card, CardContent, Stack, CardActions } from "@mui/material";
import imageUrl from "./images/home_image.jpg";
import MiniCalendar from '../components/MiniCalendar';
import HomeCard from "./components/HomeCard";

import dayjs from 'dayjs';


import car1 from "../components/images/car1.png"
import car2 from "../components/images/car2.png"
import car3 from "../components/images/car3.png"
import car4 from "../components/images/car4.png"
import car5 from "../components/images/car5.png"

import brake from './images/brake.png'
import engine from './images/engine.png'
import filters from './images/filters.png'
import suspension from './images/suspension.png'

const cars = [
    {
        src: car1,
        title: 'Bmw dsc',
    },
    {
        src: car2,
        title: 'Bmw dsc',
    },
    {
        src: car3,
        title: 'Bmw dsc',
    },
    {
        src: car4,
        title: 'Bmw dsc',
    },
    {
        src: car5,
        title: 'Bmw dsc',
    },
];

const parts = [brake, engine, filters, suspension];

function fakeFetch(date, { signal }) {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            //const currentMonth = date.month();
            //const currentYear = date.year();
            //отримуємо події з бази даних за місяцем
            const events = [
                {
                    day: 25,
                    type: 'oil_change',
                    desk: 'Заміна масла',
                    carImage: car1,
                },

                {
                    day: 25,
                    type: 'belt_change',
                    desk: 'Заміна ременів',
                    carImage: car3,
                },

                {
                    day: 25,
                    type: 'battery_replacement',
                    desk: 'Планова заміна акумулятора',
                    carImage: car5,
                },

                {
                    day: 30,
                    type: 'ac_refill',
                    desk: 'Заправка кондиціонера',
                    carImage: car4,
                },
                {
                    day: 2,
                    type: 'routine_maintenance',
                    desk: 'Планове технічне обслуговування',
                    carImage: car2,
                },
            ];


            resolve({ events });
        }, 500);

        signal.onabort = () => {
            clearTimeout(timeout);
            reject(new DOMException('aborted', 'AbortError'));
        };
    });
}


const HomePage = ({ theme, language }) => {
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
            title: "Доброго дня, Pavlo!",
            body: { formattedDate: getFormattedDate('uk-UA') },
            car: "Мої авто",
            prom: "Акції",
            advice: "Поради",
            cal: "Календар",
            parts: ['Гальма', 'Двигун і частини двигуна', 'Фільтри', 'Кермове управління і підвіска']
        },
        en: {
            title: "Hello, Pavlo!",
            body: { formattedDate: getFormattedDate('en-US') },
            car: "My cars",
            prom: "Promotions",
            advice: "Advice",
            cal: "Calendar",
            parts: ['Brakes', 'Engine & Engine Parts', 'Filters', 'Steering & Suspension'],
        }
    };

    const [calendarValue, setCalendarValue] = React.useState(dayjs());

    const [isLoading, setIsLoading] = React.useState(false);

    const [events, setEvents] = React.useState([]);
    const requestAbortController = React.useRef(null);
    const fetchEvents = (date) => {
        const controller = new AbortController();
        fakeFetch(date, {
            signal: controller.signal,
        })
            .then(({ events }) => {
                setEvents(events);
                setIsLoading(false);
            })
            .catch((error) => {
                if (error.name !== 'AbortError') {
                    throw error;
                }
            });

        requestAbortController.current = controller;
    };


    React.useEffect(() => {
        fetchEvents(calendarValue);
        return () => requestAbortController.current?.abort();
    });



    const handleMonthChange = (date) => {
        if (requestAbortController.current) {
            requestAbortController.current.abort();
        }
        setIsLoading(true);
        setEvents([]);
        fetchEvents(date);
    };


    return (
        <>
            <CardMedia
                component="img"
                alt="Home Image"
                height="300"
                width="100%"
                image={imageUrl}
                style={{ objectFit: 'cover' }}
            />

            <Typography variant="h5" style={{ position: "absolute", top: "100px", left: "100px", color: theme.palette.text.primary }}>
                {content[language].title}
            </Typography>
            <Typography variant="body1" style={{ position: "absolute", top: "135px", left: "100px", color: theme.palette.text.primary }}>
                {content[language].body.formattedDate}
            </Typography>

            <Grid container spacing={4} marginTop={-12} paddingLeft={{ xs: 1, md: 3 }} paddingRight={{ xs: 1, md: 3 }}>
                <Grid item sx={{ width: { xs: '100%', md: 'calc(100% - 450px)' } }}>
                    <HomeCard theme={theme} title={content[language].car} navigateTo={'garage'}>
                        <Stack direction="row" spacing={2}>
                            {cars.map((car, index) => (
                                <Card key={index} sx={{ background: theme.palette.background.default, width: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

                                    <CardMedia
                                        image={car.src}
                                        title={car.title}
                                        component="img"
                                        width="100%"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" style={{ color: theme.palette.text.primary, textAlign: 'center' }}>
                                            {car.title}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Stack>
                    </HomeCard>

                    
                    <HomeCard theme={theme} title={content[language].prom} navigateTo={'promotion'} marginTop={10}>
                    <Stack direction="row" spacing={2}>
                            {parts.map((part, index) => (
                                <Card key={index} sx={{ background: theme.palette.background.default, width: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

                                    <CardMedia
                                        image={part}
                                        title={content[language].parts[index]}
                                        component="img"
                                        width="100%"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" style={{ color: theme.palette.text.primary, textAlign: 'center' }}>
                                            {content[language].parts[index]}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Stack>
                    </HomeCard>
                </Grid>

                <Grid item sx={{ width: { xs: '100%', md: '450px', display: 'flex', flexDirection: 'column', justifyContent:'center'} }}>
                    <HomeCard theme={theme} title={content[language].cal} navigateTo={'calendar'}>
                        <MiniCalendar theme={theme} language={language} value={calendarValue} setValue={setCalendarValue}
                            handleMonthChange={handleMonthChange} highlightedDays={events} isLoading={isLoading} size='large' />
                    </HomeCard>
                </Grid>

            </Grid>

        </>
    );
}

export default HomePage;
