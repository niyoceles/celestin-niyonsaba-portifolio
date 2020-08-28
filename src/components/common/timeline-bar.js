import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
	bar: {
		content: '""',
		width: 4,
		opacity: 0.2,
		marginLeft: -2,
		position: 'absolute',
		left: '50%',
		backgroundColor: 'blue',
	},
}));

const TimelineBar = props => {
	const classes = useStyles();
	const { barClass } = props;
	return (
		<div
			className={classNames({
				[classes.bar]: true,
				[barClass]: true,
			})}
		/>
	);
};

export default TimelineBar;
