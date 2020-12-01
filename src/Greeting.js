import React from 'react';

class Greeting extends React.Component{
    // constructor(props){
    //     super(props)
    // }

    render(){
        if(this.props.isLoggedIn){
            return <UserGreeting />
        }else{
            return <GuestGreeting />
        }
    }
}

function UserGreeting(props){
    return <h1>Welcom back!</h1>
}

function GuestGreeting(props){
    return <h1>Please sign up.</h1>
}

export default Greeting;