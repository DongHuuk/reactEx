import React from 'react';

class Toggle extends React.Component{
    constructor(props){
        super(props)
        this.state = {isToggleOn: true};

        //콜백에서 `this`가 작동하려면 바인딩을 해주어야 한다.
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    };

    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

export default Toggle;