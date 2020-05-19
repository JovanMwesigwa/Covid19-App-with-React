import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SelectorComponent from '../Selector/Selector';
import CountrySelectComponent from '../CountryDropDown/CountrySelectComponent';
import CountryCardInfo from '../Card/CountryCardInfo';
import MapComponent from '../Map/MapComponent';
const drawerWidth = 340;

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
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function SideNavComponent(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [route, setRoute] = useState(true);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const ViewCountryHandler = () => {
    setRoute(!route)
  }
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const {cases, deaths} = props
  const drawer = (
    <div>
      <div className={classes.toolbar} />
        <List>
            <h3 style={{ marginLeft: '20px', marginTop: '0%', }}>COVID-19 Tracking <br></br> Application</h3>
        </List>
        <Divider />
        <div style={{ padding: '10px' }} >
            <button onClick={ViewCountryHandler}>Change Route</button>
            <CountrySelectComponent  />
        </div>
        <Divider />
        <List>
        <div style={{ marginTop: '0%', }}>
            <div style={{ padding: '10px' }} >
                <span>10 May 2020</span>
            </div>
            <div style={{ display: "flex", justifyContent: 'space-between',
                        alignItems: 'center', margin: '0, 10px',  
                        padding: '20px' }} className="case-details-container"
            >
                <div className="Confirmed-cases-container">
                    <h6>CONFIRMED CASES</h6>
                    <h4>{cases}</h4>
                </div>
                <div  className="deaths-container">
                    <h6>DEATHS</h6>
                    <h4>{deaths}</h4>
                </div>
            </div>
        </div>
        <Divider />
        <div  style={{ display: "flex", 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px',
                    paddingLeft: '10px' }} 
                    Container fluid
        >
            <SelectorComponent />
        </div> 
        <Divider /> 
            <div style={{ padding: '5px' }}>
            </div> 
        <Divider />
        <div className="graph-container">
            {/* Graph goes here */}
        </div>
        <Divider />  
        </List> 
        <div className="Countries-info">
            <CountryCardInfo  />
        </div>   
     
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
            <MapComponent />
            {/* <ViewCountry /> */ }         
      </main>
    </div>
  );
}

export default SideNavComponent;
