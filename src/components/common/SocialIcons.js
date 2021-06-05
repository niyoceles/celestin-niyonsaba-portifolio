import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { SocialIcon } from 'react-social-icons';

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing.unit,
		marginTop: 15,
		marginBottom: 15,
	},
	container: {
		padding: 10,
	},
}));

const SocialIcons = (color = 'white') => {
	const classes = useStyles();
	return (
		<Grid
			item
			container
			align='center'
			justify='center'
			spacing={0}
			className={classes.container}
		>
			{/* <SocialIcon
				className={classes.button}
				url='https://www.facebook.com/niyoceles'
				fontSize='24px'
				color={color}
				target='_blank'
			/> */}
			<SocialIcon
				className={classes.button}
				url='https://github.com/niyoceles'
				fontSize='24px'
				color={color}
				target='_blank'
			/>
			<SocialIcon
				className={classes.button}
				url='https://www.linkedin.com/in/celestin-niyonsaba/'
				fontSize='24px'
				color={color}
				target='_blank'
			/>
			<SocialIcon
				className={classes.button}
				url='https://twitter.com/niyoceles'
				fontSize='24px'
				color={color}
				target='_blank'
			/>
		</Grid>
	);
};

export default SocialIcons;
