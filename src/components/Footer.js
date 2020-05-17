import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import { IconButton } from '@material-ui/core';
//import Logo from './logo.jpg';

const Styles = styled.div`
    .footer{
    width: 100%;
    height: 225px;
    flex-shrink: 0;
    }

    .copyright {
      text-align: left;
      padding-top: 20px;
      font-size: 0.7em;
    }

    a, .navbar-light .nav-link {
      font-size: 0.9em;
      color: white;
      &:hover { color: #d4d0c6; }
    }
    
    .iconList {
      text-align: right;
      // padding-top: 10px;
    }
    .IconButton {
      color: white;
      // margin: 1px;
    }
  `;
export const Footer = () => (
  <Styles>
    <div className = "footer">
      <Container>
        <div className='iconList'>
        <IconButton className='IconButton' href="https://facebook.com/cungarttherapy" target ="_blank"><FacebookIcon/></IconButton>
        <IconButton className='IconButton' href="https://instagram.com/cungdesign" target ="_blank"><InstagramIcon /></IconButton>
        <IconButton className='IconButton' href="/home"><EmailIcon href="/home"/></IconButton>
        <IconButton className='IconButton'><TwitterIcon href="/home"/></IconButton>
        
        </div>
        <thead>
          <tr>
            <th><img 
              src='images/logo.jpg'
              width="60"
              height="60"
              alt="logo"/></th>
            <th><Nav.Link href="/home">About </Nav.Link></th>
            <th><Nav.Link eventKey="link-2">Terms & Condition</Nav.Link></th>
            <th><Nav.Link eventKey="link-2">Privacy Policy</Nav.Link></th>  
            <th><Nav.Link eventKey="link-1">Contact</Nav.Link></th> 
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td><Nav.Link href="/home">FAQ</Nav.Link></td>
            <td></td>
            <td></td>
            <td><Nav.Link href="/home">Email1@gmail.com </Nav.Link></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><Nav.Link href="/home">XXX-XXX-XXXX</Nav.Link></td>
          </tr>
        </tbody>
        <div className="copyright">
          © Copyright 2020 CungDesign
        </div>
      </Container>
    </div>
  </Styles>
  )
