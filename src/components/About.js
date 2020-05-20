import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    color: '#665544',
    display: 'flex',
    height: 500,
  },

  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    paddingTop: 50,
    width: 150,
  },

  content: {
    flexGrow: 1,
    width: '200px',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },

  info: {
    display: 'flex',
		flexDirection: 'row',
  },

  text :{
    padding: 10,
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}>

        <Tab label="About Us" {...a11yProps(0)} />
        <Tab label="About CungDesign" {...a11yProps(1)} />
        <Tab label="Inspiration" {...a11yProps(2)} />
      </Tabs>

      <main className={classes.content}>
        {/* <div className={classes.toolbar} /> */}
        <TabPanel value={value} index={0}>
          <div className={classes.info}>
            <img
              width={600}
              height={450}
              alt="600*350"
              src="images/AboutUs2.jpg"
            />
            <p className = {classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. </p>
          </div>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <div className={classes.info}>
            <img
              width={600}
              height={450}
              alt="600*350"
              src="images/AboutUs3.jpg"
            />

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. </p>
          </div>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <div className={classes.info}>
            <img
              width={600}
              height={450}
              alt="600*450"
              src="images/Inspiration1.jpg"
            />

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. </p>
          </div>
        </TabPanel>
      </main>
    </div>
  );
}