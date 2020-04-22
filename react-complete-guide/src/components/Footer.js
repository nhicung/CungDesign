import React from 'react';
import { Container, Nav, NavItem } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .footer{
    width: 100%;
    height: 200px;
    }
    .copyright {
      text-align: right;
    }
  `;
export const Footer = () => (
  <Styles>
    <div className = "footer">
      <Container>
        <Nav>
          <NavItem
            eventkey={1}>
            Privacy policy
          </NavItem>
          <NavItem
            eventkey={2}
            title="Item">
            Terms & Conditions
          </NavItem>
          <NavItem
            eventkey={3}>
            Some other professional link
          </NavItem>
        </Nav>

        <div className="copyright">
          © RLM 2016
        </div>
      </Container>
    </div>
  </Styles>
  )
