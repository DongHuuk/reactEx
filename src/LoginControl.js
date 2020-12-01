import React from 'react';
import Greeting from './Greeting';

class LoginControl extends React.Component{
    constructor(props){
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.state = {isLoggedIn: false};
    }

    handleLoginClick(){
        console.log("login")
        console.log(this.state.isLoggedIn)
        this.setState({inLoggedIn: true})
    }

    handleLogoutClick(){
        console.log("logout")
        console.log(this.state.isLoggedIn)
        this.setState({inLoggedIn: false})
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn
        let button;
        console.log(isLoggedIn)
        isLoggedIn ? button = <LogoutButton onClick={this.handleLogoutClick}/> :
        button = <LoginButton onClick={this.handleLoginClick}/>
        console.log(button)
        
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        )
    }
}

function LoginButton(props){
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
}

function LogoutButton(props){
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}

export default LoginControl;