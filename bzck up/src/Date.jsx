import React from "react";
class Date extends React.Component{
state={
message:"Hello"
}
updateHandler = (value) =>{
    this.setState({message:value})
}

render(){
    return<>
    <h1>{this.state.message}</h1>
    <button onClick={this.updateHandler.bind(this, "Chana")}>GM</button>
                <button onClick={this.updateHandler.bind(this, "Ashok")}>GA</button>
                <button onClick={this.updateHandler.bind(this, "Vidya")}>GE</button>
                <button onClick={this.updateHandler.bind(this, "Teju")}>GN</button>
    </>
}
}
export default Date