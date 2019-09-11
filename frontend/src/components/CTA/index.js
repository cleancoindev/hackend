import React from 'react';
import macbook from './macbook.svg';
import './index.css';

export default class CTA extends React.Component {
	constructor() {
		super();

		this.state = {
			adjectives: ['simply', 'tremendously', 'effectively', 'quickly', 'nicely', 'superbly', 'collaboratively', 'conveniently'],
			adjectiveInitial: 'easily'
		}
	}

	render() {
		return(
			<div className="section cta">
				<div>
					<div className="pageItem">
						<div>
							<h1>Manage hackathons<br /><a href='javascript:void(0)'>conveniently</a>.</h1>
							<img src={macbook} alt='Hackend dashboard demo' />
						</div>
					</div>
				</div>
			</div>
		)
	}
}
