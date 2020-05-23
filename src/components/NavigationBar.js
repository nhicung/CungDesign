import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import About from './About'
import { Home } from './Home'
import Gallery from './Gallery'
import FooterInfo from './FooterInfo'
import { Product } from './Product'
import { Workshop } from './Workshop'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import  Footer  from './Footer';
//import Logo from '../../public/images/logo.jpg';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#665544',
    }
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="sticky" color="default">
          <ThemeProvider theme={theme}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
              aria-label="scrollable auto tabs example"
            >
              <img
                src='images/logo.jpg'
                width="60"
                height="60"
                alt="logo" />
              <Tab label="Home" {...a11yProps(1)} />
              <Tab label="Gallery" {...a11yProps(2)} />
              <Tab label="Workshop" {...a11yProps(3)} />
              <Tab color = '#665544' label="About" {...a11yProps(4)} />
              <Tab label="Products" {...a11yProps(5)} />
              {/* <Tab label="Blog" {...a11yProps(6)} /> */}
              {/* <Tab label="Terms"{...a11yProps(7)}/> */}
            </Tabs>
          </ThemeProvider>
        </AppBar>
        <TabPanel value={value} index={1}>
          <Home
            switchPage={setValue}
          ></Home>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Gallery/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Workshop/>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <About/>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Product/>
        </TabPanel>
        <TabPanel value={value} index={7}>
          <FooterInfo>
          </FooterInfo>
        </TabPanel>
      </div>
      <Footer switchPage={setValue}></Footer>
    </React.Fragment>
  );
}