import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
	label: {
		fontSize: 15,
		// fontFamily: 'Arial, Helvetica, sans-serif',
	},
	labelContainer: {
		marginBottom: 3,
		paddingLeft: 10,
		paddingRight: 10,
		marginTop: 10,
	},
	button: {
		marginTop: 15,
		marginBottom: 15,
	},
	container: {
		padding: 10,
	},
}));

const SkillBar = props => {
	const classes = useStyles();
	const { name, completed } = props;
	return (
		<Grid item xs={12} lg={6}>
			<Grid
				item
				container
				justify='space-between'
				className={classes.labelContainer}
			>
				<span className={classes.label}>{name}</span>
				<span className={classes.label}>{`${completed}%`}</span>
			</Grid>
			<LinearProgress variant='determinate' color='primary' value={completed} />
		</Grid>
	);
};

export default SkillBar;
