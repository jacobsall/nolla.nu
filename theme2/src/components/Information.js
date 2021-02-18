import React from 'react'
import {Grid, Button, ButtonGroup, Typography, ThemeProvider, Divider, Fab} from '@material-ui/core'
import {Card, CardActions, CardContent, CardActionArea, CardMedia, List, ListItem, ListItemText} from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail';
import LinkIcon from '@material-ui/icons/Link';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

import tlthLogo from '../images/TLTH-01.jpg'
import dLogo from '../images/D-logo.png'
import boende from '../images/delphi_vy.jpg'
import schema from '../images/Skärmklipp.PNG'
import boiler from '../images/LTH.jpg'

const text = {
    swe: {
        text: "Bra-att-ha information",
        tlth: {
            title: "Kåren",
            body1: "Alla studenter på LTH är medlemmar i Teknologkåren vid Lunds tekniska högskola, TLTH. Kåren är studenternas röst mot universitetet och en mötesplats för teknologerna. Kårens huvudsakliga uppgift är att bevaka utbildningarna, men gör även mycket annat, t.ex arbetar med studenternas arbetsmiljö, studiemedelsfrågor, kontakter med näringsliv, nöjen, fester och fritidsaktiviteter.Kårens expedition finns i Kårhuset. Här hittar man även kårens heltidare, de studenter som under ett år tar uppehåll från studierna för att helhjärtat arbeta för Teknologkåren.",
        },
        dsek: {
            title: "Sektionen",
            body1: "Kåren är uppdelad i elva sektioner. En sektion omfattar studenter vid ett eller flera utbildningsprogram. Sektionerna har hand om de frågor som rör studenter på just de programmen. Din sektion heter Datatekniksektionen! Du kan läsa mer om vad D-sektionen gör för något på sektionens hemsida www.dsek.se."
        },
        housing: {
            title: "Boende",
            img: boende,
            buttons: true,
            body1: "I Lund kan det ibland vara lite knepigt att få tag på boende - som tur är har novischer (förstaårsstudenter) förtur. Kontakta AF-Bostäder, Bopoolen eller en nation direkt! Studentlund har några bra tips som gäller alla dessa alternativ, samt några andra sätt att få tag i boende. Klicka dig in där och läs på! Lyckas du ändå inte få någonstans att bo så fråga runt bland phaddrarna och äldre teknologer så kan säkert ett tillfälligt boende fixas.",
        },
        schedule: {
            title: "Scheman",
			body1: "Här nedan hittar ni era respektive scheman för mottagningsveckan. För att hitta ert vanliga schema så får ni klicka er in på schemageneratorn och fylla i D1 under studentgrupp om ni går på data, och C1 under studentgrupp om ni går på InfoCom.",
        },
        bring: {
            title: "Vad ska jag ha med mig till Lund?",
            body1: "De olika sittningarna och tillställningarna du kommer gå på under nollningen kommer ha olika klädkoder. Dessa existerar för att hjälpa dig veta hur du ska klä dig, och hur formellt eventet är. Kom ihåg att klädkodernas syfte är inte att göra dig fattig genom att tvinga dig inhandla dyra kläder som du endast kommer använda en gång. Du kan alltid fråga en kompis om du får låna deras kläder inför kvällen, eller kolla med de som anordnar eventet ifall de kläder du hade tänkt ha på dig ändå är okej. Det kan vara smart att ha med sig kläder till dessa event redan när du kommer till Lund. Detta är en lista på de klädkoder som kommer förekomma under nollningen:",
            points: {
                one: ["Högtidsdräkt", "Långklänning eller frack, men en mörk kostym duger oftast. Fråga arrangören om du är osäker. "],
                two: ["Mörk kostym", "En mörk kostym (svart, grå, brun eller mörkblå), eller en finare klänning eller en kjol med en top."],
                three: ["Bruten kavaj", "Finare vardagskläder. En kavaj kombinerat med något annat, eller bara något som du känner dig snygg i."],
                four: ["Temaenligt", "Vissa sittningar har teman som du måste klä dig efter. Detta är väldigt sällan en strikt klädkod; följ temat så gott du kan!"]
            }
        },
        feel: {
            title: "Mår du dåligt?",
            body1: "Om du någon gång mår dåligt eller känner dig illa behandlad under din tid här på LTH och under nollningen så finns det flera ställen du kan vända dig till.",
            points: {
                stab: ["Staben eller pepparna", ", speciellt om det rör just saker som har hänt under nollningen."],
                phadder: ["Din phadder", ", som kan hjälpa dig att hitta rätt person att prata med."],
                health: ["Studenthälsan", "De tar hand om studenter som behöver hjälp, mer info finns på deras hemsida:"],
                kutators: ["LTH:s egna kuratorer", ", mer info finns på deras hemsida:"],
                liku: ["Trivselrådet", ", D-sektionens likabehandlingsutskott"]
            }
        }
    },
    eng: {
        text: "General information",
        tlth: {
            title: "Kåren",
            body1: "Every student at LTH is a member of Teknologkåren, TLTH. Teknologkåren represents the voices of the students against the university, and acts as a meeting place for the students. The main task for Teknologkåren is to supervise the different educations, but they also work with a lot of other things. For example, they improve the work environment for the students, take care of things regarding student aid, they mainain a close relationship with the business (näringslivet), entertainment, parties, and leisure activities.The expedition for Teknologkåren can be found in Kårhuset. You can also find the full time workers of Teknologkåren here. These are students who pauses their studies for one year in order to wholeheartedly work for Teknologkåren.",
        },
        dsek: {
            title: "The Guild",
            body1: "Teknologkåren is divided into eleven different guilds. A guild includes students from one or more program at LTH. The guilds take care of questions that directly concerns the students at their respective programs. Your guild is is called the Computer Science Guild, often called D-guild. The letter D comes from the Swedish word for computer science; datateknik. You can read more about the what the D-guild works with on their website www.dsek.se (website is in Swedish only, but Google translate does a pretty good job at translating it)."
        },
        housing: {
            title: "Colored overalls (student boilersuits)",
            img: boiler,
            buttons: false,
            body1: "Every guild on LTH has its own color. The overalls are colored according to the guild you are in. way it is easy to identify what another student studies, and it gives the students an opportunity to represent their own guild. The D-guild (computer science) has pink as its color! Ask your phadder if you are curious about what the other colors represent - they'll know.",
        },
        schedule: {
            title: "Schedule",
			body1: "Here you can find your respective schedules. To find your regular schedule you can click the button to the right and enter the correct course code.",
        },
        bring: {
            title: "About Lund and Sweden",
            body1: "",
            points: {
                one: ["Healthcare", "healthcare in Sweden is (almost) free. You pay at maximum 300SEK for a visit at the doctor. However, the way these visits work in Sweden can be different from other countries. Drop in-times are prioritized, meaning if you walk in with a not so super serious issue, expect other patients to be prioritized over you and you might be waiting for over two hours. What you are supposed to do instead is to call and book an appointment in beforehand"],
                two: ["Sirens every three months ", "on the first Monday every three months (Mars, June, September and December) at 3 sharp in the afternoon, Sweden tests its air raid warnings. These are sirens that are evenly distributed on (mostly) tall buildings throughout Sweden. The system has been tested way since 1931, meaning all Swedes are accustomed to it. The sound of the sirens can however come as a shock if you are not prepared for it. So if you hear the sirens (they are very hard not to hear), do not be afraid. It is just a routine test."],
                three: ["Payments ", "in Sweden we barely use cash anymore; we are moving towards a so called cash-free society. means that you will very rarely be able to pay by cash during the nollning, however most regular stores still accept it. It could be wise to check if you have a high fee on card transactions while abroad, since could be a problem for you during your first weeks here."],
                four: ["The difference between guilds and nations ", "what guilds are to LTH, nations are to all students at Lund's University. In order to become a member of (and to get involved in) a guild you need to be a student at LTH and a member of Teknologkåren. The corresponding requirements for nations are that you have to be a student at Lund's University, and a member of Studentlund. You become a member of Studentlund when you gain membership at a nation (which is free). You can read more about the different nations, what they do, and how to get involved at studentlund.se."]
            }
        },
        feel: {
            title: "Are you feeling down?",
            body1: "If you ever are feeling down, or feel that you are being treated badly during your time here at LTH and during the nollning, ther are a couple of places and persons you can turn to.",
            points: {
                stab: ["Staben or pepparna", ", especially if there's anything that can be directly related to the nollning."],
                phadder: ["Your phadder", ", who can help you find the right person to talk to."],
                health: ["Studenthälsan", "(the student health counselling). They take care of students who need help You can find more information on their website:"],
                kutators: ["LTH:s own counselors", ", more info on their website:"],
                liku: ["Trivselrådet", ", The D-guilds equal opportunities representatives"]
            }
        }
    }
};

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

  const theme2 = createMuiTheme({
    palette: {
      primary: {
        light: '#c8e164',
        main: '#95af33',
        dark: '#648000',
        contrastText: '#000000',
      },
    },
  });


const useStyles = makeStyles({
    container: {
        margin: 0,
        maxWidth: "100%",
    },
    media: {
        height: "180px",
        textAlign: "left",
    },
    cards: {
        maxWidth: "600px",
    },
    divide: {
        marginBottom: "5px"
    },
    title: {
        marginTop: "20px",
    },
    titleText: {
        marginBottom: "32px"
    },
    scheduleButtons:{
        float: "right"
    }
  });

export default function Information(props) {
    const classes = useStyles();

    return (
        <Grid container className={classes.container} spacing={4} justify="center">
            <Grid className={classes.title} item xs={12}>

                    <Typography align="center" variant="h1" className={classes.titleText}>
                        {text[props.lang].text}
                    </Typography>
                    <Divider/>
            </Grid>

            {/* BOENDE CARD */}
            <Grid item xs={12} md={6} xl={4} align="center">
                <Card className={classes.cards} align="left">
                    <CardActionArea>
                        <CardMedia image={text[props.lang].housing.img} className={classes.media}/>
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h4">
                            {text[props.lang].housing.title}
                        </Typography>
                        <Divider className={classes.divide}/>
                        <Typography variant="body2" color="textPrimary">
                            {text[props.lang].housing.body1}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        { text[props.lang].housing.buttons &&
                        <ThemeProvider theme={theme2}>
                            <ButtonGroup size="small" variant="contained" color="primary">
                                <Button href="https://afbostader.se/" target="_blank" startIcon={<LinkIcon/>}>AFB</Button>
                                <Button href="https://bopoolen.nu/" target="_blank" startIcon={<LinkIcon/>}>BOPOOLEN</Button>
                                <Button href="https://www.studentlund.se/" target="_blank" startIcon={<LinkIcon/>}>STUDENTLUND</Button>
                            </ButtonGroup>
                        </ThemeProvider>
                        }
                    </CardActions>
                </Card>
            </Grid>
            {/* Schema */}
            <Grid item xs={12} md={6}  xl={4} align="center">
                <Card className={classes.cards} align="left">
                    <CardActionArea>
                        <CardMedia image={schema} className={classes.media}/>
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h4">
                            {text[props.lang].schedule.title}
                        </Typography>
                        <Divider className={classes.divide}/>
                        <Typography variant="body2" color="textPrimary">
                            {text[props.lang].schedule.body1}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <ButtonGroup size="small" orientation="vertical" variant="contained" >
                            <Button href="https://cloud.timeedit.net/lu/web/lth1/ri17565050000YQQ96Z5537057y0Y5634gQ6g1X1Y55ZQ756.html" target="_blank" align="center">MOTTAGNINGSVECKA Datateknik</Button>
                            <Button href="https://cloud.timeedit.net/lu/web/lth1/ri17565050000YQQ96Z5537057y0Y5534gQ6g1X1Y55ZQ756.html" target="_blank" align="center">MOTTAGNINGSVECKA InfoCom</Button>
                        </ButtonGroup>
                        <ButtonGroup size="small" variant="contained">
                            <Button  href="https://cloud.timeedit.net/lu/web/lth1/ri1Q5006.html" target="_blank">Schemageneratorn</Button>
                            </ButtonGroup>
                    </CardActions>
                </Card>
            </Grid>
            {/* DSEK CARD */}
            <Grid item xs={12} md={6}  xl={4} align="center">
                <Card className={classes.cards} align="left">
                    <CardActionArea>
                        <CardMedia image={dLogo} className={classes.media}/>
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h4">
                            {text[props.lang].dsek.title}
                        </Typography>
                        <Divider className={classes.divide}/>
                        <Typography variant="body2" color="textPrimary">
                            {text[props.lang].dsek.body1}
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
            {/* TLTH KORT */}
            <Grid item xs={12} md={6}  xl={4} align="center">
                <Card className={classes.cards} align="left">
                    <CardActionArea>
                        <CardMedia image={tlthLogo} className={classes.media}/>
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h4" >
                            {text[props.lang].tlth.title}
                        </Typography>
                        <Divider className={classes.divide}/>
                        <Typography  variant="body2" color="textPrimary" >
                            {text[props.lang].tlth.body1}
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
            {/* Ha med till Lund */}
            <Grid item xs={12} md={6}  xl={4} align="center">
                <Card className={classes.cards} align="left">
                    <CardContent>
                    <Typography variant="h4" gutterBottom align="center">{text[props.lang].bring.title}</Typography>
					<Divider className={classes.divide} />
					<Typography variant="body1" align="center">{text[props.lang].bring.body1}</Typography>
					<List>
						<ListItem>
							<ListItemText> <b>{text[props.lang].bring.points.one[0]}</b> - {text[props.lang].bring.points.one[1]}</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemText> <b>{text[props.lang].bring.points.two[0]}</b> -  {text[props.lang].bring.points.two[1]}</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemText> <b>{text[props.lang].bring.points.three[0]}</b> -  {text[props.lang].bring.points.three[1]}</ListItemText>
						</ListItem>
						<ListItem>
								<ListItemText> <b>{text[props.lang].bring.points.four[0]}</b> -  {text[props.lang].bring.points.four[1]}</ListItemText>
						</ListItem>
					</List>
                    </CardContent>
                </Card>
            </Grid>
            {/* Må dåligt */}
            <Grid item xs={12} md={6}  xl={4} align="center">
                <Card className={classes.cards} align="left">
                    <CardContent>
                    <Typography gutterBottom variant="h4" align="center">{text[props.lang].feel.title}</Typography>
								<Divider className={classes.divide}/>
								<Typography variant="body1" align="center">{text[props.lang].feel.body1}</Typography>
								<List>
									<ListItem>
										<ListItemText> <b>{text[props.lang].feel.points.stab[0]}</b>{text[props.lang].feel.points.stab[1]}</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText> <b>{text[props.lang].feel.points.phadder[0]}</b>{text[props.lang].feel.points.phadder[1]}</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText> <b>{text[props.lang].feel.points.health[0]}</b> <br />{text[props.lang].feel.points.health[1]}</ListItemText>
									</ListItem>
									<ListItem>
										<Fab color="secondary" size="small" href="https://www.lu.se/studera/livet-som-student/service-och-stod/studenthalsan" target="_blank"><LinkIcon/></Fab>
									</ListItem>
									<ListItem>
										<ListItemText> <b>{text[props.lang].feel.points.kutators[0]}</b>{text[props.lang].feel.points.kutators[1]}</ListItemText>
									</ListItem>
									<ListItem>
										<Fab color="secondary" size="small" href="http://www.student.lth.se/stod_i_studierna/kuratorer_lth/" target="_blank"><LinkIcon/></Fab>
									</ListItem>
									<ListItem>
										<ListItemText> <b>{text[props.lang].feel.points.liku[0]}</b>{text[props.lang].feel.points.liku[1]}</ListItemText>
									</ListItem>
									<ListItem>
										<Fab color="secondary" size="small" href="mailto:trivselm@dsek.se" target="_blank"><MailIcon/></Fab>
									</ListItem>
								</List>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
