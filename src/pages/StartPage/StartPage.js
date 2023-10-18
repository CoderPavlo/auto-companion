import * as React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Tabs,
  Tab,
  Paper,
} from "@mui/material";
import TabPanel from "./components/TabPanel";
import imageUrl from "./image/car.png";
import imageLargeDatabase from "./image/largeDatabase.jpg";
import imageCarInstruction from "./image/CarInstruction.jpg";
import imagePromotion from "./image/promotion.jpg";
import imageServiceHistory from "./image/serviceHistory.jpg";
import imageCarRegister from "./image/CarRegister.png";
import imageCarKey from "./image/CarKey.png";
import imageGarage from "./image/garage.png";
import { useTheme } from "@mui/material/styles";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ConstructionIcon from "@mui/icons-material/Construction";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import NotificationsIcon from "@mui/icons-material/Notifications";

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

export default function StartPage() {
  const theme = useTheme();

  const cardContentStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const containerStyle = {
    backgroundImage: `linear-gradient(to bottom, ${theme.palette.background.default}, transparent), url(${imageLargeDatabase})`,
    backgroundSize: "cover", // Adjust this as needed
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    maxWidth: "100%",
    // Add more styling as needed
  };
  // Визначаємо значення backgroundImage на основі значення змінної value
  if (value == 1) {
    containerStyle.backgroundImage = `linear-gradient(to bottom, ${theme.palette.background.default}, transparent), url(${imageServiceHistory})`;
  } else if (value == 2) {
    containerStyle.backgroundImage = `linear-gradient(to bottom, ${theme.palette.background.default}, transparent), url(${imageCarInstruction})`;
  } else if (value == 3) {
    containerStyle.backgroundImage = `linear-gradient(to bottom, ${theme.palette.background.default}, transparent), url(${imagePromotion})`;
  }

  return (
    <Container
      maxWidth="100%"
      sx={{
        background: theme.palette.background.default,
        marginTop: 8,
        marginBottom: 2,
      }}
    >
      <Card sx={{ background: theme.palette.background.default }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={cardContentStyle}>
              <Container>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="primary"
                  >
                    Ваш особистий помічник для автомобілів!
                  </Typography>
                  <Typography variant="body2" color="text">
                    Шукаєте найзручніший спосіб слідкувати за вашим автомобілем
                    та забезпечити його бездоганну роботу? AutoCompanion - це
                    ваш надійний союзник у світі автотранспорту!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      color: theme.palette.text.primary,
                      backgroundColor: theme.palette.primary.main,
                    }}
                  >
                    Запланувати сервіс
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ color: theme.palette.primary.main }}
                  >
                    Додати авто
                  </Button>
                </CardActions>
              </Container>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                alt="car"
                image={imageUrl}
                sx={{
                  height: { sm: 300, md: "100%" },
                  width: { sm: 400, md: "100%" },
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Card>

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
              aria-label="icon position tabs example"
              maxWidth="100%"
            >
              <Tab
                icon={<DirectionsCarIcon />}
                iconPosition="start"
                label="Велика база даних"
                sx={{ fontSize: { xs: 0, sm: 0, md: 12, lg: 18 } }}
                {...a11yProps(0)}
              />
              <Tab
                icon={<ConstructionIcon />}
                iconPosition="start"
                label="Історія обслуговування"
                sx={{ fontSize: { xs: 0, sm: 0, md: 12, lg: 18 } }}
                {...a11yProps(1)}
              />
              <Tab
                icon={<LibraryBooksIcon />}
                iconPosition="start"
                label="Мануали та інструкції"
                sx={{ fontSize: { xs: 0, sm: 0, md: 12, lg: 18 } }}
                {...a11yProps(2)}
              />
              <Tab
                icon={<NotificationsIcon />}
                iconPosition="start"
                label="Спеціальні акції"
                sx={{ fontSize: { xs: 0, sm: 0, md: 12, lg: 18 } }}
                {...a11yProps(3)}
              />
            </Tabs>
          </Grid>
          <TabPanel
            value={value}
            index={0}
            title="Велика база даних"
            body="Ми маємо доступ до широкого обсягу інформації про автомобілі
          різних марок та моделей, що дозволяє нам надавати вам повну
          інформацію про ваше авто. Ви можете отримати доступ до повної та
          докладної інформації про свій автомобіль, будь то сучасний
          седан, спортивний кросовер або ретро-класика."
            action="Знайти своє авто"
          />

          <TabPanel
            value={value}
            index={1}
            title="Історія обслуговування"
            body="Ви можете відстежувати історію обслуговування вашого автомобіля,
          заплановані обслуговування та рекомендації щодо технічного
          обслуговування. Ця функція дозволяє вам дбати про довготривалу
          надійність та продуктивність вашого автомобіля, вести точний
          облік витрат та забезпечувати його бездоганну роботу на протязі
          всього терміну експлуатації."
            action="Переглянути рекомендації"
          />

          <TabPanel
            value={value}
            index={2}
            title="Мануали та інструкції"
            body="Ми робимо навігацію в світі вашого автомобіля ще простішою та
          зручнішою, надаючи вам доступ до повного арсеналу мануалів та
          інструкцій щодо експлуатації вашого авто. З нами ви завжди
          будете мати доступ до найсвіжішої та найбільш докладної
          інформації щодо вашого автомобіля. Наша мета — забезпечити вас
          знаннями, необхідними для безпечного та ефективного користування
          вашим автомобілем."
            action="Переглянути інструкції до свого авто"
          />

          <TabPanel
            value={value}
            index={3}
            title="Спеціальні акції"
            body="Ми допоможемо вам економити гроші та отримувати доступ до
          вигідних пропозицій від офіційних сервісних центрів.
          AutoCompanion допомагає вам не тільки забезпечити найкращий
          догляд за вашим автомобілем, але й робить це за більш доступними
          цінами. Ми завжди дбаємо про ваші потреби та готові зробити
          догляд за авто більш вигідним."
            action="Перейти до акцій"
          />
        </Container>
      </Card>

      <Card
        sx={{
          background: theme.palette.background.default,
          p: 1,
          marginTop: 2,
          marginBottom: 5,
        }}
      >
        <CardContent>
          <Container sx={{ marginLeft: 2 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="primary"
            >
              З ЧОГО ПОЧАТИ?
            </Typography>
          </Container>
          <Grid container spacing={10}>
            <Grid item xs={12} md={4}>
              <Card
                sx={{ background: theme.palette.background.default }}
                elevation={0}
              >
                <Container
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CardMedia
                    sx={{
                      height: { sm: 240, md: 150, lg: 230 },
                      width: { sm: "70%", md: "100%" },
                    }}
                    component="img"
                    image={imageCarKey}
                    title="car key"
                  />
                </Container>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Знайдіть ваше авто
                  </Typography>
                  <Typography variant="body2" color="text">
                    Введіть VIN-код або номер свого автомобіля та дізнайтеся
                    більше про ваш транспортний засіб.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ color: theme.palette.primary.main }}
                  >
                    Почати пошук
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                sx={{ background: theme.palette.background.default }}
                elevation={0}
              >
                <Container
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CardMedia
                    sx={{
                      height: { sm: 240, md: 150, lg: 230 },
                      width: { sm: "70%", md: "100%" },
                    }}
                    component="img"
                    image={imageGarage}
                    title="garage"
                  />
                </Container>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Додайте авто в гараж
                  </Typography>
                  <Typography variant="body2" color="text">
                    Не забудьте додати автомобіль до вашого особистого гаражу,
                    щоб мати доступ до усіх даних у зручний спосіб.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ color: theme.palette.primary.main }}
                  >
                    Перейти у гараж
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                sx={{ background: theme.palette.background.default }}
                elevation={0}
              >
                <Container
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CardMedia
                    sx={{
                      height: { sm: 240, md: 150, lg: 230 },
                      width: { sm: "70%", md: "100%" },
                    }}
                    component="img"
                    image={imageCarRegister}
                    title="car"
                  />
                </Container>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Приєднуйтеся
                  </Typography>
                  <Typography variant="body2" color="text">
                    Не чекайте! Приєднуйтесь до AutoCompanion сьогодні та
                    забезпечте найкращий догляд за вашим автомобілем.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      color: theme.palette.text.primary,
                      backgroundColor: theme.palette.primary.main,
                    }}
                  >
                    Ввійти
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ color: theme.palette.primary.main }}
                  >
                    Зареєструватися
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
