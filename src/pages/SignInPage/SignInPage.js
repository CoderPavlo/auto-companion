import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import avatar from '../../images/avatar.png'

import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
export default function SignInPage({ theme, language, setLogged }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    navigate('/');
    setLogged(true);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
      signIn: 'Увійти',
      email: 'Електронна пошта',
      password: 'Пароль',
      forgPass: 'Забули пароль?',
      remember: "Запам'ятати мене",
      dontHaveAc: "Не маєте акаунту? Зареєструватися",
    },
    en: {
      signIn: 'Sign in',
      email: 'Email',
      password: 'Password',
      forgPass: 'Forgot password?',
      remember: 'Remember me',
      dontHaveAc: "Don't have an account? Sign Up",

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
          <Avatar sx={{ m: 1 }} src={avatar} />
          <Typography component="h1" variant="h5">
            {content[language].signIn}
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <StyledTextField
              margin="normal"
              required
              fullWidth
              id="email"
              label={content[language].email}
              name="email"
              autoComplete="email"
              autoFocus
            />
            <StyledTextField
              margin="normal"
              required
              fullWidth
              name="password"
              label={content[language].password}
              type="password"
              id="password"
              autoComplete="current-password"

            />
            <FormControlLabel
              control={<Checkbox value="remember" sx={{ color: theme.palette.secondary.main }} />}
              label={content[language].remember}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {content[language].signIn}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  {content[language].forgPass}
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signUp" variant="body2">
                  {content[language].dontHaveAc}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}