import React from 'react';
import { BreakLine } from './LineBreak'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components';

const Style = styled.div`
.intro{
    padding-top: 100px;
    color: #665544
}

.signup {
    color: #665544;
    padding-top: 70px;
    padding-left: 30%;
    text-align: left;
    
}
.form-group {
    width:60%;
}

.button {
    bacground-color: #665544;
}
`
const StyleButton = styled.button`
    color: white;
    background-color: #665544;
    padding: 8px;
    &:hover { background-color: #d4d0c6; color:#665544 }`

export const Workshop  = () => (
    <Style>
        <div className="intro">
        <h1>Let's get painting!</h1>
        <p>Sign up for our workshop</p>
        <BreakLine w="50%" />
        </div>
        <div className="signup">
            <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Your Name
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Event
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                            Payment Type
                        </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                        type="radio"
                        label="cash"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        />
                        <Form.Check
                        type="radio"
                        label="credit card"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        />
                    </Col>
                    </Form.Group>
                </fieldset>
                <Form.Group as={Row} controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                    <p>By clicking confirmation you agree to our Terms & Condition</p>
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    <StyleButton type="submit">Confirm</StyleButton>
                    </Col>
                </Form.Group>
            </Form>
        </div>
</Style>
)