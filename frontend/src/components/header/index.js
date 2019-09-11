import React from 'react';
import './index.css';

export default class Header extends React.Component {
	constructor() {
		super();

		this.state = {
			fixedHeader: 'normal'
		}

		this.headerFixed = this.headerFixed.bind(this);
	}

	headerFixed() {
		if (window.scrollY > 20) {
			this.setState({
				fixedHeader: 'fixed'
			})
		}
		else {
			this.setState({
				fixedHeader: 'normal'
			})
		}
	}

	componentDidMount() {
		// Add listener for header fixed.
		window.addEventListener('scroll', this.headerFixed);
	}

	componentWillUnmount() {
		// Remove listener for header fixed.
		window.removeEventListener('scroll', this.headerFixed);
	}

	render() {
		return(
			<div className={'header ' + this.state.fixedHeader}>
				
			</div>
		);
	}
}
