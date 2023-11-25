import React from "react";
import {
  Card,
  Grid,
  Container,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

import imageCarRegister from "../image/CarRegister.png";
import imageCarKey from "../image/CarKey.png";
import imageGarage from "../image/garage.png";

const CardsBlock = ({ theme, language }) => {
    var images = [imageCarKey, imageGarage, imageCarRegister]
  const content = {
    uk: {
      title: "З ЧОГО ПОЧАТИ?",
      cardTitle: ["Знайдіть ваше авто", "Додайте авто в гараж", "Приєднуйтеся"],
      body: [
        `Введіть VIN-код або номер свого автомобіля та дізнайтеся
            більше про ваш транспортний засіб.`,
        `Не забудьте додати автомобіль до вашого особистого гаражу,
            щоб мати доступ до усіх даних у зручний спосіб.`,
        `Не чекайте! Приєднуйтесь до AutoCompanion сьогодні та
            забезпечте найкращий догляд за вашим автомобілем.`,
      ],
      action: [["Почати пошук"], ["Перейти у гараж"], ["Ввійти", "Зареєструватися"]],
    },
    en: {
      title: "WHAT TO START WITH?",
      cardTitle: ["Find your car", "Add car to garage", "Join"],
      body: [
        `Enter the VIN code or number of your car and find out
            more about your vehicle.`,
        `Don't forget to add a car to your personal garage,
            to have access to all data in a convenient way.`,
        `Don't wait! Join AutoCompanion today and
            provide the best care for your car.`,
      ],
      action: [["Start search"], ["Go to garage"], ["Sign in", "Sign up"]],
    },
  };

  var variant = [["outlined"], ["outlined"], ["contained", "outlined"]];
  const buttonStyles = {
    outlined : {
        color: theme.palette.primary.main
    },
    contained : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.primary.main,
    }
  }
  return (
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
          <Typography gutterBottom variant="h5" component="div" color="primary">
            {content[language].title}
          </Typography>
        </Container>
        
        <Grid container spacing={10}>
        {images.map((image, index) =>(
            <Grid item xs={12} md={4} key={index}>
            <Card sx={{ background: theme.palette.background.default }} elevation={0}>
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <CardMedia
                  sx={{
                    height: { sm: 240, md: 150, lg: 230 },
                    width: { sm: "70%", md: "100%" },
                  }}
                  component="img"
                  image={image}
                />
              </Container>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 {content[language].cardTitle[index]}
                </Typography>
                <Typography variant="body2" color="text">
                {content[language].body[index]}
                </Typography>
              </CardContent>
              <CardActions>
              {content[language].action[index].map((action, i) =>(
                <Button
                  key={i}
                  variant={variant[index][i]}
                  size="small"
                  sx={buttonStyles[variant[index][i]]}
                >
                  {action}
                </Button>
              ))}
                
              </CardActions>
            </Card>
          </Grid>
        ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardsBlock;
