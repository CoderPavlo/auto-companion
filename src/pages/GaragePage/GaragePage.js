import * as React from "react";
import {
    Container, Card, Grid, Typography, CardContent, CardActions, CardMedia, Select, MenuItem
  } from '@mui/material';
import imageUrl from "./image/garage.png";
import imageS from "./image/tesla s.jpg";
import imageX from "./image/tesla x.jpg";
import imageX5 from "./image/BMW X5.jpg";
import imageM5 from "./image/BMW M5.jpg";
import imageM3 from "./image/BMW M3.jpg";
import imageVW from "./image/VW PASSAT.png";
import { useTheme } from "@mui/material/styles";



export default function GaragePage() {
    const theme = useTheme();
    
    const cardContentStyle = {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    };
  
    const cars = [
      { brand: "Tesla", model: "Model S", year: 2021, averagePrice: "$80,000", image:imageS },
      { brand: "Tesla", model: "Model X", year: 2021, averagePrice: "$80,000",image:imageX },
      { brand: "BMW", model: "M3", year: 2022, averagePrice: "$70,000",image: imageM3},
      { brand: "BMW", model: "M5", year: 2022, averagePrice: "$70,000",image:imageM5 },
      { brand: "BMW", model: "X5", year: 2022, averagePrice: "$70,000",image:imageX5 },
      { brand: "VW", model: "Passat", year: 2022, averagePrice: "$70,000",image: imageVW},
      // ... інші автомобілі
    ];
  
    const [selectedBrand, setSelectedBrand] = React.useState('');
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
  
    const handleBrandChange = (event) => {
      setSelectedBrand(event.target.value);
    };
  
  
    const uniqueBrands = [...new Set(cars.map(car => car.brand))];
    const filteredCars = selectedBrand ? cars.filter(car => car.brand === selectedBrand) : cars;
  
    const containerStyle = {
      backgroundImage: `linear-gradient(to bottom, ${theme.palette.background.default}, transparent)`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      maxWidth: "100%",
    };
  
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
                      Ваш гараж автомобілів
                    </Typography>
                    <Typography variant="body2" color="text">
                      Тут ви можете переглядати автомобілі які добавили у свій гараж
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* Тут може бути код кнопок чи інших дій */}
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
                <Grid container justifyContent="center" alignItems="center" direction="column">
                    <Typography variant="h5" style={{ color: 'text', marginBottom: '10px' }}>
                        Виберіть марку авто
                    </Typography>
                    <Select
                        value={selectedBrand}
                        onChange={handleBrandChange}
                        sx={{ background: theme.palette.background.default, color: 'red', marginBottom: 2 }}
                        displayEmpty
                    >
                        <MenuItem value="" style={{ color: 'red' }}>
                            <em>Всі марки</em>
                        </MenuItem>
                        {[...new Set(cars.map(car => car.brand))].map(brand => (
                            <MenuItem key={brand} value={brand} style={{ color: 'red' }}>
                                {brand}
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>
            </Container>
        </Card>

        

        <Card sx={{ background: theme.palette.background.default, elevation: 0, border: '1px solid #333333', margin: '8px' }}>
          <CardContent>
                    <Grid container spacing={10}>
                    {cars
                      .filter((car) => !selectedBrand || car.brand === selectedBrand)
                      .map((car) => (
                          <Grid item xs={12} md={4} key={car.model}>
                              <Container>
                                  <Card sx={{ background: theme.palette.background.default, elevation: 0, border: '4px solid #333333', margin: '8px' }}>
                                  <CardContent>
                                            <Typography variant="h6" color="error">{car.brand}</Typography>
                                            <Typography variant="body1">{car.model}</Typography>
                                            <Typography variant="body2">{car.year}</Typography>
                                            <Typography variant="body2">{car.averagePrice}</Typography>
                                        </CardContent>
                                        <CardMedia
                                            component="img"
                                            alt={car.model}
                                            image={car.image}
                                            sx={{ height: 140, objectFit: 'contain', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                                        />
                                        <CardActions>
                                            {/* Тут може бути код кнопок чи інших дій */}
                                        </CardActions>
                                  </Card>
                              </Container>
                          </Grid>
))}
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
  }