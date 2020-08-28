import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import EventContainer from '../../common/event-container';
import Event from '../timeline/event';
import SectionTitle from '../../common/SectionTitle';
import { LEFT, RIGHT } from '../../../utils/Constants';
import TimelineBar from '../../common/timeline-bar';

const useStyles = makeStyles(theme => ({
	container: {
		alignItems: 'stretch',
		justifyItems: 'center',
		[theme.breakpoints.down('md')]: {
			alignItems: 'stretch',
			justifyItems: 'space-evenly',
		},
	},
	barClass: {
		height: 585,
		top: 80,
		[theme.breakpoints.down('md')]: {
			height: 1300,
			top: 20,
			zIndex: -1,
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
	},
}));

const Experiences = () => {
	const classes = useStyles();
	let experiences = [
		{
			year: 'April 2020 - present',
			company: 'STYLOS Consults',
			title: 'Software engineer consultant',
			description:
				'Responsible for conversion of the client’s ideas from traditional to modern technology in terms of system performance, capacity management, scalability, and provide advice and consulting services',
		},
		{
			year: 'April 2019 - October 2019',
			company: 'Andela',
			title: 'Software Engineer',
			description:
				'Responsible for developing the component features, detailed class design, integration with other components and ensuring the code quality through Unit Tests, CI and Code reviews',
		},
		{
			year: 'April 2018 - March 2019',
			company: 'Rubavu Technical College',
			title: 'IT support engineer',
			description:
				'Implement software solution based on school management and provide IT support services.',
		},
		{
			year: 'January 2017 - March 2017',
			company: 'AA UNI RWANDA Ltd',
			title: 'IT support Engineer intern',
			description:
				'Responsible for mantaining EBM machine maintaince and clean up and provide support and training the clients about using EBM Software',
		},
	];

	const renderExperience = (experience, index) => {
		return (
			<EventContainer key={index} alignment={index % 2 === 0 ? LEFT : RIGHT}>
				<Event
					title={experience.title}
					company={experience.company}
					description={experience.description}
					year={experience.year}
				/>
			</EventContainer>
		);
	};

	console.log('this experience', experiences);
	return (
		<Grid
			container
			item
			xs={12}
			spacing={0}
			className={classes.container}
			direction='column'
			justify='center'
		>
			<SectionTitle title='Work Experience' />
			<div style={{ position: 'relative' }}>
				<div className={classes.clear}>
					<TimelineBar barClass={classes.barClass} />
					{experiences && experiences.map(renderExperience)}
				</div>
			</div>
		</Grid>
	);
};

Experiences.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default Experiences;