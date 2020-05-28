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
    height: 800,
  },

  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    paddingTop: 50,
    width: 150,
  },

  // tab: {
  //   padding: '12px 25px',
  //   textAlign:'justify',
  // },

  content: {
    // flexGrow: 1,
    width: '80%',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },

  setImg: {
    textAlign: 'center',
  },

  img: {
    maxWidth: '50%',
    height: 'auto',
    padding: '8%',
  },

  text: {
    paddingBottom: 10,
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
        inkBarStyle={{background: 'blue'}}
        indicatorColor="#665544"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}>

        <Tab className = {classes.tab} label="About Us" {...a11yProps(0)} />
        <Tab className = {classes.tab} label="About CungDesign" {...a11yProps(1)} />
        <Tab className = {classes.tab} label="Inspiration" {...a11yProps(2)} />
      </Tabs>

      <main className={classes.content}>
        {/* <div className={classes.toolbar} /> */}
        <TabPanel value={value} index={0}>
          <div className={classes.info}>
            <div className={classes.setImg}>
              <img className={classes.img}
                alt="600*450"
                src="images/Aboutus.jpg"
              />
              <img className={classes.img}
                alt="600*450"
                src="images/AboutUs3.jpg"
              />
            </div>
            <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. </p>
          </div>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <div className={classes.info}>
            <div className={classes.setImg}>
              <img className={classes.img}
                alt="600*450"
                src="images/Workshop1.jpg"
              />
              <img className={classes.img}
                alt="600*450"
                src="images/Workshop2.jpg"
              />
            </div>

            <p className={classes.text} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. </p>
          </div>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <div className={classes.info}>
            <div className={classes.setImg}>
              <img className={classes.img}
                alt="600*450"
                src="images/Inspiration2.jpg"
              />
              <img className={classes.img}
                alt="600*450"
                src="images/PlayingwPaint.jpg"
              />
            </div>
            <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. </p>
          </div>
        </TabPanel>
      </main>
    </div>
  );
}