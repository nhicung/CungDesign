import React from 'react';
import { BreakLine } from './LineBreak'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import tileData from './title';
import SubmitForm from './SubmitForm';

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
					<h5>Ancient Quarter</h5>
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
					<h5>Lotus Flower</h5>
					<hr color='#665544'></hr>
					<p>Time: </p>
					<p>Place: </p>
					<p>Description: </p>
				</div>
			</div>
		</Container>

		<SubmitForm></SubmitForm>
	</Style>
)