import React from 'react'
class Registration extends React.Component{
state={
    FirstName:"",
    LastName:"",
    Password:"",
    Email:"",
    Mobile:"",
    Gender:"",
    Country:"",
    State:""
   }
   updateHandler=(event)=>{
    this.setState({[event.target.name]:event.target.value})
   }
   submitHandler=(event)=>{
    event.preventDefault()
    console.log(this.state)
   }

    render(){
        return<>
        <h1 className='bg-success'>Registration Form</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.submitHandler}>
            <label>FirstName</label>
            <input type='text' onChange={this.updateHandler} name={'FirstName'} /><br/><br/>
            <label>LastName</label>
            <input type='text' onChange={this.updateHandler} name={'LastName'} /><br/><br/>
            <label>Password</label>
            <input type='password' onChange={this.updateHandler} name={'Password'} /><br/><br/>
            <label>Email</label>
            <input type='email' onChange={this.updateHandler} name={'Email'} /><br/><br/>
            <label>Mobile</label>
            <input type='number' onChange={this.updateHandler} name={'Mobile'} /><br/><br/>
            <label>Gender</label><br/>
            <input type='radio' onChange={this.updateHandler} name={'Gender'} value='Female'/>Female
            <input type='radio' onChange={this.updateHandler} name={'Gender'} value='Male'/>Male
            <input type='radio' onChange={this.updateHandler} name={'Gender'} value='Others'/>Others<br/><br/>
            <label>Country</label>
            <select type='text' onChange={this.updateHandler} name={'Country'}>
            <option>Select Country..</option>
            <option>India</option>
            <option>Pakistan</option>
            <option>Afghanisthan</option>
            <option>Bangladesh</option>
            </select><br/><br/>
            <label>State</label>
            <select type='text' onChange={this.updateHandler} name={'State'}>
                <option>Select State..</option>
                <option>Karnataka</option>
                <option>AndhraPradesh</option>
                <option>TamilNadu</option>
                <option>Kerala</option>
                <option>Maharashtra</option>
                <option>Delhi</option>
           </select><br/><br/>
           <input type='submit' value='Registration' className='btn btn-success'/>
        </form>
        </>
    }
}
export default Registration