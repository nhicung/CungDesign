import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from './Images/logo.jpg';
import ThemePic from './Images/hanoi.jpg';

const Styles = styled.div`
  .navbar { background-color: white; }
  a, .navbar-nav, .navbar-light .nav-link {
    font-size: 1.1em;
    color: #665544;
    padding-right: 40px;
    padding-left: 40px;
    &:hover { color: #d4d0c6; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #d4d0c6;
    &:hover { color: white; }
  }`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
            <Nav.Item><Nav.Link href="/"><img 
            src={Logo}
            width="60"
            height="60"
            alt="logo"/></Nav.Link></Nav.Item> 
            
            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
            <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/">Gallery</Nav.Link></Nav.Item> 
            <Nav.Item><Nav.Link href="/">Workshop</Nav.Link></Nav.Item> 
            <Nav.Item><Nav.Link href="/">Products</Nav.Link></Nav.Item> 
            <Nav.Item><Nav.Link href="/">Inspiration</Nav.Link></Nav.Item> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <img 
        src={ThemePic}
        width="100%"
        height="100%"
        alt="logo"/>
  </Styles>
)