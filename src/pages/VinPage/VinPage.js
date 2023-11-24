import React from 'react'

import { useParams } from 'react-router-dom';
const VinPage = () => {
    
  const { vin } = useParams();
  return (
    <div>
      <h2>Vehicle Information</h2>
      <p>VIN: {vin}</p>
    </div>
  )
}

export default VinPage