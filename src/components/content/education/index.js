import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import EventContainer from '../../common/event-container';
import Course from './course';
import SectionTitle from '../../common/SectionTitle';
import { LEFT, RIGHT } from '../../../utils/Constants';
import TimelineBar from './../../common/timeline-bar';

const useStyles = makeStyles(theme => ({
	container: {
		alignItems: 'stretch',
		justifyItems: 'center',
		[theme.breakpoints.down('md')]: {
			justifyItems: 'space-evenly',
		},
	},
	relative: {
		position: 'relative',
	},
	clear: {
		position: 'relative',
		'*zoom': 1,

		'&:before': {
			content: '""',
			display: 'table',
		},

		'&:after': {
			content: '""',
			display: 'table',
			clear: 'both',
		},
		color: 'green',
	},
	barClass: {
		height: 220,
		top: 80,
		[theme.breakpoints.down('md')]: {
			height: 500,
			top: 20,
			zIndex: -1,
		},
		backgroundColor: 'blue',
	},
}));

const Educations = () => {
	const classes = useStyles();

	let educations = [
		{
			year: '2014 - 2018',
			college: 'University of Tourism, Technology and Business Studies',
			description:
				'Bachelor\'s degree in Computer engineering',
		},
		{
			year: '2010 - 2013',
			college: 'G.S. APPEGA-Gahengeri',
			description: 'Diploma in Accountancy',
		},
	];

	const renderEducation = (education, index) => {
		return (
			<EventContainer key={index} alignment={index % 2 === 0 ? LEFT : RIGHT}>
				<Course
					name={education.description}
					university={education.college}
					year={education.year}
				/>
			</EventContainer>
		);
	};
	return (
		<Grid
			container
			className={classes.container}
			spacing={0}
			direction='column'
		>
			<SectionTitle title='Education' />
			<div style={{ position: 'relative' }}>
				<div className={classes.clear}>
					<TimelineBar barClass={classes.barClass} />
					{educations && educations.map(renderEducation)}
				</div>
			</div>
		</Grid>
	);
};

Educations.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default Educations;
