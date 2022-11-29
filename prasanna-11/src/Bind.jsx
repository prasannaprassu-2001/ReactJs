import React from "react";

class Bind extends React.Component{
state={
    product:{
       pro_Name:'Floral Print Daily Wear Georgette Saree  (Multicolor)',
       image:'https://rukminim1.flixcart.com/image/832/832/kfbfr0w0-0/sari/r/p/m/free-vs-437-1-leelavati-unstitched-original-imafvss8y7sgd7sb.jpeg?q=70',
       price:500,
       quantity:1,
       total:0
 }
}
incrHandler = () => {
    this.setState({product:{...this.state.product, quantity:this.state.product.quantity + 1}})
}

decrHandler = () => {
    
    this.setState({product:{...this.state.product, quantity:this.state.product.quantity - 1}})
    
}
 render(){
        return<>
        <h1 className="navbar-dark bg-success">Do Shop & Be Happy</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
        <table className="table table-hover">
            <thead>
                
                    <tr>
                        <th>product_Name</th>
                        <th>product_image</th>
                        <th>product_price</th>
                        <th>product_quantity</th>
                        <th>product_total</th>
                       
                    </tr>
               
            </thead>
            <tbody>

                <tr>
                    <td>{this.state.product.pro_Name}</td>
                    <td><img src={this.state.product.image} alt="" height="50px"></img></td>
                    <td>{this.state.product.price}</td>
                    <td><i className="fa fa-minus-circle" onClick={this.decrHandler}></i>{this.state.product.quantity}<i className="fa fa-plus-circle" onClick={this.incrHandler}></i></td>
                    <td>{this.state.product.quantity * this.state.product.price}</td>
                </tr>
                </tbody>
        </table>
        </div>
        </div>
        </div>
              </>
    }
}
export default Bind