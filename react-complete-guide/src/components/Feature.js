import React from 'react';
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Styles = styled.div`
    .container {
        // background-color: rgba(102, 85, 68, 0.7);
        border: 1px solid #665544;
        width: 70%;
        height: 400px;
        text-align: center;
        margin-top: 50px;
        display: flex;
        flex-direction: row;
    }
    .figure {
        padding-top: 50px;
    }
    .description {
        width: 50%;
        color: #665544;
        padding: 70px;
        align-content: center;
        font-style: italic;
        font-family: courier;
    }
    
`

export const Feature = () => (
    <Styles>
        <Container>
            <div className='description'>
                <h1>Who I am?</h1>
                <hr color = '#665544'></hr>
                <p>" Thdkshf thhgmbjb skhdla  askjhf sakj fal sakf ls khf ;s akuhf lskd hf dshu shxz fzh lfjh sldkhc shc ds csh djchs jhc dsh h chdshjh dhc jsdhc dhjh" </p>
            </div>
            <Figure>
                <FigureImage
                    width={400}
                    height={450}
                    alt="300*450"
                    src="Images/bro.jpg"
                />
            </Figure>
        </Container>
        <Container>
            <Figure>
                <FigureImage
                    width={450}
                    height={300}
                    alt="450*300"
                    src="Images/thucan.jpg"
                />
            </Figure>
            <div className='description'>
                <h1>Painting of the Week</h1>
                <hr color = '#665544'></hr>
                <p>" Thdkshf thhgmbjb skhdla  askjhf sakj fal sakf ls khf ;s akuhf lskd hf dshu shxz fzh lfjh sldkhc shc ds csh djchs jhc dsh h chdshjh dhc jsdhc dhjh" </p>
            </div>
        </Container>
    </Styles>
)