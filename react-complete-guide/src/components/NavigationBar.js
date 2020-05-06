import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from './logo.jpg';

const Styles = styled.div`
  .navbar { background-color: white; }
  a, .navbar-nav, .navbar-light .nav-link {
    font-size: 1.1em;
    color: #665544;
    padding-right: 40px;
    padding-left: 40px;
    &:hover { 
      color: #d4d0c6; }
  }
  .nav-link{
    &:hover { 
      color: #d4d0c6;
      border: none; 
    }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #d4d0c6;
    &:hover { 
      color: white;
    }
  }`;

export const NavigationBar = () => (
  <Styles>
    <Navbar fixed="top" expand="lg">
      <Navbar.Brand>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto" variant="tabs">
            <Nav.Item><img 
            src={Logo}
            width="60"
            height="60"
            alt="logo"/></Nav.Item> 
            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
            <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/Gallery">Gallery</Nav.Link></Nav.Item> 
            <Nav.Item><Nav.Link href="/Workshop">Workshop</Nav.Link></Nav.Item> 
            <Nav.Item><Nav.Link href="/Product">Products</Nav.Link></Nav.Item> 
            <Nav.Item><Nav.Link href="/Blog">Blog</Nav.Link></Nav.Item> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)