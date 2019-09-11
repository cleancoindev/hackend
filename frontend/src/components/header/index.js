import React from 'react';
import { HamburgerButton } from 'react-hamburger-button';
import './index.css';

export default class Header extends React.Component {
	constructor() {
		super();

		this.state = {
			fixedHeader: 'normal',
			showMenu: false,
			showMenuIcon: true
		}

		this.headerFixed = this.headerFixed.bind(this);
		this.updateMenu = this.updateMenu.bind(this);
		this.showMenu = this.showMenu.bind(this);
		this.linkCloseMenu = this.linkCloseMenu.bind(this);
	}

	showMenu(event) {
		event.preventDefault();
		
		this.setState({
			showMenu: !this.state.showMenu,
			open: !this.state.open
		});
	}

	linkCloseMenu(event) {
		event.preventDefault();

		this.setState({
			showMenu: false,
			open: false
		});
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

	updateMenu() {
		if (window.innerWidth > 800) {
			this.setState({
				showMenu: false,
				open: false,
				showMenuIcon: false
			});
		}
		else {
			this.setState({
				showMenuIcon: true
			});
		}
	}

	componentDidMount() {
		this.updateMenu();
		// Add listener for header fixed.
		window.addEventListener('scroll', this.headerFixed);
		// Add listener for menu size.
		window.addEventListener('resize', this.updateMenu);
	}

	componentWillUnmount() {
		// Remove listener for header fixed.
		window.removeEventListener('scroll', this.headerFixed);
		// Remove listener for menu size.
		window.removeEventListener('resize', this.updateMenu);
	}

	render() {
		return(
			<div className={'header ' + this.state.fixedHeader}>
				<div>

				</div>
				<div>
					<ul>
						<li><a href='#features'>Features</a></li>
						<li><a href='#stories'>Stories</a></li>
						<li><a href='#explore'>Explore</a></li>
						<li><a href='/login' className='header-button loginButton'>Login</a></li>
						<li><a href='/signup' className='header-button signUpButton'>Signup</a></li>
					</ul>
					{
						this.state.showMenuIcon
							? (
								<HamburgerButton
									open={this.state.open}
									onClick={this.showMenu}
									strokeWidth={3}
									color="#3c60ff"
									height={17}
									width={25}
								/>
							)
							: (
								null
							)
						}
				</div>
				{
					this.state.showMenu
						? (
							<div>
								<ul>
									<li><a href='#features'>Features</a></li>
									<li><a href='#stories'>Stories</a></li>
									<li><a href='#explore'>Explore</a></li>
									<li><a href='/login' className='header-button loginButton'>Login</a></li>
									<li><a href='/signup' className='header-button signUpButton'>Signup</a></li>
								</ul>
							</div>
						)
						: (
							null
						)
				}
			</div>
		);
	}
}
