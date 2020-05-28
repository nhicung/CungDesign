import React, { Component } from 'react';
import { Switch, Route, Link, HashRouter, Redirect } from "react-router-dom";
import { Home } from './Home';
import About from './About';
import Gallery from './Gallery';
import { Workshop } from './Workshop';
import { Product } from './Product';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import  Footer  from './Footer'
import  FooterInfo from './FooterInfo'

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

// const Styles = styled.div`
// 	.nav{
//   position: sticky;
//   float:none;
//   top:0;
//   display: block;
//   overflow: hidden;
//   align-items: center;
//   justify-content: space-between;
//   width:100%;
//   z-index: 5;
//   }
//   .header {
//     align-items: center;
//   display: flex;
//   flex-wrap: nowrap;
//   overflow-x: auto;
//   }
//   .list{
//     color: #665544;
//     padding: 20px;
//     align-items: center;
//     display: flex;
//     // font-size: 18px;
//     height: 50px;
//     justify-content: center;
//     line-height: 16px;
//     margin: 0 10px ;
//     text-decoration: none;
//     white-space: nowrap;
//   }
// `

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#665544',
    }
  },
});

const useStyles = makeStyles((theme) => ({
  nav: {
    // position: 'sticky',
    // float: 'none',
    // top: 0,
    // display: 'block',
    // overflow: 'hidden',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // width: '100%',
    // zIndex: 5,
  },
  header: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  list: {
    // color: '#665544',
    padding: 20,
    alignItems: 'center',
    display: 'flex',
    // font-size: 18px;
    height: 50,
    justifyContent: 'center',
    // lineHeight: 16,
    margin: '0 10px',
    "&:hover": {
      textDecoration: "none",
      color: "#d4d0c6",
    },
    // whiteSpace: 'nowrap',

  },
}));

export default function NavBar() {
  // handleCallToRouter = (value) => {
  //   this.props.history.push(value);
  // }
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    // <Styles>
    <HashRouter>
      <React.Fragment>
        <AppBar color="default">
          <ThemeProvider theme={theme}>
            {/* <ul className = 'header'>
              <li className = 'list'><Link to="/">Home</Link></li>
              <li className = 'list' color='white'><Link to="/gallery">Gallery</Link></li>
              <li className = 'list'><Link to="/workshop">Workshop</Link></li>
              <li className = 'list'><Link to="/about">About</Link></li>
              <li className = 'list'><Link to="/product">Product</Link></li>
            </ul> */}

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
              <Tab className={classes.list} label="Home" component={Link} to="/" />
              <Tab className={classes.list} label="Gallery" component={Link} to="/gallery" />
              <Tab className={classes.list} label="Workshop" component={Link} to="/workshop" />
              <Tab className={classes.list} label="About" component={Link} to="/about" />
              <Tab className={classes.list} label="Products" component={Link} to="/product" />
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
    // </Styles>
  );
}


// // // const Home = () => <div><h2>Home</h2></div>
// // // const About = () => <div><h2>About</h2></div>

// // const NavBar = props => {
// //   const { match, history } = props;
// //   const { params } = match;
// //   const { page } = params;

// //   const tabNameToIndex = {
// //     0: "home",
// //     1: "gallery"
// //   };

// //   const indexToTabName = {
// //     home: 0,
// //     gallery: 1
// //   };

// //   const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

// //   const handleChange = (event, newValue) => {
// //     history.push(`/${tabNameToIndex[newValue]}`);
// //     setSelectedTab(newValue);
// //   };

// //   return (
// //     <>
// //       <AppBar position="static">
// //         <Tabs value={selectedTab} onChange={handleChange}>
// //           <Tab label="Home" />
// //           <Tab label="Gallery" />
// //         </Tabs>
// //       </AppBar>
// //       {selectedTab === 0 && <Home/>}
// //       {selectedTab === 1 && <Gallery/>}
// //     </>
// //   );
// // };

// // export default NavBar;

// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

// class TabSet extends React.Component {
//   constructor(props) {
//     super(props)

//     // console.log('TabSet props', props)
//     this.state = {
//       value: this.props.value,
//     }

//     this.handleChange = (event, value) => {
//       this.props.onChange({ newVal: value, newTab: this.props.tabs[value] })

//       this.setState({ value })
//     }
//   }

//   render() {
//     const { tabs } = this.props
//     // console.info('tabs', tabs)

//     return (
//       <div>
//         <AppBar position="sticky">
//           <Tabs 
//           centered 
//           value={this.state.value} 
//           onChange={this.handleChange}
//           >
//             {tabs.map(({ label, slug }) => (
//               <Tab key={slug} value={slug} label={label} />
//             ))}
//           </Tabs>
//         </AppBar>

//         {tabs.map(tab => <tab.content key={tab.slug} />)}
//       </div>
//     )
//   }
// }

// export default TabSet
