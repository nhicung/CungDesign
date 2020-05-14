import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Gallery from './Gallery';
import Box from '@material-ui/core/Box';

const Styles = styled.div`
	.container {
		padding: 30px;
		border: 1px solid #665544;
		height: 30%;
		text-align: center;
		margin-top: 50px;
		display: flex;
		flex-direction: row;

		@media(mid-width : 900px) {
			width: 800px;
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
const StyleButton = styled.button`
	background-color: white;
	color: #665544;
	border: 1px solid #665544;
	padding: 8px;
	&:hover { background-color: #d4d0c6; }`;


export default function SimpleContainer(props) {
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="md">
				<Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
					<Button onClick={() => {
						props.switchPage(1);
						window.scrollTo(0, 0);
					}}>
						Primary
            </Button>
				</Typography>
			</Container>
		</React.Fragment>
	);
}