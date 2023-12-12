import React from 'react'
import MiniCalendar from '../components/MiniCalendar'

import dayjs from 'dayjs';
import en from 'dayjs/locale/en-gb';
import uk from 'dayjs/locale/uk';

import useMediaQuery from '@mui/material/useMediaQuery';

import { getUserId, request, setAuthHeader } from '../../helpers/axios_helper';

import {
  Button,
  Grid,
  Box,
  Container,
  IconButton,
  Tooltip,
  Typography,
  Badge,
  FormControl,
  FormGroup,
  FormLabel,
  FormControlLabel,
  Checkbox,
} from '@mui/material'
import {
  Create,
  ArrowBackIos,
  ArrowForwardIos,
  Today,

} from '@mui/icons-material';
import { eventTypes } from '../components/eventTypes';


import car from "../components/images/car.png"
import audi from "../components/images/audi-a3.png"
import audiq8 from "../components/images/audi_q8.png"
import bmwx5 from "../components/images/bmw_x5.png"
import mersedes_s from "../components/images/mercedes_s.png"
import volvo_xc90 from "../components/images/volvo_xc90.png"

import EventDialog from './components/EventDialog';




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
          desk: 'Oil change',
          carImage: car,
        },

        {
          day: 25,
          type: 'belt_change',
          desk: 'Replacing belts',
          carImage: mersedes_s,
        },

        {
          day: 25,
          type: 'battery_replacement',
          desk: 'Scheduled battery replacement',
          carImage: volvo_xc90,
        },

        {
          day: 30,
          type: 'filter_change',
          desk: 'Replace filters',
          carImage: bmwx5,
        },
        {
          day: 2,
          type: 'routine_maintenance',
          desk: 'Scheduled maintenance',
          carImage: volvo_xc90,
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

function equalsDates(date1, date2) {
  if (!date1)
    return false;
  return date1.date() === date2.date() && date1.month() === date2.month() && date1.year() === date2.year();
}

function getColorByType(type) {
  let color = null;

  eventTypes.forEach(event => {
    if (event.type === type) {
      color = event.color;
    }
  });

  return color;
}

function getIconByType(type) {
  let foundIcon = null;

  eventTypes.forEach(event => {
    if (event.type === type) {
      foundIcon = event.icon;
    }
  });

  return foundIcon;
}



function getMonthDays(date) {
  const monthDays = [];
  const daysInMonth = date.daysInMonth();
  let week = [];

  let firstday = dayjs(`${date.year()}-${date.month() + 1}-1`).day() - 1;
  if (firstday === -1) firstday = 6;
  for (let i = 0; i < firstday; i++)
    week[i] = null;

  for (let i = 1; i < daysInMonth + 1; i++) {
    let day = dayjs(`${date.year()}-${date.month() + 1}-${i}`)
    let day_index = day.day() - 1;
    if (day_index === -1) {
      week[6] = day;
      monthDays.push(week);
      week = [];
    }
    else
      week[day_index] = day;
  }

  if (week.length > 0) {
    for (let i = week.length; i < 7; i++)
      week[i] = null;
    monthDays.push(week);
  }

  return monthDays;
}

function getEvents(month, year) {
  request("GET", `/events?month=${month}&year=${year}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
}

const CalendarPage = ({ theme, language }) => {

  React.useEffect(() => {
    // getEvents(12, 2023);
});

  const [initialDay, setInitialDay] = React.useState(dayjs());
  const [calendarValue, setCalendarValue] = React.useState(dayjs());

  const [isLoading, setIsLoading] = React.useState(false);

  const isXs = useMediaQuery(theme.breakpoints.only('xs'));


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
    fetchEvents(initialDay);
    return () => requestAbortController.current?.abort();
  });

  React.useEffect(() => {
    if (calendarValue.month() !== initialDay.month() || calendarValue.year() !== initialDay.year())
      setInitialDay(calendarValue);
  }, [calendarValue]);

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setEvents([]);
    fetchEvents(date);
    if (language === 'uk')
      date = date.locale(uk);
    else
      date = date.locale(en);
    setInitialDay(date);
  };

  const monthMatrix = getMonthDays(initialDay);

  const handleBackClick = () => {
    if (isXs) {

      let date = calendarValue.subtract(1, 'day');
      setCalendarValue(date);
    }
    else {
      let date = initialDay.subtract(1, 'month').startOf('month');
      setCalendarValue(date);
      handleMonthChange(date);
    }
  }

  const handleForwardClick = () => {
    if (isXs) {
      let date = calendarValue.add(1, 'day');
      setCalendarValue(date);
    }
    else {
      let date = initialDay.add(1, 'month').startOf('month');
      setCalendarValue(date);
      handleMonthChange(date);
    }
  }

  const content = {
    uk: {
      days: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд'],
      month: 'Місяць',
      day: 'День',
      add: 'Додати подію',
      today: 'Сьогодні',
      filter: 'Фільтр',
      automatic: 'Автоматичні',
      planned: 'Заплановані',
      noEvents: 'Немає запланованих подій!',
    },
    en: {
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      month: 'Month',
      day: 'Day',
      add: 'Add event',
      today: 'Today',
      filter: 'Filter',
      automatic: 'Automatic',
      planned: 'Planned',
      noEvents: 'No events scheduled!',
    },
  }

  const [automatic, setAutomatic] = React.useState(true);
  const [planned, setPlanned] = React.useState(true);

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpenDialog = (clear) => {
    if (clear) {
      setEventDate(calendarValue);
      setEventCar(null);
      setEventType(null);
      setEventDesk(null);
    }
    setOpenDialog(true);
  };

  const handleClickCloseDialog = () => {
    setOpenDialog(false);
  };

  let hasNonNullItem = false;
  const [initialEvent, setInitialEvent] = React.useState({ date: calendarValue });

  const [eventType, setEventType] = React.useState();
  const [eventCar, setEventCar] = React.useState();
  const [eventDate, setEventDate] = React.useState();
  const [eventDesk, setEventDesk] = React.useState();
  const [isNew, setIsNew] = React.useState(true);

  return (
    <>
      <Grid container spacing={0}>

        {//<MiniCalendar theme={theme} language={language} setInitialDay={setInitialDay}/>
        }
        <Grid item sx={{
          width: { xs: '100%', md: '330px' },
          display: 'flex', alignItems: 'center', flexDirection: 'column',
          borderRight: { md: `1px solid ${theme.palette.secondary.main}` },
          borderBottom: `1px solid ${theme.palette.secondary.main}`,
        }}>
          <Button variant="outlined" startIcon={<Create />} sx={{ marginBlock: 3 }} onClick={() => handleClickOpenDialog(true)}>
            {content[language].add}
          </Button>

          <Box sx={{ borderBlock: `1px solid ${theme.palette.secondary.main}`, width: '100%' }}>
            <MiniCalendar theme={theme} language={language} value={calendarValue} setValue={setCalendarValue}
              handleMonthChange={handleMonthChange} highlightedDays={events} isLoading={isLoading} />
          </Box>

          <FormControl sx={{ m: 3, width: '90%' }} component="fieldset" variant="standard">
            <FormLabel component="legend" sx={{ color: theme.palette.secondary.main }}>{content[language].filter}</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox checked={automatic} sx={{ color: theme.palette.secondary.main }} onChange={(event) => setAutomatic(event.target.checked)} name="automatic" />
                }
                label={content[language].automatic}
              />
              <FormControlLabel
                control={
                  <Checkbox checked={planned} sx={{ color: theme.palette.secondary.main }} onChange={(event) => setPlanned(event.target.checked)} name="planned" />
                }
                label={content[language].planned}
              />
            </FormGroup>
          </FormControl>
        </Grid>


        <Grid item sx={{ width: { xs: '100%', md: 'calc(100% - 330px)' } }}>
          <Container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
            <Button
              variant="contained"
              size="small"
              sx={{
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.primary.main,
                marginBlock: 1,
                width: '130px',
                height: '40px',
                minWidth: '120px',
              }}
              startIcon={<Today />}
              onClick={() => { setCalendarValue(dayjs()); handleMonthChange(dayjs()) }}
            >
              {content[language].today}
            </Button>
            <Container sx={{ display: 'flex', justifyContent: 'center', marginBlock: 1 }}>
              <Tooltip>
                <IconButton aria-label="delete" color='inherit' onClick={handleBackClick}>
                  <ArrowBackIos />
                </IconButton>
              </Tooltip>


              <Typography variant="h6" gutterBottom sx={{ marginRight: { xs: 0, sm: 3 }, marginLeft: { xs: 0, sm: 3 } }}>
                {isXs ? calendarValue.format('DD.MM.YYYY') : initialDay.locale(language).format('MMMM YYYY')}
              </Typography>
              <Tooltip>
                <IconButton aria-label="delete" color='inherit' onClick={handleForwardClick}>
                  <ArrowForwardIos />
                </IconButton>
              </Tooltip>
            </Container>
            <Button
              variant="outlined"
              size="small"
              sx={{
                color: theme.palette.text.primary,
                marginBlock: 1,
                width: { xs: '200px', sm: '130px' },
                height: '40px',
              }}
            >
              {isXs ? content[language].day : content[language].month}
            </Button>
          </Container>

          {!isXs &&
            <Grid container spacing={0} sx={{ paddingLeft: 2, paddingRight: 2 }}>
              {content[language].days.map((day, index) => (
                <Grid item xs={12 / 7} key={day} sx={{ display: 'flex', justifyContent: 'center', marginTop: 1 }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ color: theme.palette.secondary.main }}>
                    {day}
                  </Typography>
                </Grid>
              ))}

              {monthMatrix.map((week, index) => (
                week.map((day, number) => (
                  <Grid xs={12 / 7} item key={(index + 1) * (number + 1)} sx={{
                    border: `1px solid ${equalsDates(day, dayjs()) ? theme.palette.primary.main : theme.palette.secondary.main
                      }`, padding: 1, minHeight: '90px'
                  }}>
                    {day && (
                      <>
                        <Typography variant="subtitle1" gutterBottom sx={{ color: theme.palette.text.main }}>
                          {day.date()}
                        </Typography>

                        {events.map((item, i) => {
                          if (item.day === day.date()) {
                            return (
                              <Badge
                                anchorOrigin={{
                                  vertical: 'top',
                                  horizontal: 'right',
                                }}
                                key={i}
                                overlap="circular"
                                badgeContent={<img
                                  src={item.carImage}
                                  alt="Car"
                                  style={{ width: '24px', height: '24px' }}
                                />}
                                sx={{ width: '100%' }}
                              >
                                <Button key={i} variant="contained" sx={{
                                  backgroundColor: getColorByType(item.type),
                                  color: theme.palette.text.primary, width: '100%', overflow: 'hidden', '& .MuiButtonBase-root': { fontSize: '0,5rem', },
                                }}
                                  onClick={() => {

                                    setEventType(item.type);
                                    setEventCar(1);
                                    setEventDate(dayjs('02-12-2023'))
                                    setEventDesk(item.desk);

                                    setIsNew(false);
                                    handleClickOpenDialog(false);
                                  }}
                                >
                                  {item.desk}
                                </Button>
                              </Badge>
                            );
                          } else {
                            return null;
                          }
                        })}
                      </>
                    )}
                  </Grid>
                ))
              ))}
            </Grid>
          }
          {isXs &&
            <>
              <Typography variant="subtitle1" gutterBottom sx={{ color: theme.palette.secondary.main, textAlign: 'center' }}>
                {calendarValue.locale(language).format('dddd')}
              </Typography>
              {events.map((item, i) => {
                if (item.day === calendarValue.date()) {
                  hasNonNullItem = true;
                  return (
                    <>
                      <img alt='car' src={item.carImage} style={{ width: '40px', marginLeft: '20px' }} />
                      <Box sx={{ marginBlock: '5px', marginLeft: '30px', marginRight: '30px', borderLeft: `5px solid ${getColorByType(item.type)}`, padding: '10px' }}>

                        <Button key={i} variant="contained"
                          startIcon={getIconByType(item.type)}
                          sx={{
                            backgroundColor: getColorByType(item.type),
                            color: theme.palette.text.primary, width: '100%', overflow: 'hidden', '& .MuiButtonBase-root': { fontSize: '0,5rem', },
                          }}
                          onClick={() => {
                            setInitialEvent({
                              type: item.type,
                              date: item.date,
                              desk: item.desk,
                              car: 1,
                            });
                            setEventType(item.type);
                            setEventCar(1);
                            setEventDate(dayjs('02-12-2023'))
                            setEventDesk(item.desk);
                            setIsNew(false);
                            handleClickOpenDialog(false);
                          }}>
                          {item.desk}
                        </Button>
                      </Box>
                    </>
                  );
                } else {
                  return null;
                }
              })}
              {!hasNonNullItem && (
                <Typography variant="subtitle1" gutterBottom sx={{ color: theme.palette.text.primary, margin: 2 }}>
                  {content[language].noEvents}
                </Typography>
              )}
            </>
          }

        </Grid>
      </Grid>

      <EventDialog theme={theme} language={language} open={openDialog} isNew={isNew} handleClickClose={handleClickCloseDialog} date={eventDate} type={eventType} car={eventCar} desk={eventDesk} setDate={setEventDate} setType={setEventType} setCar={setEventCar} setDesk={setEventDesk} />
    </>
  )
}

export default CalendarPage
