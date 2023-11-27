import React from 'react'
import {
    Button,
    Box,
    IconButton,
    FormControl,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    InputLabel,
    Select,
    MenuItem,
    TextField,
} from '@mui/material'


import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import {
    Close,
} from '@mui/icons-material';



import en from 'dayjs/locale/en-gb';
import uk from 'dayjs/locale/uk';
import ImageInput from '../../components/ImageInput';

const content = {
    uk: {
        title: 'Додавання авто в гараж',
        name: 'Назва',
        useLabel: 'Використання *',
        using: ['Щодня', 'Кілька разів на тиждень', 'Раз на тиждень', 'Кілька разів на місяць', 'Раз на місяць', 'Рідко '],
        date: 'Дата останнього ТО*',
        save: 'Зберегти',
    },
    en: {
        title: 'Adding a car to the garage',
        name: 'Name',
        useLabel: 'Usage *',
        using: ['Daily', 'Several times a week', 'Once a week', 'Several times a month', 'Once a month', 'Rarely '],
        date: 'Date of last Maintenance*',
        save: 'Save',
    }
}

const CarDialog = ({ theme, language, open, handleClickClose, initialName, setSucess }) => {

    const [name, setName] = React.useState(initialName);
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [using, setUsing] = React.useState();
    const [date, setDate] = React.useState();

    const [errorName, setErrorName] = React.useState(false);
    const [errorUsing, setErrorUsing] = React.useState(false);
    const [errorDate, setErrorDate] = React.useState(false);

    const handleSave = () => {
        if (name === undefined || name === '') {
            setErrorName(true);
            return
        }

        if (using === undefined || using === '') {
            setErrorUsing(true);
            return;
        }
        if (date === undefined || date === '') {
            setErrorDate(true);
            return;
        }
        setSucess(true);
        handleClickClose();

    }


    return (
        <Dialog
            onClose={handleClickClose}
            aria-labelledby="customized-dialog-title"
            open={open}
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
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                {content[language].title}
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClickClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <Close />
            </IconButton>
            <DialogContent dividers>

                <TextField
                    error={errorName}
                    required
                    fullWidth
                    name="name"
                    label={content[language].name}
                    id="name"
                    value={name}
                    onChange={(event) => {setName(event.target.value); setErrorName(false); }}
                    sx={{
                        // Колір введеного тексту
                        '& input': {
                            color: theme.palette.text.primary,
                        },

                        // Колір обведення елемента TextField (не введеного тексту)
                        '& fieldset': {
                            borderColor: theme.palette.secondary.main,
                        },

                        "label": {
                            color: theme.palette.secondary.main
                        }
                    }}
                />
                <Box sx={{ marginTop: 2 }}>
                    <ImageInput language={language} theme={theme} selectedImage={selectedImage} setSelectedImage={setSelectedImage} type='car' />
                </Box>

                <Box sx={{ marginTop: 2 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" sx={{ color: theme.palette.secondary.main }}>
                            {content[language].useLabel}
                        </InputLabel>
                        <Select

                            error={errorUsing}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            required
                            value={using}
                            label={content[language].useLabel}
                            onChange={(event) => {setUsing(event.target.value); setErrorUsing(false);}}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        backgroundColor: theme.palette.background.default,
                                    }
                                }
                            }}
                            sx={{
                                '& .MuiInputBase-input':
                                {
                                    color: theme.palette.text.main,
                                },
                                '& fieldset': {
                                    borderColor: theme.palette.secondary.main,
                                },
                                '& .MuiSelect-icon': {
                                    color: theme.palette.secondary.main,
                                },
                            }}
                        >
                            {content[language].using.map((item, index) => (

                                <MenuItem key={item} value={index}>{item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                <Box sx={{ marginTop: 1, width: '100%' }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={language === 'uk' ? uk : en}>
                        <DemoContainer components={['DatePicker']} >
                            <DatePicker label={content[language].date} value={date} onChange={(newValue) => {setDate(newValue); setErrorDate(false);}}
                                sx={{
                                    width: '100%',

                                    '& fieldset': {
                                        borderColor: errorDate ? theme.palette.error.main : theme.palette.secondary.main,
                                    },
                                    '& .MuiSvgIcon-root ': {
                                        color: theme.palette.secondary.main,
                                    },
                                    "label": {
                                        color: theme.palette.secondary.main
                                    }
                                }}
                                slotProps={{
                                    layout: {
                                        sx: {
                                            '.MuiDateCalendar-root': {
                                                color: theme.palette.text.primary,
                                                backgroundColor: theme.palette.background.default,
                                            },

                                            "& .MuiIconButton-root": {
                                                color: theme.palette.secondary.main,
                                            },

                                            '& .MuiTypography-root': {
                                                color: theme.palette.secondary.main,
                                            },

                                            "& .css-1eyvkhb-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected)": {
                                                borderColor: theme.palette.secondary.main,
                                            },
                                        }
                                    }
                                }}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </Box>
            </DialogContent>
            <DialogActions>

                <Button autoFocus onClick={handleSave}>
                    {content[language].save}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CarDialog