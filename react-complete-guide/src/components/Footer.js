import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import styled from 'styled-components';
// import {SocialMediaIconsReact} from 'social-media-icons-react';
// import { loadCSS } from 'fg-loadcss';
// import { makeStyles } from '@material-ui/core/styles';
// import { green } from '@material-ui/core/colors';
// import Icon from '@material-ui/core/Icon';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import { IconButton } from '@material-ui/core';

const Styles = styled.div`
    .footer{
    width: 100%;
    height: 200px;
    }

    .copyright {
      text-align: left;
      padding-top: 20px;
      font-size: 0.7em;
    }

    a, .navbar-light .nav-link {
      font-size: 0.9em;
      color: white;
      padding-right: 40px;
      padding-left: 40px;
      &:hover { color: #d4d0c6; }
    }

    .container{
      // padding-top: 20px;
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
        <IconButton className='IconButton'><FacebookIcon href="/home"/></IconButton>
        <IconButton className='IconButton'><InstagramIcon href="/home"/></IconButton>
        <IconButton className='IconButton'><EmailIcon href="/home"/></IconButton>
        <IconButton className='IconButton'><TwitterIcon href="/home"/></IconButton>
        
        </div>
        <thead>
          <tr>
            <th><Nav.Link href="/home">Title </Nav.Link></th>
            <th><Nav.Link eventKey="link-1">Link</Nav.Link></th>
            <th><Nav.Link eventKey="link-2">Link</Nav.Link></th>   
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Nav.Link href="/home">Title 1</Nav.Link></td>
            <td><Nav.Link href="/home">Link 1</Nav.Link></td>
            <td><Nav.Link href="/home">Link 1</Nav.Link></td>
          </tr>
          <tr>
            <td><Nav.Link href="/home">Title 2</Nav.Link></td>
            <td><Nav.Link href="/home">Link 2</Nav.Link></td>
            <td><Nav.Link href="/home">Link 2</Nav.Link></td>
          </tr>
        </tbody>
        <div className="copyright">
          © RLM 2016
        </div>
      </Container>
    </div>
  </Styles>
  )
