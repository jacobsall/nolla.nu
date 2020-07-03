import React from 'react'
import { Drawer as MUIDrawer, List, ListItem, ListItemText, Hidden } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({    
    root: {
        display: 'flex',
      },
      drawer: {
        [theme.breakpoints.up('sm')]: {
          width: drawerWidth,
          flexShrink: 0,
        },
      },
      drawerPaper: {
        width: drawerWidth,
      },
      
}));

export function Drawer(props) {
        const {history, window} = props
        const classes = useStyles();
        const theme = useTheme();
        const [mobileOpen, setMobileOpen] = React.useState(false);
        
        const handleDrawerToggle = () => {
            setMobileOpen(!mobileOpen);
        }

        const drawer = (
            <div>
                <List>
                    <ListItem button onClick={() => history.push('/')}>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                    <ListItem button onClick={() => history.push('/about')}>
                        <ListItemText>About</ListItemText>
                    </ListItem>
                    <ListItem button onClick={() => history.push('/contact')}>
                        <ListItemText>Contact</ListItemText>
                    </ListItem>
                </List>
            </div>
        );

        const container = window !== undefined ? () => window().document.body : undefined;
        

        return (
            <nav className={classes.drawer}>
                <Hidden smUp>
                    <MUIDrawer
                        className={classes.drawer}
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </MUIDrawer>
                </Hidden>
                <Hidden xsDown>
                    <MUIDrawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </MUIDrawer>
                </Hidden>
            </nav>
        );
}

export default withRouter(Drawer)
