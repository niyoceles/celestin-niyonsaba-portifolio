import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ContactForm from './contact-form';
import SectionTitle from '../common/SectionTitle';

const useStyles = makeStyles(theme => ({
	container: {
		margin: 0,
		padding: 0,
	},
	itemContainer: {
		padding: 10,
		[theme.breakpoints.down('md')]: {
			padding: 0,
		},
	},
}));

const Contact = props => {
	const classes = useStyles();
	return (
		<Grid
			alignItems='center'
			direction='column'
			container
			className={classes.container}
			spacing={0}
		>
			<SectionTitle title='Contact Me' />
			<Grid
				container
				direction='row'
				alignItems='center'
				justify='space-between'
				spacing={0}
			>
				<ContactForm />
			</Grid>
		</Grid>
	);
};
Contact.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default Contact;
