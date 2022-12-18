import React from 'react'
import Cart from './Cart'
class Product extends React.Component {
    message = "GM"
    student = {
        std_Name: "Chana",
        email: "chana123@gmail.com",
        fee: '50000'
    }
    render() {
        return (
            <div>
               
                <Cart name={true} info={this.student} />

            </div>
        )
    }
}

export default Product