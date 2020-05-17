import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import tileData from './otherImages';
import { makeStyles } from '@material-ui/core/styles';

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
					src={tileData[12].img}
					alt={tileData[12].title}
					width={200}
					height={250} />

				<div className={classes.description}>
					<h3>About Us</h3>
					<hr color='#665544'></hr>
					<p>dshf skjhf kdjhf kjfh sdkhf kfjdhs lhf kdjhf jkhjf hf lkaj;lkjc hskla shkaj;.jc kv ksdcn a ckjv djvh kdjslkj kfdjhvk f</p>
					<Button size="small" variant="outlined" color='#665544' onClick={() => {
						props.switchPage(4);
						window.scrollTo(0, 0);
					}}>
						Read More
          </Button>
				</div>
			</Container>

			<Container className={classes.container} maxWidth="md">
				<div className={classes.description}>
					<h3>Painting of the Week</h3>
					<hr color='#665544'></hr>
					<p>dshf skjhf kdjhf kjfh sdkhf kfjdhs lhf kdjhf jkhjf hf lkaj;lkjc hskla shkaj;.jc kv ksdcn a ckjv djvh kdjslkj kfdjhvk f</p>
					<Button size="small" variant="outlined" color='#665544' onClick={() => {
						props.switchPage(2);
						window.scrollTo(0, 0);
					}}>
						See More
          </Button>
				</div>
				<img
					src={tileData[8].img}
					alt={tileData[8].title}
					width={200}
					height={250} />
			</Container>
		</React.Fragment>
	);
}