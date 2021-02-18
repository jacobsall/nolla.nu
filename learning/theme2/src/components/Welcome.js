import React from 'react'
import {Grid, Typography, Paper, Fab} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles({
    container: {
        margin: 0,
        maxWidth: "100%",
        marginBottom: "20px"
    },
    title: {
        marginTop: "20px"
    },
    divide: {
        marginBottom: "10px"
    },
    nolleguide: {
      marginTop: "1rem"
    }
  });

const text = {
    swe: {
        intro: {
            title: "Hejsan N0llan!",
            body1: "Först och främst vill vi välkomna dig till Lund, LTH och såklart D-sektionen. Vi hoppas att du kommer trivas väldigt bra här under hela din studietid! När man kommer till Lund som nyantagen student är det väldigt många nya intryck, personer, platser och andra konstigheter nästan dagligen. För att detta ska vara så enkelt och roligt som möjligt kommer du som n0lla få genomgå en nollning. Nollningen är något av det roligaste som man kan göra i studentlivet, och det kommer ge dig en bra ingång in i ditt nya hem. Det är också det perfekta tillfället att lära känna många nya vänner, både nyantagna studenter och äldre teknologer.",
            body2: "Schemat kommer vara fullspäckat med roliga aktiviteter, sittningar och galenskap. Nollningen kan därför kanske kännas för intensiv. Detta är inget problem då man väljer helt själv hur mycket av nollningen man vill vara med på! Vi rekommenderar dock att vara med på så mycket som möjligt, för nollningen är så orimligt kul!",
            body3: "",
            body4: "Denna hemsida är fylld med nyttig information för n0llan, men något som är minst lika viktigt är den fantastiska Nolleguiden! Nolleguiden är den definitiva hjälpen under dina första veckor här på LTH! I den finner du info om Nollningen, Sektionen, LTH och mycket mycket mer. Den delas ut i fysisk form men du kan också ladda ner den här nedan! Om det skulle finnas ytterligare frågor så tveka inte att fråga dina phaddrar. De har varit i er sits en gång i tiden också och lärt sig mycket bra saker om Lund och dess studentliv. Skulle man fortfarande ha frågor om allt eller inget kan man maila staben@dsek.se så ser vi till att du får ett svar!",
            end: "Än en gång önskar vi dig all lycka i Lund och på LTH!",
            wish: "Hälsningar, Staben"
        },
        stab: {
            title: "Staben",
        },
        nolleguide: "Ladda ner Nolleguiden"
    },
    eng: {
        intro: {
            title: "Hi N0lla!",
            body1: "We are Staben, and we have been working voluntarily and wholeheartedly this last year in order to create the best Nollning ever. We will do our best to make sure that you are feeling welcomed and not too lost in the beginning of your stay. If you are feeling overwhelmed or confused about what a Nollning is about, that is completely normal and that is exactly why this website exists. Feel free to read up on our student traditions and what the different guilds do; you can find most of the information here on nolla.nu.",
            body2: "You will undergo a nollning here on LTH that lasts for the first couple of weeks. This is a great opportunity to meet new friends and acquaintance yourself with other people. Please do note that the nollning at LTH and the international nollning at LU are two completely different things. Different groups of people arrange them and the schedules will clash from time to time. This is no problem, though. You can choose freely what activities you want to take part in. However, keep in mind that the people at LTH will (most likely) not know anything about the nollning at LU. Regardless of what you choose to do, it is safe to say that you will have a lot of fun and meet plenty of new friends!",
            body3: "",
            body4: "",
            end: "Once again, we wish you a great time here in Lund and at LTH!",
            wish: "Best wishes, Staben"
        },
        stab: {
            title: "Staben",
        },
        nolleguide: "Download the Nolleguide"
    }
};

export default function Welcome(props) {
    const classes = useStyles();

    return (
      <>
        <Paper elevation={2} className={classes.paper}>
            <Grid className={classes.container} xs={12} container spacing={5} direction="column" alignItems="center" justify="space-around">
                <Grid className={classes.title} item xs={10}>
                    <Typography align='center' variant="h1">
                        {text[props.lang].intro.title}
                    </Typography>
                </Grid>
                <Grid container item direction="row" alignItems="flex-start" justify="center" spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Typography variant="body1" >
                            {text[props.lang].intro.body1}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography variant="body1" >
                            {text[props.lang].intro.body2}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography variant="body1" >
                            {text[props.lang].intro.body4}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8} align="center" spacing={0}>
                        <Typography variant="body1" >
                            {text[props.lang].intro.end}
                        </Typography>
                        <Typography variant="body1">
                            {text[props.lang].intro.wish}
                        </Typography>
                    </Grid>
                    <Grid container xs={12} justify="center" className={classes.nolleguide}>
                      <Fab variant="extended" color="primary" href="guide.pdf" download>
                        <GetAppIcon/>
                        {text[props.lang].nolleguide}
                      </Fab>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
      </>
    )
}
