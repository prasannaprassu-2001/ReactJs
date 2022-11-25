import React from 'react'

class Cart extends React.Component {
    render() {
        return (
            <div>
                
                <pre>{JSON.stringify(this.props)}</pre>
                <h2>Student Name:{this.props.info.std_Name}</h2>
                <h3>Student Email:{this.props.info.email}</h3>
                <h3>Student Fee:{this.props.info.fee}</h3>
            </div>
        )
    }
}

export default Cart
