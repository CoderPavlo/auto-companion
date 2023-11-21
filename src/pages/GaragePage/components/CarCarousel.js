import React, { useState, useEffect } from 'react';
import Slider from "react-slick";

import { styled } from '@mui/material/styles';
import { ButtonBase, IconButton, Typography } from '@mui/material';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';

import { useMediaQuery } from 'react-responsive';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important'
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.background.default,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

const CarCarousel = ({ theme, images, selectedCar, setSelectedCar }) => {
  const isXSmallScreen = useMediaQuery({ maxWidth: 600 });
  const isSmallScreen = useMediaQuery({ minWidth: 601, maxWidth: 960 });
  const isMediumScreen = useMediaQuery({ minWidth: 961, maxWidth: 1280 });
  const isLargeScreen = useMediaQuery({ minWidth: 1281, maxWidth: 1920 });
  const isXLargeScreen = useMediaQuery({ minWidth: 1921 });

  const [slides, setSlides] = useState({ toShow: 5, toScroll: 3 });


  useEffect(() => {
    setSlides((prevValue) => {
      if (isXSmallScreen) {
        return { toShow: 1, toScroll: 1 };
      } else if (isSmallScreen) {
        return { toShow: 2, toScroll: 1 };
      } else if (isMediumScreen) {
        return { toShow: 3, toScroll: 2 };
      } else if (isLargeScreen) {
        return { toShow: 5, toScroll: 3 };
      } else if (isXLargeScreen) {
        return { toShow: 7, toScroll: 4 };
      } else {
        return prevValue;
      }
    });
  }, [isXSmallScreen, isSmallScreen, isMediumScreen, isLargeScreen, isXLargeScreen]);


  const SlickArrowLeft = ({ currentSlide, onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{
        visibility: currentSlide === 0 ? 'hidden' : 'visible',
      }}
      color='primary'>
      <ArrowBackIos />
    </IconButton>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{
        visibility: currentSlide >= slideCount - slides.toShow ? 'hidden' : 'visible',
      }}
      color='primary'
    >
      <ArrowForwardIos />
    </IconButton>
  );

  const settings = {
    arrows: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slides.toShow,
    slidesToScroll: slides.toScroll,
  };


  return (
    <Slider {...settings} style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {images.map((image, index) => (
        <div>
          <ImageButton
            focusRipple
            key={image.title}
            sx={{
              width: '90%',
              height: { xs: '300px', sm: '200px' },
              display: 'flex',
              alignItems: 'end',
            }}
            onClick={() => setSelectedCar(index)}
          >
            <img src={image.src} alt={image.title}
              style={{
                position: 'absolute',
                width: '100%',
                top: 0,
                bottom: 0,
              }} />
            <Typography
              component="h6"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}

              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
            <ImageBackdrop className="MuiImageBackdrop-root" sx={{ opacity: selectedCar === index ? 0.1 : 0.8 }} />
          </ImageButton>
        </div>
      ))}
    </Slider>
  );
}

export default CarCarousel