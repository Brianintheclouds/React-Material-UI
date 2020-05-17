import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Background from '../images/bgone.jpg';
import Backgroundtwo from '../images/bgtwo.jpeg';
import Backgroundthree from '../images/bgthree.jpg';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(20),
    textAlign: 'center',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    color: theme.palette.text.secundary,
    spacing: 0,
  },
  papertwo: {
    backgroundImage: `url(${Backgroundtwo})`,
    backgroundSize: 'cover',
    padding: theme.spacing(20),
    color: theme.palette.primary.light,
  },
  paperthree: {
    backgroundImage: `url(${Backgroundthree})`,
    backgroundSize: 'cover',
    padding: theme.spacing(20),
    textAlign: 'center',
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paper} m={0}>
	    <h1>Welcome</h1>
	    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has                  been the industry s standard dummy text ever since the 1500s, when an unknown printer took a                galley of type and scrambled it to make a type specimen book.</p>
	  </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.papertwo}>
	  </Paper>
        </Grid>
        <Grid item xs={12} sm={6} m={0}>
          <Paper className={classes.paperthree}>
          
	  </Paper>
        </Grid>
       </Grid>
    </div>
  );
}
