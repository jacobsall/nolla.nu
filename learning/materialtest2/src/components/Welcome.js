import React from 'react'
import {Grid, Typography, Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

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
    paper: {
        backgroundImage: `linear-gradient(-20deg, white, #ffb2d2)`,
    }
  });

const text = {
    swe: {
        title: "Hejsan blivande teknolog!",
        body1: "Stort grattis till att du har blivit antagen till Sveriges i särklass roligaste skola: LTH! Ett hälsningsanförande kommer hållas den 24:e augusti klockan 09:15 online både för de som ska studera Datateknik och de som ska studera InfoCom. Länk till detta går att hitta i erat mottagningsschema. Se till att vara i tid; det är obligatoriskt att vara närvarande för att få behålla sin plats vid utbildningen. Om du har några frågor som rör mottagningen så kan du alltid höra av dig till staben@dsek.se.",
        subtitle: "Men sen då?!",
        body2: "För att du ska känna dig välkommen och inte alltför vilsen i början så kommer du genomgå en nollning. Den sträcker sig över de första veckorna och tillsammans kommer vi försöka se till att de här veckorna blir några av de roligaste i ditt liv. Eftersom nollningen har ett sådant fullspäckat schema så är det inte säkert att du orkar vara med på allt, och det är helt okej. Du väljer själv vilka aktiviteter du vill delta i. Något som däremot är säkert är att du kommer träffa väldigt många vänner och ha oerhört kul under tiden!",
        subtitle2: "Angående Covid-19",
        body31: "Covid-19 fortsätter påverka hela samhället och nollningen är inte något undantag för detta. På grund av detta så kommer er introduktion möjligtvis förändras lite gentemot hur det brukar se ut. Men en sak är säker och det är att vi kommer ge dig ett välkomnande att minnas.",
        bold: "Nollningen kommer att starta den 24:e augusti",
        body32: "så det är viktigt att du befinner dig i Lund från och med den veckan. Den första veckan får du lära känna staden, campus och så klart träffa alla dina klasskamrater och phaddrar. Det är viktigt att vi tar hand om oss själva och varandra under den här tiden, så känner man sig det minsta sjuk bör man stanna hemma för att minska på smittspridningen."
    },
    eng: {
        title: "Hello there!",
        body1: "Congratulations on your acceptance to Sweden's best school; LTH! If you are reading this then it most likely means that you are an exchange student who has been placed in the computer science guild (the D-guild). In that case; congratulations once again! We will do our best to make sure that you are feeling welcomed and not too lost in the beginning of your stay. If you are feeling overwhelmed or confused about what this is about, that is completely normal and that is exactly why this website exists. Feel free to read up on our student traditions and what the different guilds do; you can find most of the information here on nolla.nu.",
        subtitle: "What's next?!",
        body2: "You will undergo a nollning here on LTH that lasts for the first couple of weeks. This is a great opportunity to meet new friends and acquaintance yourself with other people. Please do note that the nollning at LTH and the international nollning at LU are two completely different things. Different groups of people arrange them and the schedules will clash from time to time. This is no problem, though. You can choose freely what activities you want to take part in. However, keep in mind that the people at LTH will (most likely) not know anything about the nollning at LU. Regardless of what you choose to do, it is safe to say that you will have a lot of fun and meet plenty of new friends!",
        subtitle2: "Concerning Covid-19",
        body31: "Covid-19 continues to affect our society and the nollning is no different. Because of this your nollning might be a bit different from what it usually looks like. One thing is certain though and that is that we will give you a great welcome to LTH.",
        bold: "The Nollning will begin on the 24th of August",
        body32: "so it’s important that you’re situated in Lund starting that week. The first week of nollning you will get to know the city and campus better. You will also meet all your classmates and phaddrar. It’s important to take care of ourselves as well as others during this time, so if you’re feeling sick you should stay home in order to stop the spread of the disease."
    }
};

export default function Welcome(props) {
    const classes = useStyles();

    return (
        <Paper elevation={2} className={classes.paper}>
            <Grid className={classes.container} xs={12} container spacing={5} direction="column" alignItems="center" justify="space-around">
                <Grid className={classes.title} item xs={10}>
                    <Typography align='center' variant="h2">
                        {text[props.lang].title}
                    </Typography>
                </Grid>
                <Grid container item direction="row" alignItems="flex-start" justify="center" spacing={0}>
                    <Grid item xs={12} md={8}>
                        <Typography variant="body1" align="center">
                            {text[props.lang].body1}
                        </Typography>
                    </Grid>
                </Grid>	
                <Grid item xs={10}>
                    <Typography align='center' variant="h3">
                        {text[props.lang].subtitle}
                    </Typography>
                </Grid>
                <Grid container item direction="row" alignItems="flex-start" justify="center" spacing={0}>
                    <Grid item xs={12} md={8}>
                        <Typography variant="body1" align="center">
                            {text[props.lang].body2}
                        </Typography>
                    </Grid>
                </Grid>	
                <Grid item xs={10}>
                    <Typography align='center' variant="h3">
                        {text[props.lang].subtitle2}
                    </Typography>
                </Grid>
                <Grid container item direction="row" alignItems="flex-start" justify="center" spacing={0}>
                    <Grid item xs={12} md={8}>
                        <Typography variant="body1" align="center">
                        {text[props.lang].body31} <b>{text[props.lang].bold}</b> {text[props.lang].body32}
                        </Typography>
                    </Grid>
                </Grid>	
            </Grid>
        </Paper>
    )
}
