import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
	scrollChor: {
		color: '#fff',
		fontSize: '14',
		fontWeight: 700,
		fontFamily: '"Open Sans", sans-serif',
		lineHeight: 1,
		textDecoration: 'none',
		marginRight: 30,
		cursor: 'pointer',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'stretch',
		[theme.breakpoints.down('md')]: {
			marginRight: 0,
			marginBottom: 30,
			color: 'white',
		},
	},
	navigationItem: {
		color: 'black',
		[theme.breakpoints.down('md')]: {
			color: 'white',
		},
	},
	spanClass: {
		height: 3,
		marginTop: 10,
		width: '100%',
		backgroundColor: 'transparent',
	},
	activeSpanClass: {
		backgroundColor: theme.palette.primary[500],
		[theme.breakpoints.down('md')]: {
			backgroundColor: 'transparent',
		},
	},
	activeTitle: {
		[theme.breakpoints.down('md')]: {
			fontStyle: 'italic',
			fontSize: '16',
			fontWeight: 'bold',
		},
	},
}));

const LinkTo = props => {
	const classes = useStyles();
	const [isLinkActive, setLinkActive] = useState(false);

	const handleSetActive = () => {
		setLinkActive(true);
	};

	const handleSetInactive = () => {
		setLinkActive(false);
	};

	const { to, title, enableNavigationItemClass, offset } = props;
	return (
		<Link
			to={to}
			spy={true}
			smooth={true}
			duration={500}
			offset={offset}
			onSetActive={handleSetActive}
			onSetInactive={handleSetInactive}
			className={classNames({
				[classes.scrollChor]: true,
				[classes.navigationItem]: enableNavigationItemClass,
			})}
		>
			<span
				className={classNames({
					[classes.activeTitle]: isLinkActive,
				})}
			>
				{title}
			</span>
			<span
				className={classNames({
					[classes.spanClass]: true,
					[classes.activeSpanClass]: isLinkActive,
				})}
			></span>
		</Link>
	);
};

export default LinkTo;
