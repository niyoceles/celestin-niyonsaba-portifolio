import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import SkillBar from './skill-bar';
import SectionTitle from '../../common/SectionTitle';

// #56c8d2
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing.unit * 2,
		height: '100%',
	},
	button: {
		marginTop: 15,
		marginBottom: 15,
	},
	container: {
		padding: 10,
	},
}));

const Skills = () => {
	const classes = useStyles();
	const skills = [
		{
			name: 'JavaScript',
			completed: 90,
		},
		{
			name: 'AWS',
			completed: 70,
		},
		{
			name: 'ExpressJs',
			completed: 90,
		},
		{
			name: 'Linux',
			completed: 75,
		},
		{
			name: 'Node',
			completed: 90,
		},
		{
			name: 'Docker',
			completed: 70,
		},
		{
			name: 'PostgreSQL',
			completed: 85,
		},
		{
			name: 'Heroku',
			completed: 95,
		},
		{
			name: 'React',
			completed: 90,
		},
		{
			name: 'Digital Ocean',
			completed: 75,
		},
		{
			name: 'React-Native',
			completed: 85,
		},
		{
			name: 'MongoDB',
			completed: 80,
		},
		{
			name: 'Redux',
			completed: 90,
		},
		{
			name: 'Firebase',
			completed: 70,
		},
		{
			name: 'Material UI',
			completed: 85,
		},
		{
			name: 'Agile',
			completed: 90,
		},
		{
			name: 'Bootstrap',
			completed: 80,
		},
		{
			name: 'GraphQL, and Apollo',
			completed: 60,
		},
	];

	const renderSkill = (skill, index) => {
		return (
			<SkillBar key={index} name={skill.name} completed={skill.completed} />
		);
	};

	return (
		<Grid
			id='skills'
			container
			align='stretch'
			direction='column'
			justify='center'
			spacing={0}
		>
			<SectionTitle title='Professional Skills' />
			<Paper className={classes.root}>
				<Grid item container direction='row' justify='space-between' xs={12}>
					{skills && skills.map(renderSkill)}
				</Grid>
			</Paper>
		</Grid>
	);
};

Skills.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default Skills;
