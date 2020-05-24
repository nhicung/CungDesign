import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import styled from 'styled-components';
import tileData from './otherImages';

const Styles = styled.div`
	.card-deck{
		width: 100%;
		height: 50%;
		padding: 20px;
		color: #665544;
		margin: auto;
	}
	.frame {
    height: 100%,
    width: 100%,
    display: flex,
    justify-content: center,
    background-color: #ECECEC,
  },

  .card-img: {
    max-height: 100%,
    max-width: 100%,
  },
`

export const Product = () => (
	<Styles>
		<CardDeck>
			<Card>
				<div className = 'frame'>
					<Card.Img 
						src={tileData[1].img}
						alt={tileData[1].title} />
				</div>
				<Card.Body>
					<Card.Title>{tileData[1].title}</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a natural lead-in to
						additional content. This content is a little bit longer.
				</Card.Text>
				</Card.Body>
			</Card>
			<Card>
				<div className = 'frame'>
					<Card.Img variant='top' 
						src={tileData[2].img}
						alt={tileData[2].title} />
					</div>
				<Card.Body>
					<Card.Title>{tileData[2].title}</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a natural lead-in to
						additional content. This content is a little bit longer.
				</Card.Text>
				</Card.Body>
			</Card>
			<Card>
				<div className = 'frame'>
					<Card.Img variant='top'
						src={tileData[3].img}
						alt={tileData[3].title} />
				</div>
				<Card.Body>
					<Card.Title>{tileData[3].title}</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a natural lead-in to
						additional content. This content is a little bit longer.
				</Card.Text>
				</Card.Body>
			</Card>
			<Card>
				<div className = 'frame'>
					<Card.Img variant='top'
						src={tileData[4].img}
						alt={tileData[4].title} />
				</div>
				<Card.Body>
					<Card.Title>{tileData[4].title}</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a natural lead-in to
						additional content. This content is a little bit longer.
				</Card.Text>
				</Card.Body>
			</Card>
			</CardDeck>
			<CardDeck>
			<Card>
				<div className = 'frame'>
					<Card.Img variant='top'
						src={tileData[5].img}
						alt={tileData[5].title} />
				</div>
				<Card.Body>
					<Card.Title>{tileData[5].title}</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a natural lead-in to
						additional content. This content is a little bit longer.
				</Card.Text>
				</Card.Body>
			</Card>
			<Card>
				<div className = 'frame'>
					<Card.Img variant='top'
						src={tileData[12].img}
						alt={tileData[12].title} />
				</div>
				<Card.Body>
					<Card.Title>{tileData[12].title}</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a natural lead-in to
						additional content. This content is a little bit longer.
					</Card.Text>
				</Card.Body>
			</Card>

			<Card>
				<div className = 'frame'>
					<Card.Img variant='top'
						src={tileData[10].img}
						alt={tileData[10].title} />
				</div>
				<Card.Body>
					<Card.Title>{tileData[10].title}</Card.Title>
					<Card.Text>
						This card has supporting text below as a natural lead-in to additional
						content.{' '}
					</Card.Text>
				</Card.Body>
			</Card>

			<Card>
				<div className = 'frame'>
					<Card.Img variant='top'
						src={tileData[6].img}
						alt={tileData[6].title} />
				</div>
				<Card.Body>
					<Card.Title>{tileData[6].title}</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a natural lead-in to
						additional content. This card has even longer content than the first to
						show that equal height action.
				</Card.Text>
				</Card.Body>
			</Card>
		</CardDeck>
	</Styles>
)