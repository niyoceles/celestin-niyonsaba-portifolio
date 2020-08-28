import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	container: {
		color: '#fff',
		fontSize: 22,
		fontWeight: 700,
		lineHeight: 1.1,
		display: 'inline-block',
		padding: '8px 15px',
		position: 'relative',
		backgroundColor: '#2979ff',
		borderLeftColor: '#2979ff',

		'&:before': {
			content: '""',
			width: 0,
			height: 0,
			top: '100%',
			left: 5,
			display: 'block',
			position: 'absolute',
			borderStyle: 'solid',
			borderWidth: '0 0 8px 8px',
			borderColor: 'transparent',
			borderLeftColor: '#2979ff',
		},
	},
}));

const Bubble = props => {
	const classes = useStyles();
	const { content } = props;
	return <span className={classes.container}>{content}</span>;
};

export default Bubble;
