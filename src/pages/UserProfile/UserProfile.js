import React, { useState } from 'react';
import {
  Container,
  Button,
  Grid,
  Avatar,
  Menu,
  MenuItem,
  Card,
  CardContent,
  useTheme,
  Typography,
} from '@mui/material';
import PaymentMethods from './components/PaymentMethods';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useLanguage } from "../../context/LanguageContext";
import avatar from "../../images/avatar.png"

import { getUserId, request, setAuthHeader } from '../../helpers/axios_helper';
function getUser(id){
  request(
    "GET",
    "/users",
    {
      id: id,
    }).then(
      (response) => {
        console.log(response.data);
      }).catch(
        (error) => {
          // if (error.response.status === 401) {
          //     setAuthHeader(null);
          // }
          console.log(error);
        }
      );
}

function changeEmail(new_email){
  request(
    "PUT",
    "/users",
    {
      new_email: new_email,
    }).then(
      (response) => {
        console.log(response);
      }).catch(
        (error) => {
          // if (error.response.status === 401) {
          //     setAuthHeader(null);
          // }
          console.log(error);
        }
      );
}


function changePassword(new_password){
  request(
    "PUT",
    "/users",
    {
      new_password: new_password,
    }).then(
      (response) => {
        console.log(response);
      }).catch(
        (error) => {
          // if (error.response.status === 401) {
          //     setAuthHeader(null);
          // }
          console.log(error);
        }
      );
}

function changeData(name, lastname){
  request(
    "PUT",
    "/users",
    {
      name: name,
      lastname: lastname,
    }).then(
      (response) => {
        console.log(response);
      }).catch(
        (error) => {
          // if (error.response.status === 401) {
          //     setAuthHeader(null);
          // }
          console.log(error);
        }
      );
}
function changeImage(image){
  request(
    "PUT",
    "/users",
    {
      image: image
    }).then(
      (response) => {
        console.log(response);
      }).catch(
        (error) => {
          // if (error.response.status === 401) {
          //     setAuthHeader(null);
          // }
          console.log(error);
        }
      );
}
const UserProfile = ( ) => {
  React.useEffect(() => {
    getUser(1);
    changeEmail('sadav@gmail.com');
    changePassword('pasdsdc');
    changeData('savds', 'scvfdvd');
    changeImage(avatar);
  });
  const { language } = useLanguage();
  const theme = useTheme(); // Use the useTheme hook to access the current theme
  const [userAvatar, setUserAvatar] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUserAvatar(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const content={
    uk:{
      photo: "Завантажити фото",
      wal:"Гаманець",
      sub:"Підписки",
      del:"Видалити фото"
    },
    en:{
      photo: "Upload photo",
      wal:"Wallet",
      sub:"Subscriptions",
      del:"Delete photo"
    }
  }

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleDeletePhoto = () => {
    setUserAvatar(null);
    handleMenuClose();
  };
  
  const userInfo = {
    firstName: 'Pavlo',
    lastName: 'Herasymchuk',
    email: 'pavlo@gmail.com',
  };
  return (
    <Container maxWidth="100%" sx={{ background: theme.palette.background.default }}>
    <Grid container spacing={2}>
    
    <Grid item xs={12} md={4} >
      <Card sx={{ background: theme.palette.background.default, height:625 }}>
        <Container>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar
              alt="User Avatar"
              src={userAvatar || avatar}
              sx={{ width: 250, height: 250, my: 2, border: `1px solid ${theme.palette.secondary.main}` }}
              imgProps={{ onError: (e) => (e.target.src = avatar) }}
              onClick={handleMenuOpen}
            />
            <Typography variant="h4" component="div" color="White" align="center">
              <div>{userInfo.firstName} {userInfo.lastName}</div>
            </Typography>
            <Typography variant="h6" component="div" color="White" align="center">
              <div>{userInfo.email}</div>
            </Typography>
            <label htmlFor="avatar-upload">
              <input
                style={{ display: 'none' }}
                accept="image/*"
                id="avatar-upload"
                type="file"
                onChange={handleAvatarChange}
              />
              <Button sx={{ width: 220, display: 'center', mt: 10, /*color: 'White'*/ }} variant="text" component="span">
                {content[language].photo}
                <AddPhotoAlternateIcon />
              </Button>
            </label>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={handleDeletePhoto} sx={{ color: '#333333' }}>
                {content[language].del}
              </MenuItem>
            </Menu>
            <Button sx={{ width: 220, display: 'center', mt: 1, /*color: 'White'*/ }} variant="text" component="span">
              {content[language].wal}
              <AccountBalanceWalletIcon />
            </Button>
            <Button sx={{ width: 220, display: 'center', mt: 1, /*color: 'White'*/ }} variant="text" component="span">
              {content[language].sub}
              <SubscriptionsIcon />
            </Button>
          </CardContent>
        </Container>
      </Card>
    </Grid>

    <Grid item xs={12} md={8} >
      <Card sx={{   display: "flex", justifyContent: "center", alignItems: "center", background: theme.palette.background.default   }}>
        <PaymentMethods />
      </Card>
    </Grid>
  </Grid>
</Container>
  );
};

export default UserProfile;
