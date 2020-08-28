import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Home from './Home';
import Contact from './contact';
import { Element } from 'react-scroll';

const useStyles = makeStyles(theme => ({
	container: {
		marginLeft: '20px',
		marginRight: '20px',
	},
	content: {
		zIndex: 2,
		position: 'relative',
		paddingRight: 10,
		paddingLeft: 20,
	},
	padding0: {
		padding: '0 !important',
	},
}));

const Content = () => {
	const classes = useStyles();
	return (
		<Grid container justify={'center'} className={classes.content}>
			<Grid
				xs={12}
				sm={12}
				md={8}
				item
				container
				direction={'column'}
				className={classes.padding0}
				lg={8}
			>
				<Home />
				<Element name='contact'>
					<Contact />
				</Element>
			</Grid>
		</Grid>
	);
};
Content.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default Content;
