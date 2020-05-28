import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import tileData from './otherImages';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, Link, HashRouter, Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	container: {
		padding: 30,
		border: '1px solid #665544',
		height: '30%',
		// textAlign: 'left',
		marginTop: 50,
		display: 'flex',
		flexDirection: 'row',
	},
	description: {
		width: '70%',
		color: '#665544',
		padding: 70,
		// alignContent: 'left',
		// fontStyle: 'italic',
		// fontFamily: 'courier',
	},
	moreButton:{
		'&:hover': { 
			color: '#d4d0c6',
			cursor: 'pointer',
			textDecoration: 'none',
		  }
	}
	// @media (min-width: 900px) {
	// 	width: 800px;
	// },
}));

export default function SimpleContainer(props) {
	const classes = useStyles();
	return (
		<React.Fragment>
			<CssBaseline />
			<Container className={classes.container} maxWidth="md">
				<img
					src={tileData[15].img}
					alt={tileData[15].title}
					width={200}
					height={250} />

				<div className={classes.description}>
					<h3>Who are we?</h3>
					<hr color='#665544'></hr>
					<p>CungDesign captures the beautiful moment of nature, human and life. We bring creativity to inspire the art in each person.</p>
					<Button 
					className = {classes.moreButton}
					size="small" 
					variant="outlined" 
					color='#665544'component={Link} to={'/about'}  
					onClick={() => {
						window.scrollTo(0, 0);
					}}>
						Learn More
         			 </Button>
				</div>
			</Container>

			<Container className={classes.container} maxWidth="md">
				<div className={classes.description}>
					<h3>Painting of the Week</h3>
					<hr color='#665544'></hr>
					<p>"Fall in Love" is the theme painting of this week. Painted with Acrylic paints and captured while wandring around to see these beautiful pair of swans  </p>
					<Button 
					className = {classes.moreButton}
					size="small" 
					variant="outlined" 
					color='#665544' 
					component={Link} to={'/gallery'} 
					onClick={() => {
						window.scrollTo(0, 0);
					}}>
					See Other Paintings
          			</Button>
				</div>
				<img
					src={tileData[14].img}
					alt={tileData[14].title}
					width={200}
					height={250} />
			</Container>
		</React.Fragment>
	);
}