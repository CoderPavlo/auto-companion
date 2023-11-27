import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const content = {
    uk : {
        cancel: 'Скасувати',
        ok: 'Гаразд',
    
    },
    en : {
        cancel: 'Cancel',
        ok: 'Ok'
    }

}

export default function AlertDialog({theme, language, title, text, open, handleClose, handleClickOK}) {
  return (
      <Dialog
        open={open}
        onClose={handleClose}
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

                width: '480px',
            },
        }}
      >
        <DialogTitle id="alert-dialog-title" >
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" color={theme.palette.text.primary}>
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{content[language].cancel}</Button>
          <Button onClick={()=>{handleClickOK(); handleClose();}} autoFocus>
          {content[language].ok}
          </Button>
        </DialogActions>
      </Dialog>
  );
}