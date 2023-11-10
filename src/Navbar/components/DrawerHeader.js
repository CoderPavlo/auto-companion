import React from 'react'
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CarRentalIcon from "@mui/icons-material/CarRental";
import { Toolbar } from '@mui/material';
const DrawerHeader = ({click, variant, children}) => {
  return (
    <Toolbar disableGutters 
            sx={{ paddingLeft: '16px', paddingRight: '16px'}}>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={click}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: variant ==='relative' ? { xs: "none", md: "flex" }: 'flex', mr: 1 }}>
            <CarRentalIcon fontSize="large" color="#007BFF" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                ml: 1,
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              AutoCompanion
            </Typography>
          </Box>
          {children}
    </Toolbar>
  )
}

export default DrawerHeader