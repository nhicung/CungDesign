import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components';
// import FirstSlide from '../../public/Images/slide1.jpg';
// import SecondSlide from '../../public/Images/slide2.jpg';
// import ThirdSlide from '../../public/Images/slide3.jpg';

const Styles = styled.div`
    .carousel, .carousel-item{
    width: 100%;
    height: 550px;
    align-content: center;
    }
    // .carousel-caption {
    //     width: 60%;
    // }
    .caption {
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
                src='Images/slide1.jpg'
                alt="First slide"
                />
                <Carousel.Caption>
                    <div className = 'caption'>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src='Images/slide2.jpg'
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
                src='Images/slide3.jpg'
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