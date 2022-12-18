import React from 'react'
class Capt extends React.Component{
state={
    msg : "Hello, Gm",
}
gmHandler = () => {
this.setState({msg:"Hi.. React"})
}

gnHandler = () => {
    this.setState({msg:"Hello, React"})
}

    render(){
        return <>
<h1>{this.state.msg}</h1>
<button type="button" onClick={this.gmHandler}>GM  </button> <nbsp></nbsp>
<button type="button" onClick={this.gnHandler}>GN</button>
        </>
    }
   
    
}
export default Capt