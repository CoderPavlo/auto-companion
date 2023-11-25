import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from "@mui/icons-material/Settings";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import SettingsDrawer from "./components/SettingsDrawer";
import NavigateDrawer from "./components/NavigateDrawer";
import DrawerHeader from "./components/DrawerHeader";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import { useNavigate } from "react-router-dom";
import { useLanguage } from '../context/LanguageContext';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar({ logged }) {
  const theme = useTheme();

  const { language, setLanguage } = useLanguage();
  const [settingsOpened, setSettingsOpened] = React.useState(false);

  const handleSettingsOpen = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSettingsOpened(open);
  };

  const [openNavigateDrawer, setOpenNavigateDrawer] = React.useState(false);

  const handleNavigateDrawerOpen = () => {
    setOpenNavigateDrawer(!openNavigateDrawer);
  }

  const content = {
    uk: {
      login: 'Ввійти',
      vinCode: 'Vin-код...',
      error: 'Неправильний Vin-код',
      errorDesk: 'VIN має містити 17 символів: цифри, латинські літери великого регістру крім літер O, Q та I!!!',
      ok: 'Гаразд',
    },
    en: {
      login: 'Sign in',
      vinCode: 'Vin-code...',
      error: 'Invalid Vin code',
      errorDesk: 'VIN must contain 17 characters: numbers, uppercase Latin letters except letters O, Q and I!!!',
      ok: 'Ok',
    }
  }


  const navigate = useNavigate();
  const [openAlert, setOpenAlert] = React.useState(false);


  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      const vin = event.target.value;
      const vinRegex = /^[A-HJ-NPR-Z\d]{17}$/;

      if (vinRegex.test(vin)) {
        navigate(`/vehicle/${event.target.value}`);
      } else {
        setOpenAlert(true);
      }
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ background: "#333333", zIndex: 200 }} >
        <DrawerHeader click={handleNavigateDrawerOpen} variant='relative'>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Search sx={{ width: { xs: "100%", md: "40%" } }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder={content[language].vinCode}
                inputProps={{ "aria-label": "search" }}
                sx={{
                  width: '100%',
                }}
                onKeyDown={handleEnterKeyPress}
              />
            </Search>
          </Box>
          <Box >
            {
              !logged &&
              <Button variant="outlined" startIcon={<LoginIcon />} onClick={() => navigate('/signIn')}
                sx={{
                  fontSize: {
                    xs: 0,
                    md: '0.875rem'
                  }
                }}
              >
                {content[language].login}
              </Button>
            }
            {
              logged &&
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>

            }
            <IconButton
              size="large"
              edge="end"
              aria-label="settings"
              aria-haspopup="true"
              onClick={handleSettingsOpen(true)}
              color="inherit"
            >
              <SettingsIcon />
            </IconButton>
          </Box>

          <SettingsDrawer
            open={settingsOpened}
            handleSettingsOpen={handleSettingsOpen} />
        </DrawerHeader>
      </AppBar>

      <NavigateDrawer open={openNavigateDrawer} handleDrawerOpen={handleNavigateDrawerOpen} logged={logged} />
      <Box sx={{
        marginLeft: { xs: '0px', sm: '65px' },
        marginTop: 9,
        marginBottom: 2,
      }}>
        <Outlet />
      </Box>
      <Dialog
        open={openAlert}
        onClose={handleCloseAlert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          '& .MuiDialogContent-root': {
              padding: theme.spacing(2),
          },
          '& .MuiDialogActions-root': {
              padding: theme.spacing(1),
          },
          '& .MuiPaper-root': {
              backgroundColor: theme.palette.background.default,
          },
          '& .MuiTypography-root': {
            color: theme.palette.text.primary,
          }
      }}
      >
        <DialogTitle id="alert-dialog-title">
        {content[language].error}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {content[language].errorDesk}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAlert} autoFocus>
            {content[language].ok}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
