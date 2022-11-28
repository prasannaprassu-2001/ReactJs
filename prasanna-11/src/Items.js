import React from 'react'
 class Items extends React.Component{
state={
    product_Name:'Iphone',
    image:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg',
    price:49999,
    quantity:1,
    total:0
}

state1 = {
    product_Name:'Asus',
    image:'https://fdn2.gsmarena.com/vv/pics/asus/asus-zenfone-max-zc550kl-1.jpg',
    price:39999,
    total:0
}
incrHandler = () => {
    this.setState({quantity:this.state.quantity + 1})
}

decrHandler = () => {
    
    this.setState({quantity:this.state.quantity - 1})
    
}


    render(){
        return <>
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
                    <td>{this.state.product_Name}</td>
                    <td><img src={this.state.image} alt="" height="50px"></img></td>
                    <td>{this.state.price}</td>
                    <td><i className="fa fa-minus-circle" onClick={this.decrHandler}></i>{this.state.quantity}<i className="fa fa-plus-circle" onClick={this.incrHandler}></i></td>
                    <td>{this.state.quantity * this.state.price}</td>
                </tr>
                <tr>
                    <td>{this.state1.product_Name}</td>
                    <td><img src={this.state1.image} alt="" height="50px"></img></td>
                    <td>{this.state1.price}</td>
                    <td><i className="fa fa-minus-circle" onClick={this.decrHandler}></i>{this.state.quantity}<i className="fa fa-plus-circle" onClick={this.incrHandler}></i></td>
                    <td>{this.state1.quantity * this.state1.price}</td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>
        </div>
        </>
    }
 }
 export default Items
