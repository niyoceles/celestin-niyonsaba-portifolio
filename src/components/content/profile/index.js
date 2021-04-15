import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import SocialIcons from '../../common/SocialIcons';
import Bubble from '../../common/Bubble';
import ContactInfo from '../../common/ContactInfo';

const useStyles = makeStyles(theme => ({
	topBodyContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	topBodyButtons: {
		marginTop: theme.spacing(4),
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(2),
		backgroundColor: '#f2f6fb',
		marginBottom: 4,
		borderRadius: '10px',
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	profileImage: {
		paddingTop: '80.25%', // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
	introduction: {
		backgroundColor: theme.palette.background.paper,
	},
	titleFeature: {
		marginTop: -50,
	},
	profileTitle: {
		fontSize: 32,
		lineHeight: 1.1,
		fontWeight: 700,
		marginBottom: 5,
		[theme.breakpoints.down('md')]: {
			fontSize: 20,
		},
	},
	profileTitleStart: {
		fontWeight: 200,
	},
	profilePosition: {
		fontSize: 18,
		[theme.breakpoints.down('md')]: {
			fontSize: 16,
		},
		fontWeight: 400,
		lineHeight: 1.1,
		marginBottom: 0,
	},
}));

export default function Profile() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<div className={classes.topBodyContent}>
				<Container maxWidth='md'>
					<Grid item xs={12} sm={12} md={12} spacing={2} justify='center'>
						<Card className={classes.card} elevation={4}>
							<Grid container spacing={4}>
								<Grid item xs={12} sm={8} md={6}>
									<Card className={classes.card} elevation={0}>
										<CardMedia
											className={classes.profileImage}
											image={`${require('../../../assets/images/pic.png')}`}
											title='Celestin Niyonsaba'
										/>
									</Card>
								</Grid>
								<Grid item xs={12} sm={8} md={6}>
									<Card className={classes.card} elevation={0}>
										<CardContent className={classes.cardContent}>
											<div>
												<Bubble content='Hi there,' />
											</div>
											<h1 className={classes.profileTitle}>
												<span className={classes.profileTitleStart}>I'm</span>{' '}
												Celestin Niyonsaba
											</h1>
											<h2 className={classes.profilePosition}>
												Software Engineer
											</h2>
											<Divider />
											<br />
											<ContactInfo />
										</CardContent>
									</Card>
								</Grid>
							</Grid>
							<SocialIcons />
						</Card>
					</Grid>
				</Container>
			</div>
			<main className={classes.introduction}>
				<Typography variant='h4' align='center' gutterBottom>
					Summary
				</Typography>
				<Typography
					variant='h5'
					align='center'
					color='textSecondary'
					component='h6'
				>
					Full-stack software engineer with passion about solving problems.{' '}
					<br />
					Specialized in web and mobile application development.
				</Typography>
			</main>
		</React.Fragment>
	);
}
