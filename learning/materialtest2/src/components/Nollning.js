import React from 'react'
import {Grid, Typography, Divider} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Roles from './Roles';
import Welcome from './Welcome';

const useStyles = makeStyles({
    container: {
        margin: 0,
        maxWidth: "100%",
    },
    title: {
        marginTop: "20px",
    },
    titleText: {
        marginBottom: "32px",
    }
});

const text = {
    swe: {
        title1: "Välkommen till",
        title2: "D-sektionen!"
    },
    eng: {
        title1: "WELCOME TO THE COMPUTER SCIENCE GUILD!"
    }
}


function Nollning(props) {
    const classes = useStyles();

    

    return (
        <Grid container spacing={4} justify="center" className={classes.container}>
            <Grid className={classes.title} item xs={12}>
                <Typography align="center" variant="h1" className={classes.titleText}>
                    {text[props.lang].title1} <nobr>{text[props.lang].title2}</nobr>
                </Typography>
                <Divider/>
            </Grid>
            <Grid container direction="column" item xs={12} md={10} lg={9} xl={8}>
                <Welcome lang={props.lang}/>
            </Grid>
            <Grid container item xs={12} md={10} lg={9} xl={8}>
                <Roles lang={props.lang}/>
            </Grid>
        </Grid>
    )
}

export default Nollning;
