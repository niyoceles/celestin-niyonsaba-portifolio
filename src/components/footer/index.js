import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SocialIcons from '../common/SocialIcons';

const useStyles = makeStyles(() => ({
	container: {
		marginTop: 50,
	},
}));

const Footer = () => {
	const classes = useStyles();
	return (
		<Grid item className={classes.container}>
			<SocialIcons color='grey' />
		</Grid>
	);
};

export default Footer;
