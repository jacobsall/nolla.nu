import React from 'react'
//import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab} from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views';
import Contact from './Contact'
import About from './About'
import Information from './Information';

function Home(props){
  const {match, history} = props;
  const {params} = match;
  const {page} = params;

  const tabNameToIndex = {
    0: "about",
    1: "contact",
    2: "information"
  };

  const indexToTabName = {
    about: 0,
    contact: 1,
    information: 2,
  };

  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/${tabNameToIndex[newValue]}`)
    setSelectedTab(newValue);
  };

  const handleChangeIndex = (index) => {
    history.push(`/${tabNameToIndex[index]}`)
    setSelectedTab(index);
  };

  return (
    <>
      <AppBar position="sticky" color="default">
        <Tabs 
        value={selectedTab} 
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        centered
        selectionFollowsFocus={true}
        >
          <Tab label="About" />
          <Tab label="Contact" />
          <Tab label="Information" />
        </Tabs>
      </AppBar>
      <SwipeableViews className="ok" enableMouseEvents index={selectedTab} onChangeIndex={handleChangeIndex}>
        <div>{ selectedTab === 0 && <About/> }</div>
        <div>{ selectedTab === 1 && <Contact/>}</div>
        <div>{ selectedTab === 2 && <Information/>}</div>
      </SwipeableViews>
    </>
  )
}

export default Home;
