import React from 'react'
import Function from './Function'

class Room extends React.Component{
    Account = {
      acc_Name:"SBI",
      acc_Number:123456789,
      
      
    }
    render(){
        return <>
             <Function info={this.Account} />
            </>
    }
}
export default Room