import React from 'react'
import image from './images/display.jpeg'
import { infoBugs } from './infoBugs';
import { serviceBugs } from './ServiceBugs';
import { emergencyBugs } from './EmergencyBugs';
import {
    Typography, Grid,
    Tabs, Tab,
    SvgIcon,
    Button,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
} from '@mui/material';


import { styled } from '@mui/material/styles';

import { eventTypes } from '../components/eventTypes'

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import car1 from "../components/images/car1.png"
import car2 from "../components/images/car2.png"
import car3 from "../components/images/car3.png"
import car4 from "../components/images/car4.png"
import car5 from "../components/images/car5.png"



import car from "../components/images/car.png"
import audi from "../components/images/audi-a3.png"
import audiq8 from "../components/images/audi_q8.png"
import bmwx5 from "../components/images/bmw_x5.png"
import mersedes_s from "../components/images/mercedes_s.png"
import volvo_xc90 from "../components/images/volvo_xc90.png"

import en from 'dayjs/locale/en-gb';
import uk from 'dayjs/locale/uk';
import dayjs from 'dayjs';


const content = {
    uk: {
        title: 'Групи піктограм',
        groups: ['Червоні', 'Помаранчеві', 'Зелені'],
        groupsText: [
            'Зазвичай сигналізують про критичні ситуації та забороняють водієві використовувати машину в поточному режимі. Наприклад, лампочка Check Engine говорить про те, що з мотором щось не так та потрібно якомога швидше дістатися до СТО. Також червоні світлодіоди можуть сигналізувати про те, що двері не повністю прикриті, що водій або пасажир не пристебнутий та ін.',
            'Це попереджувальні лампи. Найчастіше показують рекомендації або сповіщають, що виявлені неполадки в допоміжних системах. Використовувати транспортний засіб в цьому випадку допускається, але все ж рекомендується враховувати сигнал та вжити відповідних заходів. Наприклад, помаранчеві піктограми можуть показувати, що габаритна лампочка перегоріла, що в омивачі мало рідини або не працює датчик освітленості.',
            'Найчастіше повідомляють про те, що якась система нормально функціонує. Наприклад, що включений кондиціонер або клімат-контроль. Це інформаційна група, яка просто видає потрібну інформацію. Відзначимо, що в ній можуть бути й інші кольори. Наприклад, дальнє світло більшості транспортних засобів представлене у вигляді синьої піктограми.',
        ],
        event: 'Подія',
        car: 'Авто',
        date: 'Дата',
        desk: 'Опис',
        shedule: 'Запланувати',
    },
    en: {
        title: 'Icon Groups',
         groups: ['Red', 'Orange', 'Green'],
         groupsText: [
             'They usually signal critical situations and forbid the driver to use the car in the current mode. For example, the Check Engine light indicates that something is wrong with the engine and you need to get to the service station as soon as possible. Also, red LEDs can signal that the door is not completely closed, that the driver or passenger is not wearing a seat belt, etc.',
             'These are warning lights. Most often, they show recommendations or notify that problems have been detected in auxiliary systems. It is allowed to use a vehicle in this case, but it is still recommended to take into account the signal and take appropriate measures. For example, orange icons can show that the marker light has burned out, that there is little liquid in the washer, or that the light sensor is not working.',
             'Most often they report that some system is functioning normally. For example, that the air conditioner or climate control is turned on. This is an information group that simply gives out the information you need. Note that it may contain other colors. For example, the main beam of most vehicles is represented by a blue icon.',
         ],
         event: 'Event',
         car: 'Car',
         date: 'Date',
         desk: 'Description',
         schedule: 'Schedule',
    }
}



const cars = [
    {
        id: 1,
        image: car,
        name: 'Lamborgini Urus',
    },
    {
        id: 2,
        image: audiq8,
        name: 'Audi Q8',
    },
    {
        id: 3,
        image: bmwx5,
        name: 'Bmw X5',
    },
    {
        id: 4,
        image: mersedes_s,
        name: 'Mersedes S-class',
    },
    {
        id: 5,
        image: volvo_xc90,
        name: 'Volvo XC90',
    },
    {
        id: 6,
        image: audi,
        name: 'Audi A3',
    },
]
const bugs = [emergencyBugs, serviceBugs, infoBugs];

const BugsPage = ({ theme, language }) => {
    const colors = [theme.palette.error.main, theme.palette.warning.main, theme.palette.success.main];

    const [value, setValue] = React.useState(0);

    function a11yProps(index) {
        return {
            id: `tab-${index}`,
            "aria-controls": `tabpanel-${index}`,
        };
    }
    function a11yPropsBug(index) {
        return {
            id: `tabBug-${index}`,
            "aria-controls": `tabpanelBug-${index}`,
        };
    }
    const [selectedBug, setSelectedBug] = React.useState(0);

    const event = 9;
    const [eventCar, setEventCar] = React.useState();
    const [eventDate, setEventDate] = React.useState(dayjs());
    const [eventDesk, setEventDesk] = React.useState();
    const [disabledEvent, setDisabledEvent] = React.useState(false);


    React.useEffect(() => {
        if (value !== 2 && bugs[value][selectedBug].isNeedsServiced)
            setDisabledEvent(false);
        else
            setDisabledEvent(true);
    }, [value, selectedBug]);

    
const StyledSelect = styled(Select)(({ theme }) => ({
    '& .MuiInputBase-input':
    {
        color: theme.palette.text.main,
    },
    '& fieldset': {
        borderColor: theme.palette.secondary.main,
    },
    
    '& .MuiSelect-icon': {
        color: disabledEvent ? 'rgba(0, 0, 0, 0.38)' : theme.palette.secondary.main,
    },
    '& .Mui-disabled': {
        color: disabledEvent ? 'rgba(0, 0, 0, 0.38)' : theme.palette.secondary.main,
        WebkitTextFillColor:  disabledEvent ? 'rgba(0, 0, 0, 0.38)' : `${theme.palette.secondary.main} !important`,
    }
}));

    return (
        <Grid container>
            <Grid item xs={12} md={6} justifyContent='center' flexDirection='column' paddingBlock={{ xs: 0, md: 1 }} paddingInline={{ xs: 1, md: 10 }}>
                <img src={image} alt='display of car' width='100%' />
            </Grid>

            <Grid item xs={12} md={6} justifyContent='center' padding={{ xs: 0, md: 1 }} paddingInline={{ xs: 1, md: 10 }}>

                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="primary"
                    textAlign='center'
                >
                    {content[language].title}
                </Typography>

                <Tabs
                    value={value}
                    onChange={(event, newValue) => setValue(newValue)}
                    aria-label="icon position tabs"
                    maxWidth="100%"
                    textColor='error'
                    centered
                    sx={{
                        marginTop: { xs: 1, md: 5 },
                        "& .Mui-selected": {
                            color: colors[value],
                        },
                        "& .MuiTabs-indicator": {
                            backgroundColor: colors[value],
                        }
                    }}
                >
                    {content[language].groups.map((item, index) => (
                        <Tab
                            label={item}
                            key={index}
                            sx={{ color: theme.palette.secondary.main }}
                            {...a11yProps(index)}
                        />
                    ))}
                </Tabs>

                {content[language].groupsText.map((text, index) => (

                    <Typography
                        variant="p"
                        component="div"
                        color="secondary"
                        textAlign='justify'
                        marginTop={2}

                        role="tabpanel"
                        hidden={value !== index}
                        id={`tabpanel-${index}`}
                        aria-labelledby={`tab-${index}`}
                    >
                        {text}
                    </Typography>
                ))}
            </Grid>

            <Grid item xs={12} md={6} justifyContent='center' padding={1} paddingInline={{ xs: 1, md: 5 }}>
                <Tabs
                    value={selectedBug}
                    onChange={(event, newValue) => setSelectedBug(newValue)}
                    aria-label="icon position tabs"
                    textColor='error'

                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    sx={{
                        marginTop: { xs: 1, md: 10 },
                        "& .Mui-selected": {
                            color: colors[value],
                        },
                        "& .MuiTabs-indicator": {
                            backgroundColor: colors[value],
                        }
                    }}
                >
                    {bugs[value].map((item, index) => (
                        <Tab
                            icon={<SvgIcon component={item.icon} inheritViewBox sx={{ width: '50px' }} />}
                            key={index}
                            sx={{ color: theme.palette.secondary.main }}
                            {...a11yPropsBug(index)}
                        />
                    ))}
                </Tabs>

                {bugs[value].map((item, index) => (

                    <Typography
                        variant="p"
                        component="div"
                        color="text"
                        textAlign='justify'
                        marginTop={2}

                        role="tabpanel"
                        hidden={selectedBug !== index}
                        id={`tabpanelBug-${index}`}
                        aria-labelledby={`tabBug-${index}`}
                    >
                        {item[language]}
                    </Typography>
                ))}
            </Grid>

            <Grid item xs={12} md={6} justifyContent='center' padding={1} paddingInline={{ xs: 1, md: 5 }} flexDirection='column' display='flex'>

                <Box>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" sx={{ color: disabledEvent ? 'rgba(0, 0, 0, 0.38)' : theme.palette.secondary.main }}>
                            {content[language].event}
                        </InputLabel>
                        <StyledSelect
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={0}
                            label={content[language].event}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        backgroundColor: theme.palette.background.default,
                                    }
                                }
                            }}
                            disabled
                            
                        >
                            <MenuItem value={0}>{eventTypes[event].icon}{'    '}{eventTypes[event].name[language]}</MenuItem>
                        </StyledSelect>
                    </FormControl>
                </Box>
                <Box sx={{ marginTop: 2 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" style={{color: disabledEvent ? 'rgba(0, 0, 0, 0.38)' : undefined}} sx={{color: theme.palette.secondary.main}}>
                            {content[language].car}
                        </InputLabel>
                        <StyledSelect
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={eventCar}
                            label={content[language].car}
                            onChange={(event) => setEventCar(event.target.value)}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        backgroundColor: theme.palette.background.default,
                                    }
                                }
                            }}
                            autoFocus
                            disabled={disabledEvent}
                        >
                            {cars.map(car => (

                                <MenuItem key={car.name} value={car.id}><img src={car.image} alt={car.name} style={{ width: '36px' }} />{'            '}{car.name}</MenuItem>
                            ))}
                        </StyledSelect>
                    </FormControl>
                </Box>

                <Box sx={{ marginTop: 1, width: '100%' }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={language === 'uk' ? uk : en}>
                        <DemoContainer components={['DatePicker']} >
                            <DatePicker label={content[language].date} value={eventDate} onChange={(newValue) => setEventDate(newValue)}
                                sx={{
                                    width: '100%',

                                    '& fieldset': {
                                        borderColor: theme.palette.secondary.main,
                                    },
                                    '& .MuiSvgIcon-root ': {
                                        color: disabledEvent ? 'rgba(0, 0, 0, 0.38)' : theme.palette.secondary.main,
                                    },
                                    "label": {
                                        color: theme.palette.secondary.main
                                    },
                                    
                                }}
                                slotProps={{
                                    layout: {
                                        sx: {
                                            '.MuiDateCalendar-root': {
                                                color: theme.palette.text.primary,
                                                backgroundColor: theme.palette.background.default,
                                            },

                                            "& .MuiIconButton-root": {
                                                color: theme.palette.secondary.main,
                                            },

                                            '& .MuiTypography-root': {
                                                color: theme.palette.secondary.main,
                                            },

                                            "& .css-1eyvkhb-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected)": {
                                                borderColor: theme.palette.secondary.main,
                                            },
                                            
                                        }
                                    }
                                }}
                                disabled={disabledEvent}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </Box>

                <TextField
                    id="outlined-textarea"
                    label={content[language].desk}
                    multiline
                    value={eventDesk}
                    onChange={(event) => setEventDesk(event.target.value)}
                    rows={4}
                    sx={{
                        marginTop: 2,
                        width: '100%',
                        // Колір введеного тексту
                        '& input': {
                            color: theme.palette.text.primary,
                            
                        },

                        // Колір обведення елемента TextField (не введеного тексту)
                        '& fieldset': {
                            borderColor: theme.palette.secondary.main,
                        },

                        "label": {
                            color: theme.palette.secondary.main
                        },
                    }}
                    disabled={disabledEvent}
                />
                <Button
                    variant="outlined"
                    size="medium"
                    sx={{ color: theme.palette.primary.main, marginTop: 2,
                     }}
                    disabled={disabledEvent}
                >
                    {content[language].shedule}
                </Button>
            </Grid>
        </Grid>
    )
}

export default BugsPage