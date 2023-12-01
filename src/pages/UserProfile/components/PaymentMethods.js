  import React from 'react';
  import { Typography, Card, CardContent, Grid, TextField, CardMedia } from '@mui/material';
  import MonobankImage from '../img/mono.png'; 
  import PrivateBankImage from '../img/privatbank.jpg';
  import RevolutImage from '../img/revolut.png';
  import WiseImage from '../img/wise.png';
  import OschadBankImage from '../img/oshat.jpg';
  import Trc20Image from '../img/tether.png';
  import { useLanguage } from "../../../context/LanguageContext";

  const PaymentMethods = ({ paymentMethod }) => {
    const { language } = useLanguage();
    const paymentOptions = [
      { value: 'monobank', label: 'Monobank', image: MonobankImage },
      { value: 'privateBank', label: 'PrivateBank', image: PrivateBankImage },
      { value: 'revolut', label: 'Revolut', image: RevolutImage },
      { value: 'wise', label: 'Wise', image: WiseImage },
      { value: 'oschadBank', label: 'Oschad Bank', image: OschadBankImage },
      { value: 'trc20', label: 'TRC-20', image: Trc20Image },
    ];
    
    const content={
      uk:{
        pay: "Методи оплати",
      },
      en:{
        pay: "Payment Methods",
      }
    }


    return (
      <div>
        <Typography variant="h6" gutterBottom >
          {content[language].pay}
        </Typography>

        <Grid container spacing={2}>
          {paymentOptions.map((option) => (
            <Grid item key={option.value} xs={12} sm={6} md={4}>
              <Card
                variant="outlined"
                sx={{
                  /*cursor: 'pointer',*/
                  backgroundColor: paymentMethod === option.value ? '#e3f2fd' : '#333333',
                  color: paymentMethod === option.value ? '#333333' : 'white',
                  
                }}
                /*onClick={() => onPaymentMethodChange({ target: { value: option.value } })}*/
              >
                <CardMedia
                  component="img"
                  alt={option.label}
                  height="200"
                  image={option.image}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6">{option.label}</Typography>
                  {/* Additional details or input for each payment method if needed */}
                  {paymentMethod === option.value && (
                    <TextField label={`Details for ${option.label}`} fullWidth sx={{ mt: 2 }} />
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  };

  export default PaymentMethods;
