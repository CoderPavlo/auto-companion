import React from 'react'

import { useNavigate } from "react-router-dom";

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Button, Card, CardContent, CardActions } from "@mui/material";

const HomeCard = ({theme, title, navigateTo, children, marginTop=0}) => {
    const navigate = useNavigate();
    return (
        <Card sx={{ background: theme.palette.background.default, marginTop: {marginTop}}}>
            <CardActions>
                <Button endIcon={<NavigateNextIcon />} sx={{ color: theme.palette.primary.main }}
                onClick={()=>navigate(navigateTo)}>
                    {title}
                </Button>
            </CardActions>
            <CardContent sx={{height:'100%'}}>
            {children}
            </CardContent>
        </Card>
    )
}

export default HomeCard