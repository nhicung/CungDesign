import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components';
import FirstSlide from './Images/slide1.jpg';
import SecondSlide from './Images/slide2.jpg';
import ThirdSlide from './Images/slide3.jpg';

const Styles = styled.div`
    .carousel, .carousel-item{
    width: 100%;
    height: 550px;
    }
  `;

export const CarouselHandler = () => (
    <Styles>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={FirstSlide}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={SecondSlide}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ThirdSlide}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Styles>
)