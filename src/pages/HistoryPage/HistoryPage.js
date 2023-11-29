import React from 'react'
import {
    Container,
    Typography, Grid,
    Card,
    CardContent,
    List,
    ListSubheader,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
    ListItem,
    Button,
} from '@mui/material';


import ExpandLess from '@mui/icons-material/ExpandLess';

import ExpandMore from '@mui/icons-material/ExpandMore';


import { eventTypes } from '../components/eventTypes';
import Editor from './components/Editor';


function getIconByType(type) {
    let foundIcon = null;

    eventTypes.forEach(event => {
        if (event.type === type) {
            foundIcon = event.icon;
        }
    });

    return foundIcon;
}


function getColorByType(type) {
    let color = null;

    eventTypes.forEach(event => {
        if (event.type === type) {
            color = event.color;
        }
    });

    return color;
}

const events = [
    {
        date: '25.11.2023',
        type: 'oil_change',
        desk: 'Заміна масла',
    },

    {
        date: '25.10.2023',
        type: 'belt_change',
        desk: 'Заміна ременів',
    },

    {
        date: '25.11.2022',
        type: 'battery_replacement',
        desk: 'Планова заміна акумулятора',
    },

    {
        date: '30.09.2022',
        type: 'ac_refill',
        desk: 'Заправка кондиціонера',
    },
    {
        date: '02.09.2022',
        type: 'routine_maintenance',
        desk: 'Планове технічне обслуговування',
    },
];

const EditEvent = {
    date: '30.11.2023',
    type: 'routine_maintenance',
    desk: 'Планове технічне обслуговування',
};

const content = {
    uk : {
        history: 'Історія обслуговування',
        save: 'Зберегти',
    },
    en : {
        history: 'Service history',
        save: 'Save',
    },
}

const HistoryPage = ({ theme, language, car, vin, make, model }) => {
    const initialStateArray = Array.from({ length: events.length }, () => false);
    const [open, setOpen] = React.useState(initialStateArray);
    const [edit, setEdit] = React.useState(true);

    const updateState = (index) => {
        setOpen((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    }

    const [editorHtml, setEditorHtml] = React.useState('');

    const [loadedHtml, setLoadedHtml] = React.useState('');

    const save = () => {
        setLoadedHtml(editorHtml);
        setEdit(false);
    }

    return (
        <Grid container spacing={5} sx={{ paddingLeft: { xs: 0, md: 20 }, paddingRight: { xs: 0, md: 20 }, }}>
            <Grid item xs={6}>
                <img src={car} alt='car' style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color={theme.palette.text.main}
                >
                    {make}{' '}{model}
                </Typography>
                <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    color={theme.palette.secondary.main}
                >
                    {vin}
                </Typography>
            </Grid>
            <Grid item xs={12}>

                <Card sx={{ background: theme.palette.background.default, margin: 5 }}>
                    <CardContent>
                        <List
                            sx={{ width: '100%' }}
                            component="div"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                                <ListSubheader component="div" id="nested-list-subheader" sx={{ backgroundColor: 'transparent', color: theme.palette.text.primary, fontWeight: 'bold' }}>
                                    {content[language].history}
                                </ListSubheader>
                            }
                        >
                            {
                                edit &&
                                <>
                                    <ListItem key={`item0`}>
                                        <ListItemIcon sx={{ color: getColorByType(EditEvent.type) }}>
                                            {getIconByType(EditEvent.type)}
                                        </ListItemIcon>
                                        <ListItemText primary={EditEvent.desk} secondary={EditEvent.date} sx={{ '& .MuiListItemText-secondary': { color: theme.palette.secondary.main } }} />
                                    </ListItem>

                                    <Collapse key={`collapse0`} in={true} timeout="auto" unmountOnExit>
                                        <Container>
                                            <Editor theme={theme} placeholder='dvdvs' editorHtml={editorHtml} setEditorHtml={setEditorHtml} />
                                            <Container sx={{ marginTop: 1, display: 'flex', justifyContent: 'flex-end' }} disableGutters>
                                                <Button
                                                    variant="outlined"
                                                    size="medium"
                                                    onClick={save}
                                                    sx={{
                                                        color: theme.palette.primary.main,
                                                    }}
                                                >
                                                    {content[language].save}
                                                </Button>
                                            </Container>

                                        </Container>
                                    </Collapse>

                                </>

                            }


                            {events.map((item, index) => (
                                <>
                                    <ListItemButton key={`button${index + 1}`} onClick={() => updateState(index)}>
                                        <ListItemIcon sx={{ color: getColorByType(item.type) }}>
                                            {getIconByType(item.type)}
                                        </ListItemIcon>
                                        <ListItemText primary={item.desk} secondary={item.date} sx={{ '& .MuiListItemText-secondary': { color: theme.palette.secondary.main } }} />
                                        {open[index] ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                    <Collapse key={`collapse${index + 1}`} in={open[index]} timeout="auto" unmountOnExit>
                                        <Container dangerouslySetInnerHTML={{ __html: loadedHtml }}>

                                        </Container>
                                    </Collapse>
                                </>

                            ))}
                        </List>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default HistoryPage