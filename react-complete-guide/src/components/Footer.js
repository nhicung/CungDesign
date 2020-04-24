import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import {SocialMediaIconsReact} from 'social-media-icons-react';
// import Table from 'react-bootstrap/Table'

const Styles = styled.div`
    .footer{
    width: 100%;
    height: 200px;
    }
    .copyright {
      text-align: left;
      padding-top: 40px;
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
    }
  `;
export const Footer = () => (
  <Styles>
    <div className = "footer">
      <Container>
        <div className='iconList'>
          <SocialMediaIconsReact icon="twitter" url="https://twitter.com/your-twitter-handle"/>
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
