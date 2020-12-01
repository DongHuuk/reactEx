import React from 'react';

class ExampleClass extends React.Component{
    constructor(props){
      super(props)
      this.state = {count: 0}
      this.handleCount = this.handleCount.bind(this)
    }
  
    handleCount() {
      this.setState({
        count: this.state.count+1
      })
    }
  
    render(){
      return(
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={this.handleCount}>
            Click me
          </button>
        </div>
      )
    }
  }

export default ExampleClass;