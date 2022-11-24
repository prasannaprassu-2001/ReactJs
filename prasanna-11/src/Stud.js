import React from 'react'
class Stud extends React.Component{
    student_Name='Chana'
    type=['Electronics', 'Mathematics', 'Computer Science']

    render(){
        return <>
        <h2>Name:{this.student_Name}</h2>
        <ul><h1>Subject:</h1>
            <li>{this.type[0]}</li>
            <li>{this.type[1]}</li>
            <li>{this.type[2]}</li>
            </ul>
            <table>
                
            </table>
        <button type='button' className='btn btn-success'>Submit</button>
        </>
    }
}
export default Stud