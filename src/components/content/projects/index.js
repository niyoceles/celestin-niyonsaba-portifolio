import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';

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
		paddingBottom: theme.spacing(8),
		backgroundColor: '#f2f6fb',
		marginBottom: 40,
		borderRadius: '10px',
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		'&:hover': {
			background: '#e3e5e6',
		},
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	profileImage: {
		paddingTop: '70.25%', // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
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
	profileSocial: {
		backgroundColor: theme.palette.primary[500],
	},
}));

const projects = [
	{
		image: `${require('../../../assets/images/celestin-portilio.png')}`,
		link: 'https://celestin-niyonsaba.netlify.app/',
		title: 'My Portifolio',
		description:
			'Here is my portifolio, created in React 16, with Material UI, Hooks, functional component and connect Formspree.io platform for handling contacted form REST API',
	},
	{
		image: `${require('../../../assets/images/stylos.png')}`,
		link: 'https://stylosconsults.com/',
		title: 'STYLOS Consults Website',
		description:
			'Stylos consults company website. created in PHP and MySQL, bootstrap 4, Html&css3 and Javascript',
	},
	{
		image: `${require('../../../assets/images/authors-haven.png')}`,
		link: 'https://ah-92explorers-frontend.herokuapp.com/login',
		title: "Authors' Haven",
		description:
			'A Social platform for the creative at heart. Vision: Create a community of like minded authors to foster inspiration and innovation by leveraging the modern web.',
	},
];

export default function Projects() {
	const classes = useStyles();
	// const dispatch = useDispatch();
	return (
		<React.Fragment>
			<CssBaseline />
			<Divider />
			<Container className={classes.cardGrid} maxWidth='md'>
				<Typography
					component='h3'
					variant='h5'
					align='center'
					color='textPrimary'
					className={classes.titleFeature}
					gutterBottom
				>
					Projects
				</Typography>
				<Grid container spacing={4}>
					{projects &&
						projects.map(card => (
							<Grid item key={card} xs={12} sm={6} md={4}>
								<Card className={classes.card}>
									<Link
										href={card.link}
										underline='none'
										color='inherit'
										target='_blank'
									>
										<CardMedia
											className={classes.cardMedia}
											image={card.image}
											title={card.title}
										/>
										<CardContent className={classes.cardContent}>
											<Typography gutterBottom variant='h5' component='h2'>
												{card.title}
											</Typography>
											<Typography>{card.description}</Typography>
										</CardContent>
									</Link>
								</Card>
							</Grid>
						))}
				</Grid>
			</Container>
		</React.Fragment>
	);
}
