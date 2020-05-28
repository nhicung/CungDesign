import React, { useEffect } from 'react';
import { browserHistory } from 'react-router'
import { Route, Link, HashRouter, Redirect, BrowserRouter, useLocation } from "react-router-dom";
import { Home } from './Home';
import About from './About';
import Gallery from './Gallery';
import { Workshop } from './Workshop';
import { Product } from './Product';
import Footer from './Footer'
import FooterInfo from './FooterInfo'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#665544',
    }
  },
});

const useStyles = makeStyles((theme) => ({
  header: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  list: {
    padding: 20,
    alignItems: 'center',
    display: 'flex',
    height: 50,
    justifyContent: 'center',
    margin: '0 10px',
    "&:hover": {
      textDecoration: "none",
      color: "#d4d0c6",
    },
  },
}));

const mapPath = {
  '/': 1,
  '/gallery': 2,
  '/workshop':3,
  '/about':4,
  '/product':5,
  '/info':6
}

export default function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let location = useLocation();

  useEffect(() => {
    setValue(mapPath[location.pathname]);
    console.log(location);
  }, [location])

  console.log(value);
  return (
    <React.Fragment>
      <AppBar color="default">
        <ThemeProvider theme={theme}>
          <Tabs
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            value={value}
            aria-label="scrollable auto tabs example"
          >
            <img
              src='images/logo.jpg'
              width="60"
              height="60"
              alt="logo" />
            <Tab className={classes.list}
              label="Home"
              component={Link} to="/"
              onClick={() => {
                window.scrollTo(0, 0);
              }} />
            <Tab className={classes.list}
              label="Gallery"
              component={Link} to="/gallery"
              onClick={() => {
                window.scrollTo(0, 0);
              }} />
            <Tab className={classes.list}
              label="Workshop"
              component={Link} to="/workshop"
              onClick={() => {
                window.scrollTo(0, 0);
              }} />
            <Tab className={classes.list}
              label="About"
              component={Link} to="/about"
              onClick={() => {
                window.scrollTo(0, 0);
              }} />
            <Tab className={classes.list}
              label="Products"
              component={Link} to="/product"
              onClick={() => {
                window.scrollTo(0, 0);
              }} />
          </Tabs>
        </ThemeProvider>
      </AppBar>

      <Route value={1} exact path="/" component={Home} render={() => (
        <Redirect to="/home" />)} />
      <Route value={2} path="/gallery" component={Gallery} />
      <Route value={3} path="/workshop" component={Workshop} />
      <Route value={4} path="/about" component={About} />
      <Route value={5} path="/product" component={Product} />
      <Route value={6} path="/info" component={FooterInfo} />
      <Footer />
    </React.Fragment>

  );
}

