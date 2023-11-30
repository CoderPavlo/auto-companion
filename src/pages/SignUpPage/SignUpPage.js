import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import avatar from '../../images/avatar.png'
import Typography from '@mui/material/Typography';

import Paper from '@mui/material/Paper';

import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import ImageInput from '../components/ImageInput';
const SignUpPage = ({ theme, language, setLogged }) => {
    
    const [selectedImage, setSelectedImage] = React.useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        navigate('/');
        setLogged(true);
        localStorage.setItem('userInfo', JSON.stringify({
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password'),
          }));
    };

    const StyledTextField = styled(TextField)({

        // Колір введеного тексту
        '& input': {
            color: theme.palette.text.primary,
        },

        // Колір обведення елемента TextField (не введеного тексту)
        '& fieldset': {
            borderColor: theme.palette.secondary.main,
        },

        "label": {
            color: theme.palette.secondary.main
        }
    });

    const content = {
        uk: {
            signUp: 'Зареєструватися',
            firstName: "Ім'я",
            lastName: "Прізвище",
            email: 'Електронна пошта',
            password: 'Пароль',
            reseiveProm: 'Я хочу отримувати пропозиції, акції та оновлення електронною поштою.',
            haveAc: 'Вже є аккаунт? Увійти',
        },
        en: {
            signUp: 'Sign Up',
            firstName: "First Name",
            lastName: "Last Name",
            email: 'Email',
            password: 'Password',
            reseiveProm: 'I want to receive offers, promotions and updates by email.',
            haveAc: 'Already have an account? Sign in',

        }
    }

    const navigate = useNavigate();

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundColor: theme.palette.background.default,
                    backgroundImage: 'url(https://source.unsplash.com/random?cars)',
                    //backgroundImage: `linear-gradient(to left, ${theme.palette.background.default}, transparent), url(https://source.unsplash.com/random?cars)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ backgroundColor: theme.palette.background.default }}>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1 }} src={selectedImage ? URL.createObjectURL(selectedImage) : avatar} />
                    <Typography component="h1" variant="h5">
                        {content[language].signUp}
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <StyledTextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label={content[language].firstName}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <StyledTextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label={content[language].lastName}
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                               <ImageInput language={language} theme={theme} selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
                            </Grid>
                            <Grid item xs={12}>
                                <StyledTextField
                                    required
                                    fullWidth
                                    id="email"
                                    label={content[language].email}
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <StyledTextField
                                    required
                                    fullWidth
                                    name="password"
                                    label={content[language].password}
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" sx={{ color: theme.palette.secondary.main }} />}
                                    label={content[language].reseiveProm}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {content[language].signUp}
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/signIn" variant="body2">
                                    {content[language].haveAc}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default SignUpPage;