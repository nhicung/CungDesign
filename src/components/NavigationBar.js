import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import  About from './About'
import  {Home}  from './Home'
import  Gallery from './Gallery'
import  {Product} from './Product'
import  {Workshop} from './Workshop'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
// import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:'#665544',
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
      <ThemeProvider theme={theme}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Gallery" {...a11yProps(1)} />
          <Tab label="Workshop" {...a11yProps(2)} />
          <Tab label="About" {...a11yProps(3)} />
          <Tab label="Products" {...a11yProps(4)} />
          <Tab label="Blog" {...a11yProps(5)} />
        </Tabs>
        </ThemeProvider>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Home
          switchPage={setValue}
        ></Home>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Gallery></Gallery>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Workshop></Workshop>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <About></About>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Product></Product>
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
    </div>
  );
}