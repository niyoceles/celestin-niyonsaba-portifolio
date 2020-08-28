import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	container: {
		margin: 30,
		paddingLeft: 30,
		paddingRight: 30,
		paddingTop: 5,
		paddingBottom: 5,
		flexGrow: 1,
	},
	profileListItem: {
		color: '#333333',
		fontSize: 14,
		fontWeight: 700,
		textTransform: 'uppercase',
		textAlign: 'left',
		margin: 0,
		padding: 0,
		paddingTop: 10,
	},
	profileListItemValue: {
		color: '#9da0a7',
		fontSize: 16,
		textAlign: 'left',
		marginTop: -3,
		padding: 0,
		paddingTop: 10,
	},
	profileValueAItemValue: {
		color: 'inherit',
	},
	body: {
		paddingTop: 5,
	},
}));

const ContactInfo = props => {
	const classes = useStyles();
	return (
		<Grid
			container
			item
			spacing={24}
			direction='column'
			className={classes.body}
		>
			<Grid
				container
				item
				direction='row'
				align='stretch'
				justify='space-evenly'
				spacing={24}
			>
				<Grid className={classes.profileListItem} item xs={12} md={3}>
					Address:
				</Grid>
				<Grid className={classes.profileListItemValue} item xs={12} md={9}>
					Kigali, Rwanda
				</Grid>
			</Grid>
			<Grid
				container
				item
				direction='row'
				align='center'
				justify='center'
				spacing={24}
			>
				<Grid className={classes.profileListItem} item xs={12} md={3}>
					Email:
				</Grid>
				<Grid className={classes.profileListItemValue} item xs={12} md={9}>
					<a
						className={classes.profileValueAItemValue}
						href='mailto:niyoceles3@gmail.com'
					>
						niyoceles3@gmail.com
					</a>
				</Grid>
			</Grid>
			<Grid
				container
				item
				align='center'
				justify='center'
				direction='row'
				spacing={24}
			>
				<Grid className={classes.profileListItem} item xs={12} md={3}>
					Phone:
				</Grid>
				<Grid className={classes.profileListItemValue} item xs={12} md={9}>
					<a
						className={classes.profileValueAItemValue}
						href='tel:+250783067644'
					>
						+250 783 067 644
					</a>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ContactInfo;
