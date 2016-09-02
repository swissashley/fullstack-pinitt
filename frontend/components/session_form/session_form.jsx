import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		// this.redirectToJoin = this.redirectToJoin.bind(this);
		// this.redirectToLogin = this.redirectToLogin.bind(this);
		this.animeType = this.animeType.bind(this);
		this.demoLogin = this.demoLogin.bind(this);
	}

	componentDidUpdate(){
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn(){
		if (this.props.loggedIn){
			this.props.router.push("/");
		}
	}

	update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	handleSubmit(e){
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	navLink(){
		if (this.props.formType === "login") {
			return <Link to="/join">Join</Link>;
		} else {
			return <Link to="/login">Login</Link>;
		}
	}

	renderErrors(){
		return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`} className='error-prompt'>
						{error}
					</li>
				))}
			</ul>
		);
	}

	animeType($el, word, callback){

		var typing = setInterval(function(){
			$el.val( $el.val() + word.slice(0,1) );
			word = word.substr(1);

			if (!word){
				clearInterval(typing);
				callback();
			}
		}, 50);
	}

	demoLogin(e, username, password) {
		e.preventDefault();
		let $username = $('.username');
		let $password = $('.password');
		let $submitButton = $('.login-button');
		let that = this;
		this.animeType($username, username, () => {
			this.animeType($password, password, ()=> {
				that.setState({username, password });
				$submitButton.click();
			});
		});
	}

	render() {
		let loginText = (this.props.formType === "login") ? "Login" : "Sign Up";
		let demo1Button = (this.props.formType === "login") ?
		<button className="login-buttons demo-button"
			onClick={(e) => this.demoLogin(e, "george", "password")}>George</button> : "";
		let demo2Button = (this.props.formType === "login") ?
		<button className="login-buttons demo-button"
			onClick={(e) => this.demoLogin(e, "mary", "password")}>Mary</button> : "";

		return (
			<main className="session-form">
				<section className="login-form-container">
					<form
						className="login-form-box">
						Welcome to Pinitt!
						<div className="switch-button">
							{ this.navLink() }
						</div>


						<div>
						{ this.renderErrors() }
						</div>

						<div className="login-form">
							<label>
								<input
									type="text"
									value={this.state.username}
									onChange={this.update("username")}
									className="login-input username"
									placeholder="Username"/>
							</label>

							<label>
								<input
									type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input password"
									placeholder="Password" />
							</label>

							<div className="login-button-box">
								<input type="submit"
									className="login-buttons login-button"
									value={loginText}
									onClick={this.handleSubmit}/>
								{demo1Button}
								{demo2Button}
							</div>
						</div>
					</form>
				</section>

			</main>
		);
	}

}

export default withRouter(SessionForm);
