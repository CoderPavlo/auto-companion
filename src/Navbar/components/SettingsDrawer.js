import React from "react";
import {
  ListItemIcon,
  ListItemText,
  Container,
  Drawer,
  Paper,
  Divider,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
  IconButton,
} from "@mui/material";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import CloseIcon from "@mui/icons-material/Close";

import UkraineFlag from "../flags/UkraineFlag";
import GreatBritainFlag from "../flags/GreatBritainFlag";

import { useTheme } from "@mui/material/styles";
import { useLanguage } from '../../context/LanguageContext';

const SettingsDrawer = ({ open, handleSettingsOpen }) => {
  const theme = useTheme();
  const { language, setLanguage } = useLanguage();

  const [lang, setLang] = React.useState("uk");
  const [selectTheme, setSelectTheme] = React.useState("dark");

  const handleChangeLang = (event, newLang) => {
    setLang(newLang);
    setLanguage(newLang);
  };

  const handleChangeTheme = (event, newTheme) => {
    setSelectTheme(newTheme);
  };

  const StyledToggleButtonGroup = ({ value, change, children }) => {
    return (
      <ToggleButtonGroup
        color="primary"
        value={value}
        exclusive
        onChange={change}
        aria-label="Platform"
        sx={{ width: "100%", marginTop: "5px", marginBottom: "5px" }}
      >
        {children}
      </ToggleButtonGroup>
    );
  };
  const StyledTypography = ({ children }) => {
    return (
      <Typography variant="subtitle1" color="text" sx={{ marginTop: "15px" }}>
        {children}
      </Typography>
    );
  };

  const styles = {
    ToggleButton: {
      width: "50%",
      color: theme.palette.text.primary,
    },
    Icon: {
      width: 36,
      height: 36,
    },
    ListItemText: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
    },
  };

  const content = {
    uk: {
      title: "Налаштування",
      language: "Мова",
      theme: "Тема",
      dark: "Темна",
      light: "Світла",
    },
    en: {
      title: "Settings",
      language: "Language",
      theme: "Theme",
      dark: "Dark",
      light: "Light",
    },
  };
  

  return (
    <Drawer anchor="right" open={open} onClose={handleSettingsOpen(false)}>
      <Paper
        sx={{
          background: theme.palette.background.default,
          height: "100%",
          width: 360,
          padding: 1,
        }}
        square
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "2px",
          }}
        >
          <Typography gutterBottom variant="h6" component="div" color="primary">
            {content[language].title}
          </Typography>
          <IconButton
            size="small"
            edge="end"
            aria-label="close"
            aria-haspopup="true"
            onClick={handleSettingsOpen(false)}
            color="primary"
          >
            <CloseIcon />
          </IconButton>
        </Container>
        <Divider />
        <Container sx={{ padding: "10px" }} disableGutters>
          <StyledTypography>{content[language].language}</StyledTypography>
          <StyledToggleButtonGroup value={lang} change={handleChangeLang}>
            <ToggleButton value="uk" sx={styles.ToggleButton}>
              <Container sx={{ display: "flex", flexDirection: "row" }}>
                <ListItemIcon sx={styles.Icon}>
                  <UkraineFlag />
                </ListItemIcon>
                <ListItemText primary="UK" sx={styles.ListItemText} />
              </Container>
            </ToggleButton>
            <ToggleButton value="en" sx={styles.ToggleButton}>
              <Container sx={{ display: "flex", flexDirection: "row" }}>
                <ListItemIcon sx={styles.Icon}>
                  <GreatBritainFlag />
                </ListItemIcon>
                <ListItemText primary="EN" sx={styles.ListItemText} />
              </Container>
            </ToggleButton>
          </StyledToggleButtonGroup>

          <StyledTypography>{content[language].theme}</StyledTypography>
          <StyledToggleButtonGroup
            value={selectTheme}
            change={handleChangeTheme}
          >
            <ToggleButton value="dark" sx={styles.ToggleButton}>
              <DarkModeOutlinedIcon sx={styles.Icon} />
              <ListItemText primary={content[language].dark} sx={styles.ListItemText} />
            </ToggleButton>
            <ToggleButton value="light" sx={styles.ToggleButton}>
              <LightModeOutlinedIcon sx={styles.Icon} />
              <ListItemText primary={content[language].light} sx={styles.ListItemText} />
            </ToggleButton>
          </StyledToggleButtonGroup>
        </Container>
      </Paper>
    </Drawer>
  );
};

export default SettingsDrawer;
