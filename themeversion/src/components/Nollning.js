import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import { makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import Roles from './Roles'
import Welcome from './Welcome'
import logo from '../images/logo2.png'
import arexx from '../images/g.jpg'
import staos from '../images/m.jpg'
import atari from '../images/m2.jpg'
import luma from '../images/j.jpg'
import vorio from '../images/j2.jpg'
import nox from '../images/n.jpg'

const useStyles = makeStyles({
    container: {
        margin: 0,
        maxWidth: "100%",
        /*background: "#757575",*/
        
    },
    logoBox: {
        height: "100vh"
    },
    logo: {
        height: "auto",
        width: "100%",
    },
    profile: {
        /*verticalAlign: "middle",*/
        width: "260px",
        height: "260px",
        borderRadius: "50%"
    }
});



function Nollning(props) {
    const classes = useStyles();

    const theme = createMuiTheme({
        typography: {
          fontFamily: 'stabFont',
        },
    });
    
    return (
        <Grid container spacing={8} direction="column" alignItems="center" className={classes.container} >
            <Grid item direction="column" alignItems="center" xs={12} sm={8} lg={4} className={classes.logoBox}>
                <img src={logo} className={classes.logo} alt="logo"/>
            </Grid>
            <Grid container direction="column" item xs={12} md={10} lg={9} xl={8}>
                <Welcome lang={props.lang}/>
            </Grid>
            <Grid container align="center" justify="center" item xs={12} md={10} lg={9} xl={8} spacing={3}>
                <ThemeProvider theme={theme}>
                <Grid item xs={12}>
                    <Typography variant="h1" gutterBottom >STABEN</Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <img src={nox} className={classes.profile} alt="nox"/>
                    <Typography variant="h3" gutterBottom >Nox CenturI/O</Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <img src={staos} className={classes.profile} alt="staos"/>
                    <Typography variant="h3" gutterBottom >OthEnum StaOS</Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <img src={luma} className={classes.profile} alt="luma"/>
                    <Typography variant="h3" gutterBottom >Luma Qwer:Code</Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <img src={vorio} className={classes.profile} alt="vorio"/>
                    <Typography variant="h3" gutterBottom >Vorio Malcache</Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <img src={arexx} className={classes.profile} alt="arexx"/>
                    <Typography variant="h3" gutterBottom >ARexx Umb.RAR</Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <img src={atari} className={classes.profile} alt="atari"/>
                    <Typography variant="h3" gutterBottom >Atari MystRoam</Typography>
                </Grid>
                </ThemeProvider>
            </Grid>
            <Grid container item xs={12} md={10} lg={9} xl={8}>
                <Roles lang={props.lang}/>
            </Grid>
        </Grid>
    )
}

export default Nollning;
