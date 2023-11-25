import React from 'react'

import {Badge, Tooltip} from '@mui/material';
import { styled } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';

import { eventTypes } from './eventTypes';

import en from 'dayjs/locale/en-gb';
import uk from 'dayjs/locale/uk';
import { ukUA } from '@mui/x-date-pickers/locales';


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

const MiniCalendar = ({ theme, language, value, setValue, handleMonthChange, highlightedDays, isLoading}) => {

 
  
 


  function dayOfWeekFormatter(day, date) {
    const locale = language==='uk'? 'uk-UA' : 'en-GB';
    const options = { weekday: 'short', timeZone: 'UTC', locale: locale };
    return new Intl.DateTimeFormat(locale, options).format(date.add(1, 'day'));
  }
  const handleChange =(newValue)=>{
    setValue(newValue);
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={language==='uk'? uk : en}
    localeText={language === 'uk' ? ukUA.components.MuiLocalizationProvider.defaultProps.localeText : undefined}
     >
      <DateCalendar
        value={value}
        onChange={handleChange}
        loading={isLoading}
        onMonthChange={handleMonthChange}
        renderLoading={() => <DayCalendarSkeleton sx={{[theme.breakpoints.down('md')]: {'& .MuiSkeleton-root':{width: '50px !important', height: '50px !important'}}}} />}
        dayOfWeekFormatter={dayOfWeekFormatter}
        sx={{
          [theme.breakpoints.down('md')]: {
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