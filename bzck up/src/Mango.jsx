import React from 'react'
class Mango extends React.Component {
    render() {
        return (
            <div>
                
                <pre>{JSON.stringify(this.props)}</pre>
                <h2>Laptop Name:{this.props.prop1}</h2>
                <h3>Laptop Cost:{this.props.prop2}</h3>
               
            </div>
        )
    }
}
export default Mango