import React from 'react'
class Formal extends React.Component{
    state={
        username:"",
        password:""
    }

    render(){
        return <div>
            <h1 className='bg-success'>Pro-Stack Academy</h1>
            <form>
            <label>Username</label>
            <input type="text"/><br/><br/>
                <label>Password</label>
                <input type="text"/><br/><br/>
                <input type="submit" value='Login' className='btn btn-success'/> 
        </form>
        </div>
    }
}
export default Formal