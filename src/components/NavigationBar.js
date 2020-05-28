import React from 'react';
import { Route, Link, HashRouter, Redirect } from "react-router-dom";
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

export default function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <HashRouter>
      <React.Fragment>
        <AppBar color="default">
          <ThemeProvider theme={theme}>
            <Tabs
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
        <hr />

        <Route value={value} exact path="/" component={Home} render={() => (
          <Redirect to="/home" />)} />
        <Route value={value} path="/gallery" component={Gallery} />
        <Route value={value} path="/workshop" component={Workshop} />
        <Route value={value} path="/about" component={About} />
        <Route value={value} path="/product" component={Product} />
        <Route value={value} path="/info" component={FooterInfo} />
      </React.Fragment>
      <Footer />
    </HashRouter>
  );
}

