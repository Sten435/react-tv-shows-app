const Footer = () => {
	return (
		<footer>
			<div className='creator'>
				<p>Created by: </p>
				<a href='https://twitter.com/persoons_stan'>
					<b className='name-of-creator'>Stan Persoons</b>
				</a>
				<div className='api-name'>
					<p>Api: </p>
					<b className='name-of-api' onClick={() => (window.location = 'https://tvmaze.com')}>
						tvmaze.com
					</b>
				</div>
			</div>
			<div className='social-container'>
				<a href='https://github.com/Sten435'>
					<i className='fab fa-github-alt'></i>
				</a>
				<a href='https://www.linkedin.com/in/stan-persoons'>
					<i className='fab fa-linkedin-in'></i>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
