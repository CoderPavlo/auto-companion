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

import { getUserId, request, setAuthHeader } from '../../helpers/axios_helper';

const SignUpPage = ({ theme, language, setLogged }) => {

    const [selectedImage, setSelectedImage] = React.useState(null);
    const [register, setRegister] = React.useState(true);

    const handleSubmit = (event) => {
        const data = new FormData(event.currentTarget);
        event.preventDefault();
        const name = data.get('firstName');

        const lastName = data.get('lastName');
        const email = data.get('email');

        if (email === undefined || !email.includes('@')) {
            setErrorEmail(true);
            return;
        }
        const password = data.get('password');
        let regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
        if (password === undefined || !regex.test(password)) {
            setErrorPassword(true);
            return;
        }

        request(
            "POST",
            "/auth/register",
            {
                firstname: name,
                lastname: lastName,
                email: email,
                password: password,
                role: '0'
            }).then(
                (response) => {
                    setAuthHeader(response.data.access_token);
                    setLogged(true);
                    setRegister(false);
                }).catch(
                    (error) => {
                        setAuthHeader(null);
                    }
                );
    };

    const handleSubmitAvatar = (event) => {
        event.preventDefault();
        if (selectedImage) {
            request("POST", `/users/${getUserId()}/uploadImage`, {
                image: selectedImage,
            })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        navigate('/');
    }


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

            avatar: 'Завантаження аватару',
            upload: 'Завантажити'
        },
        en: {
            signUp: 'Sign Up',
            firstName: "First Name",
            lastName: "Last Name",
            email: 'Email',
            password: 'Password',
            reseiveProm: 'I want to receive offers, promotions and updates by email.',
            haveAc: 'Already have an account? Sign in',
            avatar: 'Load avatar',
            upload: 'Upload'
        }
    }

    const navigate = useNavigate();

    const [errorEmail, setErrorEmail] = React.useState(false);
    const [errorPassword, setErrorPassword] = React.useState(false);

    return (
        <Grid container component="main" sx={{ height: '100vh' }} >
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
                        {register ? content[language].signUp : content[language].avatar}
                    </Typography>
                    {register &&
                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <StyledTextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label={content[language].firstName}
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
                                    <StyledTextField
                                        required
                                        fullWidth
                                        id="email"
                                        label={content[language].email}
                                        name="email"
                                        autoComplete="email"
                                        error={errorEmail}

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
                                        error={errorPassword}
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
                    }
                    {!register &&

                        <Box width='100%' component="form" onSubmit={handleSubmitAvatar} sx={{ mt: 3 }}>
                            <ImageInput language={language} theme={theme} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />

                            <Button
                                type='submit'
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                {content[language].upload}
                            </Button>
                        </Box>
                    }
                </Box>
            </Grid>
        </Grid >
    )
}

export default SignUpPage;