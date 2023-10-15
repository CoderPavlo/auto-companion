import React from "react";
import TabPanel from "./TabPanel";
import { Container, Grid, Card, Tabs, Tab } from "@mui/material";

import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ConstructionIcon from "@mui/icons-material/Construction";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import NotificationsIcon from "@mui/icons-material/Notifications";

import imageLargeDatabase from "../image/largeDatabase.jpg";
import imageCarInstruction from "../image/CarInstruction.jpg";
import imagePromotion from "../image/promotion.jpg";
import imageServiceHistory from "../image/serviceHistory.jpg";


const TabsBlock = ({theme, language}) => {
  const [value, setValue] = React.useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  }

  const containerStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    maxWidth: "100%",
  };

  var images = [
    imageLargeDatabase,
    imageServiceHistory,
    imageCarInstruction,
    imagePromotion,
  ];
  // Визначаємо значення backgroundImage на основі значення змінної value
  containerStyle.backgroundImage = `linear-gradient(to bottom, ${theme.palette.background.default}, transparent), url(${images[value]})`;
  var icons = [
    <DirectionsCarIcon />,
    <ConstructionIcon />,
    <LibraryBooksIcon />,
    <NotificationsIcon />,
  ];

  const content = {
    uk: {
      title: [
        "Велика база даних",
        "Історія обслуговування",
        "Мануали та інструкції",
        "Спеціальні акції",
      ],
      body: [
        `Ми маємо доступ до широкого обсягу інформації про автомобілі
          різних марок та моделей, що дозволяє нам надавати вам повну
          інформацію про ваше авто. Ви можете отримати доступ до повної та
          докладної інформації про свій автомобіль, будь то сучасний
          седан, спортивний кросовер або ретро-класика.`,
        `Ви можете відстежувати історію обслуговування вашого автомобіля,
          заплановані обслуговування та рекомендації щодо технічного
          обслуговування. Ця функція дозволяє вам дбати про довготривалу
          надійність та продуктивність вашого автомобіля, вести точний
          облік витрат та забезпечувати його бездоганну роботу на протязі
          всього терміну експлуатації.`,
        `Ми робимо навігацію в світі вашого автомобіля ще простішою та
          зручнішою, надаючи вам доступ до повного арсеналу мануалів та
          інструкцій щодо експлуатації вашого авто. З нами ви завжди
          будете мати доступ до найсвіжішої та найбільш докладної
          інформації щодо вашого автомобіля. Наша мета — забезпечити вас
          знаннями, необхідними для безпечного та ефективного користування
          вашим автомобілем.`,
        `Ми допоможемо вам економити гроші та отримувати доступ до
          вигідних пропозицій від офіційних сервісних центрів.
          AutoCompanion допомагає вам не тільки забезпечити найкращий
          догляд за вашим автомобілем, але й робить це за більш доступними
          цінами. Ми завжди дбаємо про ваші потреби та готові зробити
          догляд за авто більш вигідним.`,
      ],
      action: [
        "Знайти своє авто",
        "Переглянути рекомендації",
        "Переглянути інструкції до свого авто",
        "Перейти до акцій",
      ],
    },
    en: {
      title: [
        "Big Database",
        "Service history",
        "Manuals and instructions",
        "Special promotions",
      ],
      body: [
        `We have access to a wide range of information about cars
         different brands and models, which allows us to provide you with a complete
         information about your car. You can access the full and
         detailed information about your car, be it modern
         sedan, sports crossover or retro classic.`,
        `You can track the service history of your car,
         scheduled maintenance and technical recommendations
         service. This feature allows you to take care of the long-term
         reliability and performance of your car, drive accurately
         cost accounting and ensure its flawless operation throughout
         the entire service life.`,
        `We make navigating the world of your car even easier and
         more convenient, giving you access to a full arsenal of manuals and
         instructions for operating your car. You are always with us
         you will have access to the latest and most detailed
         information about your car. Our goal is to provide you
         knowledge necessary for safe and effective use
         your car`,
        `We'll help you save money and get access to
         profitable offers from official service centers.
         AutoCompanion helps you not only provide the best
         care for your car, but also makes it more affordable
         prices We always care about your needs and are ready to do
         Car care is more profitable.`,
      ],
      action: [
        "Find your car",
        "View Recommendations",
        "View instructions for your car",
        "Go to promotions",
      ],
    },
  };

  return (
    <Card
      sx={{
        background: theme.palette.background.default,
        marginTop: 2,
        padding: 0,
      }}
    >
      <Container style={containerStyle}>
        <Grid container justifyContent="center">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon position tabs"
            maxWidth="100%"
          >
            {icons.map((icon, index) => (
              <Tab
                icon={icon}
                iconPosition="start"
                label={content[language].title[index]}
                sx={{fontSize: { xs: 0, sm: 0, md: 12, lg: 18 }}}
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
        </Grid>
        {content[language].title.map((title, index) => (
          <TabPanel
            value={value}
            index={index}
            title={title}
            body={content[language].body[index]}
            action={content[language].action[index]}
          />
        ))}
      </Container>
    </Card>
  );
};

export default TabsBlock;
