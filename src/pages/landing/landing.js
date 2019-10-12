import React from 'react';
import TextLoop from "react-text-loop";
import CountUp from 'react-countup';

import airtable from './temp_images/airtable.png';
import drive from './temp_images/drive.png';
import fathom from './temp_images/fathom.png';
import instagram from './temp_images/instagram.png';
import intercom from './temp_images/intercom.png';
import porkbun from './temp_images/porkbun.png';
import printfection from './temp_images/printfection.png';
import slack from './temp_images/slack.png';
import trello from './temp_images/trello.png';

import './index.css';

export default class Landing extends React.Component {
	constructor() {
		super();

		this.state = {
			width: 80
		};

		this.handleLandingScroll = this.handleLandingScroll.bind(this);
	}
	handleLandingScroll() {
		let position = window.pageYOffset;
		if (position > 150) {
			if (this.state.width < 100) {
				this.setState({
					width: 80 + ((position - 150) / 15)
				})
			} 
			else if (this.state.width >= 100) {
				this.setState({
					width: 100
				})
			}
		} else {
			if (this.state.width <= 80) {
				this.setState({
					width: 80
				})
			} else {
				this.setState({
					width: this.state.width + ((position - 150) / 30)
				})
			}
		}
		console.log(this.state.width);
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleLandingScroll);
	}
	render() {
		return(
			<div className="section landing">
				<div>
					<div>
						<div>
							<h1>hackend.</h1>
						</div>
						<div>
							<ul>
								<li><a href='#'>About</a></li>
								<li><a href='#'>Press</a></li>
								<li><a href='#'>Pricing</a></li>
								<li><a href='#' className='betaButton'>Login</a></li>
							</ul>
						</div>
					</div>
					<div>
						<div>
							<h1>Hackathon management made <TextLoop interval={2000}>
								<span>better</span>
								<span>easier</span>
								<span>cheaper</span>
								<span>quicker</span>
								<span>simpler</span>
								<span>faster</span>
							</TextLoop>{" "}</h1>
							<p><span className="focus">Hackend</span> makes it easy to host your own hackathon.</p>
							<p>Begin accepting and <span className="focus">managing applications</span> instantly.</p>
							<a href='https://google.com' className='betaButton'>Request Beta Access</a>
						</div>
						<div>

						</div>
					</div>
				</div>
				<div style={{width: this.state.width + '%'}} className="features">
					<div>
						<h1>End-to-end management</h1>
						<p>Forget the hassles of <span>Spreadsheets</span>, <span>Forms</span>, and <span>Bulk</span> email platforms.</p>
						<p>Hackend brings all the necessary tools together, into one unified platform.</p>
						<div>
							<div>
								<div></div>
								<div>
									<h3>Manage applications</h3>
									<p>Collect, analyze, and respond to hackathon applications in real-time with your team.</p>
								</div>
							</div>
							<div>
								<div></div>
								<div>
									<h3>Send emails</h3>
									<p>From event information to sponsor newsletters, simplify your mailing list.</p>
								</div>
							</div>
							<div>
								<div></div>
								<div>
									<h3>Track volunteers</h3>
									<p>Trello-like boards to coordinate your planning and manage event day-of.</p>
								</div>
							</div>
							<div>
								<div></div>
								<div>
									<h3>Simplify logistics</h3>
									<p>Generate printable QR nametags to simplify check-ins and increase security.</p>
								</div>
							</div>
							<div>
								<div></div>
								<div>
									<h3>Organize goodies</h3>
									<p>Automate correct swag delivery and sizing, prize delivery, and more.</p>
								</div>
							</div>
							<div>
								<div></div>
								<div>
									<h3>Integrate workflows</h3>
									<p>Use the tools you've already grown accustomed to, right within Hackend.</p>
								</div>
							</div>
						</div>
						<p>+ hundreds of other <span>awesome</span> features...</p>
					</div>
				</div>
				<div className="integrations">
					<img src={airtable} id="airtable"/>
					<img src={drive} id="drive"/>
					<img src={fathom} id="fathom"/>
					<img src={instagram} id="instagram"/>
					<img src={porkbun} id="porkbun" className="specific"/>
					<img src={printfection} id="printfection"/>
					<img src={slack} id="slack"/>
					<img src={trello} id="trello" className="specific"/>
					<div>
						<h1>Over <span><CountUp start={10} end={45} duration={3}/></span> integrations.</h1>
						<p>Connect with your favourite tools and start collaborating together.</p>
					</div>
				</div>
				<div className="testemonials">

				</div>
				<div className="footer">
					<div>

					</div>
					<div>

					</div>
				</div>
			</div>
		);
	}
}
