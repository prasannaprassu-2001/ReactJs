import React from 'react'
import employees from './emp'

 class Data extends React.Component{

    render(){
        return <div>
            <div className='container'>
                <pre>{JSON.stringify(employees)}</pre>
                    <div className='row'>
                        <div className='col-md-8'>
            <table className='table table-hover'>
                <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>First_Name</th>
                                    <th>Last_Name</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>Ip_Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                employees.map((employee)=>{
                               return(
                               <tr>
                                    <td>{employee.id}</td>
                                    <td>{employee.first_name}</td>
                                    <td>{employee.last_name}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.gender}</td>
                                    <td>{employee.ip_address}</td>
                                </tr>)
                                
                                })
                            } 
                            </tbody>
                        </table>
        </div>
        </div>
        </div>
        </div>
    }
 }
export default Data