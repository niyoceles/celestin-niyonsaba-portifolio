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
			name: 'JavaScript /TypeScript',
			completed: 90,
		},
		{
			name: 'React /Hooks /redux',
			completed: 90,
		},
		{
			name: 'Bootstrap/Material UI',
			completed: 85,
		},

		{
			name: 'Ionic',
			completed: 85,
		},
		{
			name: 'React-Native',
			completed: 85,
		},
		{
			name: 'CI/CD',
			completed: 80,
		},
		{
			name: 'NodeJs/ExpressJs',
			completed: 90,
		},
		{
			name: 'PostgreSQL /Mysql ',
			completed: 85,
		},
		{
			name: 'Heroku',
			completed: 95,
		},
		{
			name: 'Digital Ocean',
			completed: 80,
		},
		{
			name: 'Firebase',
			completed: 70,
		},
		{
			name: 'AWS',
			completed: 60,
		}
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
