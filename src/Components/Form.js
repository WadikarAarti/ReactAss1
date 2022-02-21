import React, { Component } from 'react';
import Table from './Table.js';

export default class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
    aProduct: '',
    aWeek: '',
    aQuantity: 20,
    formValid: false,
    formData: []
}

this.changeProduct = this.changeProduct.bind(this);
this.changeWeek = this.changeWeek.bind(this);
this.changeQuantity = this.changeQuantity.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}

changeProduct(event) {
this.setState({
  aProduct: event.target.value
})
}

changeWeek(event) {
this.setState({
  aWeek: event.target.value
})
}

changeQuantity (event) {
  this.setState({
    aQuantity: event.target.value
  })
  }

handleSubmit(e){
 e.preventDefault();
 if(this.state.aProduct !== "" && this.state.aWeek !== "" && this.state.aQuantity !== "" && this.state.aProduct !== null && this.state.aWeek !== null && this.state.aQuantity !== null){
     let object = {}
     object.product = this.state.aProduct;
     object.week = this.state.aWeek;
     object.quantity = this.state.aQuantity;
    console.log(object);
     this.setState({
        formValid: true,
        formData: object
      })

 }
}

  renderTable(){
    <Table formData = {this.state.formData} />
}

  render(){
  return (
    <>
     <div id="Form">
    <form onSubmit={this.handleSubmit}>
    <div className='container my-5'>
    <div className="mb-3">
    <label className="form-label">Select Product</label>
    <select type="text" className="form-control" name='product' value = {this.state.aProduct} id="productid" onChange={this.changeProduct}>
        <option value="1">--Select Product--</option>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Orange">Orange</option>
        <option value="Grapes">Grapes</option>
    </select>    
    </div>
    <div className="mb-3">
    <label className="form-label">Select Week Day</label>
    <select type="text" className="form-control" name='week' value = {this.state.aWeek} id="weekid" onChange={this.changeWeek}>
        <option value="1">--Select Day--</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wadnesday">Wadnesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
    </select>    
    </div>
    <div className="mb-3">
        <label className="form-label">Enter Quantity</label>
        <input type="number" className="form-control" name="quantity" value = {this.state.aQuantity} placeholder='Quantity' id="quantityid" onChange={this.changeQuantity} />
    </div>
    <button type="submit" value="Submit" id="add" className="btn btn-primary">Add</button>
    </div>
    </form>
    {this.state.formValid ? this.renderTable() : ''}
    </div>
    </>
  );
}
}