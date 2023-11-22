import React, { useEffect } from 'react';
import CarCarousel from './components/CarCarousel'
import car1 from "./../components/images/car1.png"
import car2 from "./../components/images/car2.png"
import car3 from "./../components/images/car3.png"
import car4 from "./../components/images/car4.png"
import car5 from "./../components/images/car5.png"
import { json } from './car.js'
import {
  Box, Container, InputLabel, MenuItem, FormControl, Select, Typography, Grid,
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Menu
} from '@mui/material';

import {
  MoreVert,
  TimeToLeave,
  Sell,
  Schedule,
  LocalGasStation,
  TimesOneMobiledata,
  Settings,
  MoveUp,
  Adjust,
  Palette,
  AttachMoney
} from '@mui/icons-material';

const content = {
  uk: {
    configuration: ['Марка', 'Модель', 'Рік випуску', 'Тип двигуна', 'Кінські сили', 'Тип трансмісії', 'Кількість передач', 'Привід', 'Колір', 'Ціна'],
    shedule: 'Запланувати сервіс',
    found: 'Знайдено ',
    cars: ' Авто',
    make: 'Марка',
    more: 'Більше...',
    history: 'Історія обслуговування',
    delete: 'Видалити',
  },
  en: {
    configuration: ['Make', 'Model', 'Year', 'Engine Type', 'Horsepower', 'Transmission Type', 'Number of Gears', 'Drive', 'Color', 'Price'],
    schedule: 'Schedule service',
    found: 'Found ',
    cars: ' cars',
    make: 'Make',
    more: 'More...',
    history: 'Service history',
    delete: 'Delete',
  },
}
const icons = [<TimeToLeave />, <Sell />, <Schedule />, <LocalGasStation />, <TimesOneMobiledata />, <Settings />, <MoveUp />, <Adjust />, <Palette />, <AttachMoney />]
const properties = ['make.name', 'model.name', 'years[0].year', 'engine.type', 'engine.horsepower', 'transmission.transmissionType', 'transmission.numberOfSpeeds', 'drivenWheels', 'colors[1].options[0].name', 'price.baseMsrp'];

const cars = [
  {
    src: car1,
    title: 'Bmw dsc',
    json: json,
  },
  {
    src: car2,
    title: 'Bmw dsc',
    json: json,
  },
  {
    src: car3,
    title: 'Bmw dsc',
    json: json,
  },
  {
    src: car4,
    title: 'Bmw dsc',
    json: json,
  },
  {
    src: car5,
    title: 'Bmw dsc',
    json: json,
  },
  {
    src: car1,
    title: 'Bmw dsc',
    json: json,
  },
  {
    src: car2,
    title: 'Bmw dsc',
    json: json,
  },
  {
    src: car3,
    title: 'Bmw dsc',
    json: json,
  },
  {
    src: car4,
    title: 'Bmw dsc',
    json: json,
  },
  {
    src: car5,
    title: 'Bmw dsc',
    json: json,
  },
  {
    src: car1,
    title: 'Bmw dsc',
    json: json,
  },
  {
    src: car2,
    title: 'Bmw dsc',
    json: json,
  },
  {
    src: car3,
    title: 'Bmw dsc',
    json: json,
  },
  {
    src: car4,
    title: 'Bmw dsc',
    json: json,
  },
  {
    src: car5,
    title: 'Bmw dsc',
    json: json,
  },
];

const getPropertyValue = (obj, path) => {
  const keys = path.split('.');

  return keys.reduce((acc, key) => {
    if (acc && key.includes('[')) {
      const [prop, index] = key.split('[').map(item => item.replace(']', ''));
      acc = acc[prop][index];
    } else {
      acc = acc[key];
    }

    return acc;
  }, obj);
};

const GaragePage = ({ theme, language }) => {
  const [selectedCar, setSelectedCar] = React.useState(0);
  const [brand, setBrand] = React.useState('');
  const [makes, setMakes] = React.useState(['All']);
  const [filteredCars, setFilteredCars] = React.useState(cars);

  const handleChange = (event) => {
    setBrand(event.target.value);
    if (event.target.value === 'All')
      setFilteredCars(cars);
    else {
      let filCars = []
      for (const car of cars)
        if (getPropertyValue(car.json, properties[0]) === event.target.value)
          filCars.push(car);
      setFilteredCars(filCars);
    }
  };

  useEffect(() => {
    let makes0 = ['All'];
    for (const car of cars) {
      const makeName = getPropertyValue(car.json, properties[0]);

      // Check if makeName is not already in the array
      if (!makes0.includes(makeName)) {
        makes0.push(makeName);
      }
    }
    setMakes(makes0);
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Container disableGutters sx={{ padding: 1 }}
      maxWidth="100%">
      <Container disableGutters maxWidth='100%' sx={{ margin: 0, paddingBlock: 1, paddingLeft: '20px', paddingRight: '20px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          color={theme.palette.text.main}
        >
          {content[language].found}{filteredCars.length}{content[language].cars}
        </Typography>
        <Box sx={{ minWidth: 120, width: '150px' }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" sx={{ color: theme.palette.secondary.main }}>{content[language].make}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={brand}
              label={content[language].make}
              onChange={handleChange}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: 'transparent',
                  }
                }
              }}
              sx={{
                '& .MuiInputBase-input':
                {
                  color: theme.palette.text.main,
                },
                '& fieldset': {
                  borderColor: theme.palette.secondary.main,
                },
                '& .MuiSelect-icon': {
                  color: theme.palette.secondary.main,
                },
              }}
            >
              {makes.map(make => (

                <MenuItem key={make} value={make}>{make}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Container>
      <Container disableGutters sx={{ margin: 0, paddingLeft: 5, paddingRight: 5 }} maxWidth='100%'>
        <CarCarousel theme={theme} images={filteredCars} selectedCar={selectedCar} setSelectedCar={setSelectedCar} />
      </Container>

      <Grid container spacing={0} sx={{ marginBlock: 2 }}>

        <Grid item xs={12} md={6} >

          <Card sx={{ background: theme.palette.background.default, margin: 5 }}>

            <CardContent>
              <Container disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  color="text"
                >
                  {cars[selectedCar].title}
                </Typography>
                <IconButton aria-label="more"
                  color="inherit" onClick={handleClick}>
                  <MoreVert />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                  sx={{
                    '& .MuiPaper-root': {

                      backgroundColor: 'transparent',
                    }
                  }}
                >
                  <MenuItem onClick={handleClose}>{content[language].more}</MenuItem>
                  <MenuItem onClick={handleClose}>{content[language].shedule}</MenuItem>
                  <MenuItem onClick={handleClose}>{content[language].history}</MenuItem>
                  <MenuItem onClick={handleClose}>{content[language].delete}</MenuItem>
                </Menu>
              </Container>
              <List sx={{marginLeft: '40px'}}>
                <Grid container spacing={0}>
                  {icons.map((icon, index) => (
                    <Grid item xs={12} sm={6}>
                      <ListItem key={index}>
                        <ListItemIcon sx={{ color: theme.palette.secondary.main }}>
                          {icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={getPropertyValue(filteredCars[selectedCar].json, properties[index]).toString().toLowerCase()}
                          secondary={content[language].configuration[index]}
                          sx={{
                            '& .css-83ijpv-MuiTypography-root': {
                              color: theme.palette.secondary.main
                            }
                          }}
                        />
                      </ListItem>
                    </Grid>
                  ))}
                </Grid>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'flex' }, position: 'relative', marginBlock: 2, paddingBlock: 5 }}>
          <Container disableGutters sx={{
            width: '90%',
            height: { md: '200px', lg: '250px' },
            background: `linear-gradient(to bottom, transparent, rgba(0, 123, 255, 0.37) 100%)`,
            borderRadius: '50%',
            filter: 'blur(10px)',
            position: 'relative',
            zIndex: 1,
            marginTop: '25%',
            marginLeft: 0
          }}></Container>
          <img src={cars[selectedCar].src}
            alt={cars[selectedCar].title}
            style={{
              width: '90%', zIndex: 2, top: 0,
              position: 'absolute',
            }} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default GaragePage