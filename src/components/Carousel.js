import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components';

const Styles = styled.div`
	// .carousel-item  {
	// 	height: 550px;
	// }
	.carousel, .carousel-item{
		width: 100%;
	}

	.carousel-caption {
		height: 60%;
	}

	.carousel-caption .caption {
		padding-top: 10%;
		padding-bottom: 10px;
		height: 100%;
		background-color: rgba(238, 238, 238, 0.7);
		color: #665544;
	}
  `;

export const CarouselHandler = () => (
	<Styles>
		<Carousel>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src='images/slide1.jpg'
					alt="First slide"
				/>
				<Carousel.Caption>
					<div className='caption'>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src='images/slide2.jpg'
					alt="Third slide"
				/>
				<Carousel.Caption>
					<div className='caption'>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src='images/slide3.jpg'
					alt="Third slide"
				/>
				<Carousel.Caption>
					<div className='caption'>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	</Styles>
)