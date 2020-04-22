import React from 'react';
import { Container, Nav, NavItem } from 'react-bootstrap';

function Footer(/*props*/) {
  return (
    <footer>
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

        <div className="text-center small copyright">
          © RLM 2016
        </div>
      </Container>
    </footer>
  );
}

export default Footer;