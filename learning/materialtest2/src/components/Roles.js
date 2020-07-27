import React from 'react'
import {Grid, Typography, Divider, Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const text = {
    swe: {
        intro: {
            title: "Nollningen i korthet",
            body1: "Nollningen är ett namn på de fem första veckorna av er tid här på LTH. Den första av dessa utspelar sig innan ordinarie undervisning börjar och det är här som aktiviteterna ligger som tätast. På dagarna ges nyttiga introduktionskurser i diverse ämnen, i år sker det mesta på distans. På kvällarna finns det roliga fritidsaktiviteter och fester att delta i."
        },
        zero: {
            title: "Vad är en Nolla?",
            body1: "En Nolla är oftast en förstaårsstudent. Denna student tas hand om av phaddrarna som alltid ser till att Nollan har det trevligt! Som Nolla får man gå på massvis av roliga event och fester samt bekanta sig med sina nya kursare. Nolla är man fram till nollegasquen (nollningens avslutningsfest) då man upphöjs till etta efter fullbordat nolleuppdrag.",
        },
        phadder: {
            title: "Vad är en Phadder?",
            body1: "En phadder är en äldre student som ofta springer runt i en ouveralle, och en del springer runt utan ouveralle. Phaddern vet en fruktansvärd massa saker om LTH och då speciellt hur D-sektionen och studentlivet fungerar. En phadder kan också allt som står på nollningsprogrammet, var föreläsningssalar ligger, hur man beställer pizza och var man tar vägen om man missade sista tåget hem. De flesta phaddrarna har även gått på utbildning i ledarskap, alkoholansvar och mycket, mycket mer, så tveka inte att fråga dem något om en kris uppstår. Phaddern är till för Nollans skull.",
        },
        pepp: {
            title: "Vad är en Peppare?",
            body1: "En peppare är en person som bistår Staben i deras arbete med att planera och uföra nollningen. De springer allt som oftast runt i rosa frackar och ser till så att både Nollor och phaddrar är peppade. De vet allt om hur nollningen fungerar - om du har missat att köpa biljett till en sittning eller känner dig osäker på var och när du ska infinna dig till olika event så kan du alltid prata med en peppare!"
        },
        stab: {
            title: "Vad är Staben?",
            body1: "Vi som ansvarar för nollningen kallas för Staben. Staben planerar och genomför D-sektionens nollning. Arbetet med nollningen leds av mig, Øverphøs, och i år har jag fem stabsmedlemmar bakom mig. Alla vi i staben läser Datateknik eller Infocom och arbetar ideellt och helhjärtat med att genomföra den bästa nollningen någonsin!",
        }
    },
    eng: {
        intro: {
            title: "The Nollning in short",
            body1: "Nollning is the Swedish name for Student Orientation Weeks and is what happens at LTH the first five weeks of your stay. It is also know as an Introduction. It begins one week prior to the regular education and this is also the time where the activities are most frequent. There will be lectures during daytime and activities and parties in the evening."
        },
        zero: {
            title: "What is a nolla?",
            body1: "A nolla (a zero) is most often a first year student. This student is taken care of by its phaddrar who always make sure the nolla is enjoying him- or herself! You are allowed to take part in plenty of funny parties and activities as a nolla, and also to become acquainted with your classmates. You are a nolla until the the nollegasque (the final party during the nollning) where you will become an etta (first year student) after a completed nollning-mission. If you are an exchange student then there is a great chance that you are not a first year student. This is no problem, you get to take part of all activities anyway!",
        },
        phadder: {
            title: "What is a phadder?",
            body1: "A phadder is an older student who often is dressed in an overall. The phadder knows an awful lot about LTH, the D-guild and about the student life. A phadder also knows virtually everything there is to know about the nollning activities, where lecture halls are located, how to order pizza, and where to go if you miss the last train home. Most of the phaddrar has been educated in leadership, alcohol laws and responsibilites, and a lot more, so do not hesitate to ask them about anything. The phadder exists for You.",
        },
        pepp: {
            title: "What is a peppare?",
            body1: "A peppare is someone who helps staben with their work regarding planning and realizing the nollning. They most often run around dressed in pink to make sure that both nollor and phaddrar are as excited and happy as they possibly can be. They know everything there is to know about how the nollning works - you can always ask a peppare if you've forgotten to buy tickets for an event or if you are unsure about where and when you are supposed to be."
        },
        stab: {
            title: "What is staben?",
            body1: "We, who are responsible for the nollning are called Staben. Staben plans and executes the nollning for the D-guild. The work regarding the nollning is led by me, the Øverphøs, and I've got five members of Staben supporting me this year. Every member of Staben studies either computer science or ICT (Information and Communication Technology) here at LTH, and we are working voluntarily and wholeheartedly in order to create the best nollning ever!",
        }
    }
};

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
        backgroundImage: `linear-gradient(130deg, white, #ffb2d2)`,
    }
  });
  
  /*ffe5ff*/

export default function Roles(props) {
    const classes = useStyles();

    return (
        <Paper elevation={2} className={classes.paper}>
            <Grid className={classes.container} container direction="column" alignItems="center" justify="space-around" spacing={5}>
                <Grid className={classes.title} item xs={10}>
                    <Typography align='center' variant="h2">
                        {text[props.lang].intro.title}
                    </Typography>
                </Grid>
                <Grid container item direction="row" alignItems="flex-start" justify="center" spacing={0}>
                    <Grid item xs={12} md={8}>
                        <Typography variant="body1" align="center">
                            {text[props.lang].intro.body1}
                        </Typography>
                    </Grid>
                </Grid>				
                <Grid item xs={12}>
                    <Grid container item direction="row" alignItems="flex-start" justify="space-evenly" spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Typography variant="h4" align="center">
                                {text[props.lang].zero.title}
                            </Typography>
                            <Divider className={classes.divide}/>
                            <Typography variant="body1" align="center">
                                {text[props.lang].zero.body1}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Typography variant="h4" align="center">
                                {text[props.lang].phadder.title}
                            </Typography>
                            <Divider className={classes.divide}/>
                            <Typography variant="body1" align="center">
                                {text[props.lang].phadder.body1}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                    <Grid item xs={12}>
                        <Grid container item direction="row" alignItems="center" justify="space-evenly" spacing={2}>
                            <Grid item xs={12} md={5}>
                                <Typography variant="h4" align="center">
                                    {text[props.lang].pepp.title}
                                </Typography>
                                <Divider className={classes.divide}/>
                                <Typography variant="body1" align="center">
                                    {text[props.lang].pepp.body1}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Typography variant="h4" align="center">
                                    {text[props.lang].stab.title}
                                </Typography>
                                <Divider className={classes.divide}/>
                                <Typography variant="body1" align="center">
                                    {text[props.lang].stab.body1}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
        </Paper>
    )
}
