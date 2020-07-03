import React from 'react'
import {Grid, Button, Typography, ThemeProvider, Divider} from '@material-ui/core'
import {Card, CardActions, CardContent, CardActionArea, CardMedia} from '@material-ui/core'
import tlthLogo from '../images/TLTH-01.jpg'
import dLogo from '../images/D-logo.png'
import LinkIcon from '@material-ui/icons/Link';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#40508a',
      main: '#0a285c',
      dark: '#000032',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffb2d2',
      main: '#f280a1',
      dark: '#bd5073',
      contrastText: '#000',
    },
  },
});

const useStyles = makeStyles({
    container: {
        margin: 0,
        maxWidth: "100%",
        backgroundColor: "yellow"
    },
    media: {
        height: "180px",
        textAlign: "left"
    },
    cards: {
        maxWidth: "600px",
    },
    divide: {
        marginBottom: "5px"
    }
  });
  
export default function Information() {
    const classes = useStyles();

    return (
        <Grid container className={classes.container} spacing={4} justify="center">
            {/* TLTH KORT */}
            <Grid item xs={12} md={4} className="red" align="center">
                <Card className={classes.cards} align="left">
                    <CardActionArea>
                        <CardMedia image={tlthLogo} className={classes.media}/>
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" >
                            Kåren
                        </Typography>
                        <Divider className={classes.divide}/>
                        <Typography  variant="body2" color="textPrimary" >
                            Alla studenter på LTH är medlemmar i Teknologkåren vid Lunds tekniska högskola, TLTH. Kåren är studenternas röst mot universitetet och en mötesplats för teknologerna. Kårens huvudsakliga uppgift är att bevaka utbildningarna, men gör även mycket annat, t.ex arbetar med studenternas arbetsmiljö, studiemedelsfrågor, kontakter med näringsliv, nöjen, fester och fritidsaktiviteter. 
                            Kårens expedition finns i Kårhuset. Här hittar man även kårens heltidare, de studenter som under ett år tar uppehåll från studierna för att helhjärtat arbeta för Teknologkåren.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <ThemeProvider theme={theme}>
                            <Button href="https://tlth.se" target="_blank" size="large" color="primary" variant="contained" startIcon={<LinkIcon/>}>
                                TLTH.SE
                            </Button>
                        </ThemeProvider>
                    </CardActions>
                </Card>
            </Grid>
            {/* DSEK CARD */}
            <Grid item xs={12} md={4} align="center">
                <Card className={classes.cards} align="left">
                    <CardActionArea>
                        <CardMedia image={dLogo} className={classes.media}/>
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Sektionen
                        </Typography>
                        <Divider className={classes.divide}/>
                        <Typography variant="body2" color="textPrimary">
                            Kåren är uppdelad i elva sektioner. En sektion omfattar studenter vid ett eller flera utbildningsprogram. Sektionerna har hand om de frågor som rör studenter på just de programmen. Din sektion heter D-sektionen! Du kan läsa mer om vad D-sektionen gör för något på sektionens hemsida www.dsek.se.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <ThemeProvider theme={theme}>
                            <Button href="https://dsek.se" target="_blank" size="large" color="secondary" variant="contained" startIcon={<LinkIcon/>}>
                                DSEK.SE
                            </Button>
                        </ThemeProvider>
                    </CardActions>
                </Card>
            </Grid>
            {/* BOENDE CARD */}
            <Grid item xs={12} md={4}>
                <Card className={classes.cards}>
                    <CardContent>Hello</CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
