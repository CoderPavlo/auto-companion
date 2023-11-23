import React from 'react'

import {Badge, Tooltip} from '@mui/material';
import { styled } from '@mui/material/styles';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import car1 from "./images/car1.png"
import car2 from "./images/car2.png"
import car3 from "./images/car3.png"
import car4 from "./images/car4.png"
import car5 from "./images/car5.png"
import { eventTypes } from './eventTypes';

import en from 'dayjs/locale/en-gb';
import uk from 'dayjs/locale/uk';
import { ukUA } from '@mui/x-date-pickers/locales';
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

const initialValue = dayjs();

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 8,
    top: 10,
  },
}));

function getIconByType(type) {
  let foundIcon = null;

  eventTypes.forEach(event => {
    if (event.type === type) {
      foundIcon = React.cloneElement(event.icon, {
        style: {
          width: '18px',
          color: event.color,
        }
      });;
    }
  });

  return foundIcon;
}

function ServerDay(props) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  var index = -1;
  highlightedDays.forEach((event, i) => {
    if (event.day === day.date())
      index = i;
  });

  const isSelected = !props.outsideCurrentMonth && index >= 0;



  return (

    <Tooltip title={isSelected ? highlightedDays[index].desk : undefined}>
      <StyledBadge
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
        key={props.day.toString()}
        overlap="circular"
        badgeContent={isSelected ? <img src={highlightedDays[index].carImage} alt='car' style={{width: '25px'}}/> : undefined}
      >
        <StyledBadge
          key={props.day.toString()}
          overlap="circular"
          badgeContent={isSelected ? getIconByType(highlightedDays[index].type) : undefined}
        >
          <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
        </StyledBadge>
      </StyledBadge>
    </Tooltip>
  );
}

const MiniCalendar = ({ theme, language }) => {

  const requestAbortController = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([]);

  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ events }) => {
        setHighlightedDays(events);
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
    fetchHighlightedDays(initialValue);
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };

  function dayOfWeekFormatter(day, date) {
    const locale = language==='uk'? 'uk-UA' : 'en-GB';
    const options = { weekday: 'short', timeZone: 'UTC', locale: locale };
    return new Intl.DateTimeFormat(locale, options).format(date.add(1, 'day'));
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={language==='uk'? uk : en}
    localeText={language === 'uk' ? ukUA.components.MuiLocalizationProvider.defaultProps.localeText : undefined}
     >
      <DateCalendar
        defaultValue={initialValue}
        loading={isLoading}
        onMonthChange={handleMonthChange}
        renderLoading={() => <DayCalendarSkeleton sx={{'& .MuiSkeleton-root':{width: '50px !important', height: '50px !important'}}} />}
        dayOfWeekFormatter={dayOfWeekFormatter}
        sx={{
          width: '400px', // Наприклад, 300 пікселів
          height: '430px',
          maxHeight: '430px',
          '& .MuiPickersSlideTransition-root': {
            height: '320px',
          },
          '& .MuiSvgIcon-root': {
            width: '35px',
            height: '35px'
          },
          '& .MuiPickersCalendarHeader-label':{

            fontSize: '1.25rem',
          },
          '& .MuiTypography-root':{
            
            fontSize: '1rem',
            width: '50px',
            height: '55px',
          },
          '& .MuiPickersDay-root': {
            fontSize: '1.1rem',
            width: '50px',
            height: '50px'
          },
          "& .css-rhmlg1-MuiTypography-root-MuiDayCalendar-weekDayLabel": {
            color: theme.palette.secondary.main,
          },
          "& .MuiIconButton-root": {
            color: theme.palette.secondary.main,
          },
          "& .css-1eyvkhb-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected)": {
            borderColor:  theme.palette.secondary.main,
          },
        }}
        slots={{
          day: ServerDay,
        }}
        slotProps={{
          day: {
            highlightedDays,
          },
        }}
      />
    </LocalizationProvider>
  )
}

export default MiniCalendar