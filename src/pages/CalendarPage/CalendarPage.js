import React, { useEffect } from 'react'
import MiniCalendar from '../components/MiniCalendar'

import dayjs from 'dayjs';
import en from 'dayjs/locale/en-gb';
import uk from 'dayjs/locale/uk';

import useMediaQuery from '@mui/material/useMediaQuery';

import {
  Button,
  Grid,
  Box,
  Container,
  IconButton,
  Tooltip,
  Typography,

} from '@mui/material'
import {
  Create,
  ArrowBackIos,
  ArrowForwardIos,
  Today,

} from '@mui/icons-material';

import car1 from "../components/images/car1.png"
import car2 from "../components/images/car2.png"
import car3 from "../components/images/car3.png"
import car4 from "../components/images/car4.png"
import car5 from "../components/images/car5.png"

function fakeFetch(date, { signal }) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      //const currentMonth = date.month();
      //const currentYear = date.year();
      //отримуємо події з бази даних за місяцем
      const events = [
        {
          day: 18,
          type: 'oil_change',
          desk: 'Заміна масла',
          carImage: car1,
        },

        {
          day: 20,
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

function equalsDates(date1, date2){
  if(!date1)
    return false;
  return date1.date()===date2.date() && date1.month() === date2.month() && date1.year() === date2.year();
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

const CalendarPage = ({ theme, language }) => {
  const [initialDay, setInitialDay] = React.useState(dayjs());
  const [calendarValue, setCalendarValue] = React.useState(dayjs());

  const [isLoading, setIsLoading] = React.useState(false);

  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));

  
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
  }, []);

  React.useEffect(() => {
    if(calendarValue.month()!= initialDay.month() || calendarValue.year()!= initialDay.year())
      setInitialDay(calendarValue);
  }, [calendarValue]);

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setEvents([]);
    fetchEvents(date);
    if(language==='uk')
      date=date.locale(uk);
    else
      date = date.locale(en);
    setInitialDay(date);
  };

  const monthMatrix = getMonthDays(initialDay);

  const handleBackClick = () => {
    let date = initialDay.subtract(1, 'month').startOf('month');
    setCalendarValue(date);
    handleMonthChange(date);
  }

  const handleForwardClick = () => {
    let date = initialDay.add(1, 'month').startOf('month');
    setCalendarValue(date);
    handleMonthChange(date);
  }

  const content = {
    uk: {
      days: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд'],
      month: 'Місяць',
      day: 'День',

    },
    en: {
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      month: 'Month',
       day: 'Day',
    },
  }

  return (
    <Grid container spacing={0}>

      {//<MiniCalendar theme={theme} language={language} setInitialDay={setInitialDay}/>
      }
      <Grid item sx={{
        width: { xs: '100%', md: '330px' },
        display: 'flex', alignItems: 'center', flexDirection: 'column',
        borderRight: `1px solid ${theme.palette.secondary.main}`,
        height: '100%',
      }}>
        <Button variant="outlined" startIcon={<Create />} sx={{ marginBlock: 3 }}>
          Додати подію
        </Button>

        <Box sx={{ borderBlock: `1px solid ${theme.palette.secondary.main}`, width: '100%' }}>
          <MiniCalendar theme={theme} language={language} value={calendarValue} setValue={setCalendarValue} 
          handleMonthChange={handleMonthChange} highlightedDays={events} isLoading={isLoading}/>
        </Box>


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
            }}
            startIcon={<Today />}
            onClick={() => {setCalendarValue(dayjs()); handleMonthChange(dayjs())}}
          >
            Сьогодні
          </Button>
          <Container sx={{ display: 'flex', justifyContent: 'center', marginBlock: 1 }}>
            <Tooltip>
              <IconButton aria-label="delete" color='inherit' onClick={handleBackClick}>
                <ArrowBackIos />
              </IconButton>
            </Tooltip>


            <Typography variant="h6" gutterBottom sx={{ marginRight: 3, marginLeft: 3 }}>
              {initialDay.locale(language).format('MMMM YYYY')}
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
              width: '130px',
              height: '40px',
            }}
          >
            {isXs ? content[language].day : content[language].month}
          </Button>
        </Container>

        <Grid container spacing={0} sx={{paddingLeft: 2, paddingRight: 2}}>
          {content[language].days.map((day, index) => (
            <Grid item xs={12 / 7} key={day} sx={{ display: 'flex', justifyContent: 'center', marginTop: 1 }}>
              <Typography variant="subtitle1" gutterBottom sx={{ color: theme.palette.secondary.main }}>
                {day}
              </Typography>
            </Grid>
          ))}

          {monthMatrix.map((week, index) => (
            week.map((day, number) => (
              <Grid xs={12/7} item key={(index+1)*(number+1)} sx={{
                border: `1px solid ${equalsDates(day, dayjs()) ? theme.palette.primary.main : theme.palette.secondary.main
                }`, padding: 1, height: '90px'}}>
                {day &&
                  <Typography variant="subtitle1" gutterBottom sx={{ color: theme.palette.text.main }}>
                    {day.date()}
                  </Typography>
                }
              </Grid>
            ))
          ))}
        </Grid>

      </Grid>
    </Grid>
  )
}

export default CalendarPage