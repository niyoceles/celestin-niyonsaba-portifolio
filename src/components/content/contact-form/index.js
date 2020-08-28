/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
	container: {
		margin: 0,
		paddingLeft: 30,
		paddingRight: 30,
		paddingTop: 15,
		paddingBottom: 15,
		flexGrow: 1,
	},
	button: {
		color: 'white',
		marginTop: 20,
		marginBottom: 20,
	},
}));

const ContactForm = () => {
	const [status, setStatus] = useState('');
	const classes = useStyles();

	const handleStatusSuccess = () => {
		setStatus('SUCCESS');
	};

	const handleStatusFailure = () => {
		setStatus('ERROR');
	};

	const submitForm = ev => {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				handleStatusSuccess();
			} else {
				handleStatusFailure();
			}
		};
		xhr.send(data);
	};
	return (
		<Paper className={classes.container}>
			<form method='post' action='https://formspree.io/mdowrkoe'>
				<Grid
					container
					direction='column'
					md={12}
					lg={12}
					spacing={2}
					justify='center'
				>
					<h2 style={{ marginBottom: 0 }}>Feel free to contact me</h2>
					<TextField
						id='name'
						label='NAME'
						margin='normal'
						name='name'
						required
					/>
					<TextField
						id='email'
						label='EMAIL'
						margin='normal'
						name='email'
						type='email'
						required
					/>
					<TextField
						id='subject'
						label='SUBJECT'
						margin='normal'
						name='subject'
						required
					/>
					<TextField
						id='message'
						label='MESSAGE'
						margin='normal'
						name='message'
						multiline
						rows={4}
						required
					/>
					<div>
						{status === 'SUCCESS' ? (
							<p>Thanks!</p>
						) : (
							<Button
								variant='contained'
								color='primary'
								type='submit'
								fullWidth
								className={classes.button}
							>
								SEND
							</Button>
						)}
						{status === 'ERROR' && <p>Ooops! There was an error.</p>}
					</div>
				</Grid>
			</form>
		</Paper>
	);
};

export default ContactForm;
