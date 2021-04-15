import React from 'react';
import Grid from '@material-ui/core/Grid';
import * as Scroll from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Profile from './profile';
import Skills from './skills';
import WorkExperience from './experiences';
import Education from './education';
// import Projects from './projects';

const { Element } = Scroll;
const useStyles = makeStyles(theme => ({
	about: {
		marginTop: 50,
		[theme.breakpoints.up('sm')]: {
			marginTop: 70,
		},
		[theme.breakpoints.down('sm')]: {
			marginTop: 0,
		},
	},
	paper: {
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

const Home = props => {
	const classes = useStyles();
	return (
		<Grid container spacing={0} className={classes.about}>
			<Grid item xs={12}>
				<Element name='profile'>
					<Profile />
				</Element>
			</Grid>
			<Grid item xs={12}>
				<Element name='experience'>
					<WorkExperience />
				</Element>
			</Grid>
			<Grid item xs={12}>
				<Element name='skills'>
					<Skills />
				</Element>
			</Grid>
			<Grid item xs={12}>
				<Element name='education'>
					<Education />
				</Element>
			</Grid>
			{/* <Grid item xs={12}>
				<Element name='projects'>
					<Projects />
				</Element>
			</Grid> */}
		</Grid>
	);
};

Home.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default Home;
