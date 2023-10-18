import * as React from "react";
import { Card, Grid, Container, CardContent, Typography, CardActions, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
export default function TabPanel(props) {
  const { children, value, index, title, body, action, ...other } = props;
  const theme = useTheme();
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Card sx={{ background: "#0000" }} elevation={0}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                background: "#0000",
                height: 380,
              }}
            >
              <Container>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="text"
                  >
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text">
                    {body}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      color: theme.palette.text.primary,
                      backgroundColor: theme.palette.primary.main,
                    }}
                  >
                    {action}
                  </Button>
                </CardActions>
              </Container>
            </Grid>
            <Grid item xs={0} md={6}></Grid>
          </Grid>
        </Card>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
