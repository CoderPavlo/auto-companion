import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";


const content = {
    uk: {
        title: 'Ціна',
        subTitle: 'Оберіть ідеальний тариф із наших пропозицій, щоб отримати найкращий досвід користування застосунком. Забезпечте свої автомобілі найкращим, обираючи тариф, який вам підходить.',
        tiers: [
            {
                title: 'Безкоштовний',
                price: '0',
                description: [
                    'Безлімітна кількість перевірок',
                    '1 авто в гаражі',
                    'Історія обслуговування',
                    'Загальнодоступні акції',
                ],
                buttonText: 'Зареєструватися безкоштовно',
                buttonVariant: 'outlined',
            },
            {
                title: 'Про',
                subheader: 'Найпопулярніший',
                price: '15',
                description: [
                    'Безлімітна кількість перевірок',
                    'До 5 авто в гаражі',
                    'Історія обслуговування',
                    'Пропозиції від партнерів',
                ],
                buttonText: 'Почати',
                buttonVariant: 'contained',
            },
            {
                title: 'Підприємницький',
                price: '30',
                description: [
                    'Безлімітна кількість перевірок',
                    'Безлімітна місткість гаражу',
                    'Історія обслуговування',
                    'Ексклюзивні пропозиції від партнерів',
                ],
                buttonText: 'Зареєструватися',
                buttonVariant: 'outlined',
            },
        ],
        month: '/місяць'
    },
    en: {
        title: 'Pricing',
        subTitle: 'Choose the perfect plan from our offers to get the best experience using the app. Get the best coverage for your cars by choosing the plan that suits you.',
        tiers: [
            {
                title: 'Free',
                price: '0',
                description: [
                    'Unlimited number of checks',
                    '1 car in the garage',
                    'Service History',
                    'Public offers',
                ],
                buttonText: 'Sign up for free',
                buttonVariant: 'outlined',
            },
            {
                title: 'Pro',
                subheader: 'Most Popular',
                price: '15',
                description: [
                    'Unlimited number of checks',
                    "Up to 5 cars in the garage",
                    'Service History',
                    'Offers from partners',
                ],
                buttonText: 'Get started',
                buttonVariant: 'contained',
            },
            {
                title: 'Enterprise',
                price: '30',
                description: [
                    'Unlimited number of checks',
                    "Unlimited garage capacity",
                    'Service History',
                    "Exclusive offers from partners",
                ],
                buttonText: 'Sign up',
                buttonVariant: 'outlined',
            },
        ],
        
        month: '/month'
    }
}

const PricingPage = () => {

    const { language } = useLanguage();
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <>
            <Container disableGutters maxWidth="md" component="main" sx={{ pt: 1, pb: 6 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    {content[language].title}
                </Typography>
                <Typography variant="h5" align="center" color="secondary" component="p">
                    {content[language].subTitle}
                </Typography>
            </Container>
            <Container maxWidth="lg" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {content[language].tiers.map((tier, index) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={index === 2 ? 12 : 6}
                            md={4}
                        >
                            <Card sx={{ backgroundColor: 'transparent' }} elevation={10}>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    action={index === 1 ? <StarIcon /> : null}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: theme.palette.primary.main
                                    }}
                                />
                                <CardContent
                                    sx={{
                                        backgroundColor: theme.palette.background.default
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,
                                        }}
                                    >
                                        <Typography component="h2" variant="h3" color="text.primary">
                                            ${tier.price}
                                        </Typography>
                                        <Typography variant="h6" color="secondary">
                                            {content[language].month}
                                        </Typography>
                                    </Box>
                                    <ul style={{listStyle: 'none', padding: 0}}>
                                        {tier.description.map((line) => (
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="center"
                                                key={line}
                                            >
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions

                                    sx={{
                                        backgroundColor: theme.palette.background.default
                                    }}>
                                    <Button fullWidth variant={tier.buttonVariant} onClick={()=>navigate('/signUp')}>
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}

export default PricingPage