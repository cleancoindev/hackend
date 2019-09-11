import React from 'react';
import CTA from '../../components/CTA/'
import Header from '../../components/header';

export default class Landing extends React.Component {
	render() {
		return(
			<div>
				<Header />
				<CTA />
				<div style={custom}>

				</div>
			</div>
		);
	}
}

const custom = {
	width: '100%',
	height: '2000px'
}
