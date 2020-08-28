import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	sectionTitle: {
		color: '#3d4451',
		fontSize: 34,
		lineHeight: 1.2,
		fontWeight: 600,
		textAlign: 'center',
		marginBottom: 20,
		marginTop: 30,
	},
}));

const SectionTitle = props => {
	const classes = useStyles();
	const { title } = props;
	return <span className={classes.sectionTitle}>{title}</span>;
};

export default SectionTitle;
