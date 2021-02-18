import React from 'react'
import { AppBar, Tabs, Tab, Button} from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views';
import Nollning from './Nollning'
import Information from './Information';
import { makeStyles } from '@material-ui/core/styles';


const text = {
  swe: "English",
  eng: "Swedish"
}

const useStyles = makeStyles({
  appbar: {
    background: "#424242",
  },
});

function Home(props){

  const classes = useStyles();

  /*language*/
  const [lang, setLang] = React.useState("swe");

  const switchLang = () => {
    lang === "swe" ? setLang("eng") : setLang("swe");
  };

  /*Page switching*/
  const {match, history} = props;
  const {params} = match;
  const {page} = params;

  const tabNameToIndex = {
    0: "nollning",
    1: "info"
  };

  const indexToTabName = {
    nollning: 0,
    info: 1,
  };

  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/2020/${tabNameToIndex[newValue]}`)
    setSelectedTab(newValue);
  };

  const handleChangeIndex = (index) => {
    history.push(`/${tabNameToIndex[index]}`)
    setSelectedTab(index);
  };

  

  return (
    <>
      <AppBar position="sticky" color="default" className={classes.appbar}>
      <Button onClick={switchLang}>Switch to {text[lang]}</Button>
        <Tabs 
        value={selectedTab} 
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        selectionFollowsFocus={true}

        >
          <Tab label="Nollning" />
          <Tab label="Information" />
        </Tabs>
      </AppBar>
      <SwipeableViews className="ok" enableMouseEvents index={selectedTab} onChangeIndex={handleChangeIndex}>
        <div>{ selectedTab === 0 && <Nollning lang={lang}/> }</div>
        <div>{ selectedTab === 1 && <Information lang={lang}/>}</div>
      </SwipeableViews>
    </>
  )
}

export default Home;
