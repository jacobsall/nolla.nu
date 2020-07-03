import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid, Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: 'black',
    },
  }));

function Home(){
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid container spacing={3} justify="center">
        <Grid item xs={12} sm={10}>
          <Paper className={classes.paper}>
              <Typography variant="h4">Hejsan blivande teknolog!</Typography>
              <Divider/>
              <Typography paragraph variant="body1">
              Stort grattis till att du har blivit antagen till Sveriges i särklass roligaste skola: LTH! För att du ska känna dig välkommen och inte alltför vilsen i början så kommer du genomgå en nollning. Den sträcker sig över de första veckorna och tillsammans kommer vi försöka se till att de här veckorna blir några av de roligaste i ditt liv. Eftersom nollningen har ett sådant fullspäckat schema så är det inte säkert att du orkar vara med på allt, och det är helt okej. Du väljer själv vilka aktiviteter du vill delta i. Något som däremot är säkert är att du kommer träffa väldigt många vänner och ha oerhört kul under tiden!
              </Typography>
              <Typography paragraph>
              Uppropet kommer hållas den 27:e augusti klockan 09:15 i Kåraulan både för de som ska studera Datateknik och de som ska studera InfoCom. Kåraulan hittar du på Sölvegatan 22A. Se till att vara i tid; det är obligatoriskt att vara där för att få behålla sin plats vid utbildningen. Om du har några frågor som rör nollningen så kan du alltid höra av dig till staben@dsek.se. Väl mött!
              </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
            </Grid>
        </Grid>
    )
}

export default Home;
