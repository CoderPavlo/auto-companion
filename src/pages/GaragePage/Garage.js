import React from 'react'
import CarCarousel from './components/CarCarousel'
import car1 from "./../components/images/car1.png"
import car2 from "./../components/images/car2.png"
import car3 from "./../components/images/car3.png"
import car4 from "./../components/images/car4.png"
import car5 from "./../components/images/car5.png"
const images = [
  {
    src: car1,
    title: 'Bmw dsc',
  },
  {
    src: car2,
    title: 'Bmw dsc',
  },
  {
    src: car3,
    title: 'Bmw dsc',
  },
  {
    src: car4,
    title: 'Bmw dsc',
  },
  {
    src: car5,
    title: 'Bmw dsc',
  },
  {
    src: car1,
    title: 'Bmw dsc',
  },
  {
    src: car2,
    title: 'Bmw dsc',
  },
  {
    src: car3,
    title: 'Bmw dsc',
  },
  {
    src: car4,
    title: 'Bmw dsc',
  },
  {
    src: car5,
    title: 'Bmw dsc',
  },
  {
    src: car1,
    title: 'Bmw dsc',
  },
  {
    src: car2,
    title: 'Bmw dsc',
  },
  {
    src: car3,
    title: 'Bmw dsc',
  },
  {
    src: car4,
    title: 'Bmw dsc',
  },
  {
    src: car5,
    title: 'Bmw dsc',
  },
];

const Garage = ({theme, language}) => {
  const [selectedCar, setSelectedCar] = React.useState(0);

  return (
    <CarCarousel theme={theme} images={images} selectedCar={selectedCar} setSelectedCar={setSelectedCar}/>
  )
}

export default Garage