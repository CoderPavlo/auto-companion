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
} from "@mui/material";
import imageUrl from "./image/car.png";
import { useTheme } from "@mui/material/styles";
import { useLanguage } from "../../context/LanguageContext";

import TabsBlock from "./components/TabsBlock";
import CardsBlock from "./components/CardsBlock";
export default function StartPage() {
  const theme = useTheme();
  const { language, setLanguage } = useLanguage();

  const cardContentStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

  const content = {
    uk: {
      title: "Ваш особистий помічник для автомобілів!",
      body: `Шукаєте найзручніший спосіб слідкувати за вашим автомобілем
      та забезпечити його бездоганну роботу? AutoCompanion - це
      ваш надійний союзник у світі автотранспорту!`,
      action1: "Запланувати сервіс",
      action2: "Додати авто",
    },
    en: {
      title: "Your personal car assistant!",
      body: `Looking for the most convenient way to track your car
       and ensure its flawless operation? AutoCompanion is it
       your reliable ally in the world of motor transport!`,
      action1: "Schedule service",
      action2: "Add car",
    },
  };

  return (
    <Container
      maxWidth="100%"
      sx={{
        background: theme.palette.background.default,
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
                    {content[language].title}
                  </Typography>
                  <Typography variant="body2" color="text">
                    {content[language].body}
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
                    {content[language].action1}
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ color: theme.palette.primary.main }}
                  >
                    {content[language].action2}
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

      <TabsBlock theme={theme} language={language} />

      <CardsBlock theme={theme} language={language} />
    </Container>
  );
}
