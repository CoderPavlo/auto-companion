import React from 'react'
import { json } from '../GaragePage/car.js'
import car1 from '../components/images/car1.png'
import InfoCard from '../components/InfoCard.js'
import {
  Container,
  Typography, Grid,
  Tooltip,
  Tabs, Tab,
  Checkbox,
} from '@mui/material';

import {
  Public,
  Build,
  Sync,
  FormatListBulleted,
  TimeToLeave,
  Sell,
  Schedule,
  LocalGasStation,
  Settings,
  Adjust,
  Palette,
  AttachMoney,
  SensorDoor,
  DirectionsCar,
  LocationCity,
  Accessibility,
  Compress,
  SettingsInputComponent,
  AspectRatio,
  SpaceBar,
  FlashOn,
  RotateRight,
  FilterList,
  QrCode,
  Power,
  Timeline,
  SettingsEthernet,
  SettingsPower,
  Category,
  Speed,
  MonetizationOn,     // Ринок
  Park,                // Еко клас
  DriveEta,           // Тип авто
  Style,              // Стиль
  BookmarkBorder,
  Bookmark,
} from '@mui/icons-material';

import { useParams } from 'react-router-dom';
const iconsTab = [<Public />, <Build />, <Sync />, <FormatListBulleted />];

const content = {
  uk: {
    titlesTab: ['Загальне', 'Двигун', 'Трансмісія', 'Категорії'],
    configuration: [
      ['Марка', 'Модель', 'Рік випуску', 'Привід', 'Кількість дверей', 'Колір', 'Ціна', 'Їзда по шосе', 'Їзда по місту'],
      ['Тип обладнання', 'Доступність', 'Паливо', 'Стиснення', 'Циліндр', 'Розмір', "Об'єм", 'Конфігурація', 'Тип палива', 'Потужність', 'Крутний момент', 'Кількість клапанів', 'Код', 'Потужність на хвилину', 'Крутний момент на хвилину', 'Грм', 'Редуктор'],
      ['Тип обладнання', 'Доступність', 'Тип автомату', 'Тип трасмісії', 'Кількість швидкостей'],
      ['Тип кузова', 'Ринок', 'Підтип авто', 'Еко клас', 'Розмір', 'Тип авто', 'Стиль'],
    ],
    add: 'Додати до гаражу',
    delete: 'Видалити з гаражу',


  },
  en: {
    titlesTab: ['General', 'Engine', 'Transmission', 'Categories'],
    configuration: [
      ['Make', 'Model', 'Year', 'Drive', 'Number of doors', 'Color', 'Price', 'Highway driving', 'City driving'],
      ['Equipment Type', 'Availability', 'Fuel', 'Compression', 'Cylinder', 'Size', 'Displacement', 'Configuration', 'Fuel Type', 'Power', 'Torque', 'Number of Valves', 'Code', 'Power per minute', 'Torque per minute', 'Thunder', 'Gearbox'],
      ['Type of equipment', 'Availability', 'Type of machine', 'Type of transmission', 'Number of speeds'],
      ['Body Type', 'Market', 'Car Subtype', 'Eco Class', 'Size', 'Car Type', 'Style'],
    ],
    add: 'Add to garage',
    delete: 'Delete from garage',
  }

}

const icons = [
  [
    <TimeToLeave />,             // Марка
    <Sell />,            // Модель
    <Schedule />,                // Рік випуску
    <Adjust />,                 // Привід
    <SensorDoor />,   // Кількість дверей
    <Palette />,                  // Колір
    <AttachMoney />,              // Ціна
    <DirectionsCar />,            // Їзда по шосе
    <LocationCity />,             // Їзда по місту
  ],
  [
    <Build />,            // Тип обладнання
    <Accessibility />,    // Доступність
    <LocalGasStation />,
    <Compress />,         // Стиснення
    <SettingsInputComponent />,  // Циліндр
    <AspectRatio />,      // Розмір
    <SpaceBar />,         // Об'єм
    <Settings />,         // Конфігурація
    <LocalGasStation />,  // Тип палива
    <FlashOn />,          // Потужність
    <RotateRight />,      // Крутний момент
    <FilterList />,       // Кількість клапанів
    <QrCode />,           // Код
    <Power />,            // Потужність на хвилину
    <Timeline />,         // Крутний момент на хвилину
    <SettingsEthernet />, // Грм
    <SettingsPower />,     // Редуктор
  ],
  [
    <Build />,            // Тип обладнання
    <Accessibility />,    // Доступність
    <Category />,         // Тип автомату
    <SettingsEthernet />, // Тип трансмісії
    <Speed />,            // Кількість швидкостей
  ],
  [
    <DirectionsCar />,  // Тип кузова
    <MonetizationOn />, // Ринок
    <Category />,       // Підтип авто
    <Park />,            // Еко клас
    <AspectRatio />,    // Розмір
    <DriveEta />,       // Тип авто
    <Style />,          // Стиль
  ],

]

const properties = [
  [
    'make.name',             // Марка
    'model.name',            // Модель
    'years[0].year',                // Рік випуску
    'drivenWheels',                 // Привід
    'numOfDoors',   // Кількість дверей
    'colors[1].options[0].name',                  // Колір
    'price.baseMsrp',              // Ціна
    'mpg.highway',            // Їзда по шосе
    'mpg.city',             // Їзда по місту
  ],
  [
    'engine.equipmentType',            // Тип обладнання
    'engine.availability',    // Доступність
    'engine.type',
    'engine.compressionRatio',         // Стиснення
    'engine.cylinder',  // Циліндр
    'engine.size',      // Розмір
    'engine.displacement',         // Об'єм
    'engine.configuration',         // Конфігурація
    'engine.fuelType',  // Тип палива
    'engine.horsepower',          // Потужність
    'engine.torque',      // Крутний момент
    'engine.totalValves',       // Кількість клапанів
    'engine.code',           // Код
    'engine.rpm.horsepower',            // Потужність на хвилину
    'engine.rpm.torque',         // Крутний момент на хвилину
    'engine.valve.timing', // Грм
    'engine.valve.gear',     // Редуктор
  ],
  [
    'transmission.equipmentType',            // Тип обладнання
    'transmission.availability',    // Доступність
    'transmission.automaticType',         // Тип автомату
    'transmission.transmissionType', // Тип трансмісії
    'transmission.numberOfSpeeds',            // Кількість швидкостей
  ],
  [
    'categories.primaryBodyType',  // Тип кузова
    'categories.market', // Ринок
    'categories.crossover',       // Підтип авто
    'categories.epaClass',            // Еко клас
    'categories.vehicleSize',    // Розмір
    'categories.vehicleType',       // Тип авто
    'categories.vehicleStyle',          // Стиль
  ],

]
const VinPage = ({ theme, language, IsInGarage }) => {

  const { vin } = useParams();
  const [value, setValue] = React.useState(0);
  const [favorite, setFavorite] = React.useState(IsInGarage);

  const handleChange = (eentv, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  }
  const handleChangeFavorite = (event) => {
    setFavorite(event.target.checked);
  }
  return (
    <div style={{width: '100%',  marginLeft: 3, marginRight: 3, }}>
      <Grid container spacing={5} sx={{paddingLeft: {xs: 0, md: 20}, paddingRight: {xs: 0, md: 20}, }}>
        <Grid item xs={4} md={3}>
          <img src={car1} alt='car' style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={4} md={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color={theme.palette.text.main}
          >
            Name
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            color={theme.palette.secondary.main}
          >
            {vin}
          </Typography>
        </Grid>
        <Grid item xs={4} container alignItems="center" justifyContent='center'>
          <Tooltip title={favorite ? content[language].delete : content[language].add}>
            <Checkbox
              checked={favorite}
              onChange={handleChangeFavorite}
              icon={<BookmarkBorder sx={{ color: theme.palette.secondary.main, fontSize: '3rem' }} />}
              checkedIcon={<Bookmark sx={{ fontSize: '3rem' }} />}
            />
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="icon position tabs"
          maxWidth="100%"
        >
          {iconsTab.map((icon, index) => (
            <Tooltip title={content[language].titlesTab[index]}>
              <Tab
                icon={icon}
                iconPosition="start"
                label={content[language].titlesTab[index]}
                sx={{ fontSize: { xs: 0, sm: 12, md: 18, lg: 18 }, color: theme.palette.secondary.main }}
                {...a11yProps(index)}
              />
            </Tooltip>
          ))}
        </Tabs>
      </Grid>

      {content[language].titlesTab.map((title, index) => (

        <Container
          disableGutters
          role="tabpanel"
          id={`tabpanel-${index}`}
          aria-labelledby={`tab-${index}`}
          sx={{
            display: value === index ? 'block' : 'none',
            marginTop: -4,
          }}
        >
          {value === index &&
            <InfoCard theme={theme} language={language} icons={icons[index]} configuration={content[language].configuration[index]} properties={properties[index]} json={json} />
          }
        </Container>
      ))}
    </div>
  )
}

export default VinPage