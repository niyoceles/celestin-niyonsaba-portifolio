import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import EventContainer from '../../common/event-container';
import Event from '../timeline/event';
import SectionTitle from '../../common/SectionTitle';
import { LEFT, RIGHT } from '../../../utils/Constants';
import TimelineBar from '../../common/timeline-bar';
import aos from '../../../assets/images/oas.jpeg';
import andela from '../../../assets/images/andela.png';
import stylos from '../../../assets/images/stylos.jpeg';
import rtc from '../../../assets/images/rtc-logo.jpeg';

const useStyles = makeStyles(theme => ({
	container: {
		alignItems: 'stretch',
		justifyItems: 'center',
		[theme.breakpoints.down('md')]: {
			alignItems: 'stretch',
			justifyItems: 'space-evenly',
		},
		paddingBottom:20,
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
			logo: aos,
			website: 'https://www.aos.rw/',
			year: 'March 2021 - Present ',
			company: 'AOS',
			title: 'Mobile Application Developer',
			description:
				'Develop Native and Hybrid mobile application for different form factors (phones & tablet). Interact with various business users, present prototypes and explain system functionality',
		},
		{
			logo: stylos,
			website: 'https://stylosconsults.com/',
			year: 'April 2020 - March 2021',
			company: 'STYLOS Consults',
			title: 'Software Engineer Consultant',
			description:
				'Design and implement software web development solutions. reporting the progress of the projects to the clients. Provide advice and recommendations to the clients.',
		},
		{
			logo: andela,
			website: 'https://www.andela.com/',
			year: 'April 2019 - October 2019',
			company: 'Andela',
			title: 'Software Engineer',
			description:
				'Design and develop world-class features by ensuring the code quality through Unit Tests, CI, debugging, Code reviews and provide/implement feedback with in a team',
		},
		{
			logo: rtc,
			website: 'https://rtc-rub.org/',
			year: 'September 2018 - March 2019',
			company: 'Rubavu Technical College',
			title: 'IT support',
			description:
				'Implement software solutions based on school management and provide IT support services.',
		},
	];

	const renderExperience = (experience, index) => {
		return (
			<EventContainer key={index} alignment={index % 2 === 0 ? LEFT : RIGHT}>
				<Event
					website={experience.website}
					logo={experience.logo}
					title={experience.title}
					company={experience.company}
					description={experience.description}
					year={experience.year}
				/>
			</EventContainer>
		);
	};

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
