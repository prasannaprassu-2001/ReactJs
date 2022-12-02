import React from 'react'
class Formal extends React.Component{
    state={
        email:"",
        password:""
    }
    emailHandler=(event)=>{
        this.setState({email:event.target.value})
    }
    passwordHandler=(event)=>{
        this.setState({password:event.target.value})
    }
    submitHandler=(event)=>{
        event.preventDefault()
        console.log(this.state)
    }

    render(){
        return <div>
            <h1 className='bg-success'>Pro-Stack Academy</h1>
            <pre>{JSON.stringify(this.state)}</pre>
            <form onSubmit={this.submitHandler}>
            <label>Email</label>
            <input type="email" onChange={this.emailHandler}/><br/><br/>
                <label>Password</label>
                <input type="password" onChange={this.passwordHandler}/><br/><br/>
                <input type="submit" value='Login' className='btn btn-success'/> 
        </form>
        </div>
    }
}
export default Formal