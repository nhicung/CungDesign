import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import styled from 'styled-components';


const Styles = styled.div`
    .card-deck{
        width: 70%;
        height: 50%;
        padding: 100px;
        color: #665544
    }
`

export const Product = () => (
    <Styles>
    <CardDeck>
    <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
        <Card.Title>Item1</Card.Title>
        <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
        </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
    </Card>
    <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
        <Card.Title>Item2</Card.Title>
        <Card.Text>
            This card has supporting text below as a natural lead-in to additional
            content.{' '}
        </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
    </Card>
    <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
        <Card.Title>Item3</Card.Title>
        <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
        </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
    </Card>
</CardDeck>
</Styles>
)