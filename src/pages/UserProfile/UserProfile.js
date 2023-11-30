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
import avatar from './img/holder.jpg';
import { useLanguage } from "../../context/LanguageContext";


const UserProfile = ( ) => {
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
  
  const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};
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
              sx={{ width: 250, height: 250, my: 2 }}
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
