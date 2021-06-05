import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
	date: {
		fontSize: 16,
		fontWeight: 700,
		lineHeight: 1,
		textAlign: 'center',
		marginBottom: 0,
		color: theme.palette.primary[500],
		marginTop: 10,
	},
	header3: {
		color: '#414141',
		fontSize: 22,
		fontWeight: 600,
		textAlign: 'left',
		marginBottom: 0,
		marginTop: 5,
	},
	header4: {
		color: '#878787',
		fontSize: 16,
		fontWeight: 400,
		textAlign: 'left',
		marginBottom: 0,
		marginTop: 0,
	},
	description: {
		wordWrap: 'break-word',
		width: '100%',
	},
	large: {
		width: theme.spacing(8),
		height: theme.spacing(8),
	},
	links: {
		textDecoration: 'none',
		color: 'inherit',
	},
}));

const Event = props => {
	const classes = useStyles();
	const { logo, website, year, title, company, description } = props;
	return (
		<Grid container direction='column' spacing={0}>
			<div className={classes.date}>{year}</div>
			<br />
			<Grid
				container
				spacing={1}
				direction='row'
				justify='center'
				alignItems='left'
			>
				<Grid item xs={3}>
					<Link href={website} target='_blank'>
						<Avatar alt={company} src={logo} className={classes.large} />
					</Link>
				</Grid>
				<Grid item xs={9}>
					<h3 className={classes.header3}>
						<Link href={website} className={classes.links} target='_blank'>
							{company}
						</Link>
					</h3>
					<h4 className={classes.header4}>{title}</h4>
				</Grid>
			</Grid>

			<p className={classes.description}>{description}</p>
		</Grid>
	);
};

export default Event;
