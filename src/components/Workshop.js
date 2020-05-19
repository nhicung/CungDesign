import React from 'react';
import { BreakLine } from './LineBreak'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import tileData from './title';

const Style = styled.div`
.title{
	padding-top: 20px;
	color: #665544;
	text-align: center;
}
.container {
	padding-top: 20px;
	width: 100%;
	height: 30%;
	text-align: center;
	margin-top: 50px;
	display: flex;
	flex-direction: row;
}
.event{
	width: 50%;
	margin: 5px;
	border: 1px solid #665544;
	display: flex;
	flex-direction: row;
}
.figure {
	padding: 5%;
}
.description {
	width: 50%;
	color: #665544;
	padding: 10px;
	align-content: center;
	// font-style: italic;
	// font-family: courier;
	font-size: 15px;
}

.signup {
	color: #665544;
	padding-bottom: 70px;
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

export const Workshop = () => (
	<Style>
		<div className='title'>
			<h1>Up Coming Event</h1></div>
		<Container>
			<div className='event'>
				<img
					src={tileData[5].img}
					alt={tileData[5].title}
					width={200}
					height={250} />

				<div className='description'>
					<h5>Event 1</h5>
					<hr color='#665544'></hr>
					<p>Time: </p>
					<p>Place: </p>
					<p>Description: </p>
				</div>
			</div>
			<div className='event'>
				<img
					src={tileData[3].img}
					alt={tileData[3].title}
					width={200}
					height={250} />
				<div className='description'>
					<h5>Event 2</h5>
					<hr color='#665544'></hr>
					<p>Time: </p>
					<p>Place: </p>
					<p>Description: </p>
				</div>
			</div>
		</Container>

		<div className="title">
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
						<Form.Control type="email" placeholder="Name" />
					</Col>
				</Form.Group>

				<Form.Group as={Row} controlId="formHorizontalPassword">
					<Form.Label column sm={2}>
						Event
                    </Form.Label>
					<Col sm={10}>
						<Form.Control type="email" placeholder="Event" />
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