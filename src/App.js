import React, { Component } from 'react';
import Table from './Components/Table';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './App.css';


class  App extends Component {
  render() {
  return (
    <>
    <Navbar title="Products"/>
    <div className="row">
    <div className='col-md-6'>
    <Form/>
    </div>
    <Footer/>
    <div className='col-md-6'>
    <Table/>
    </div>
    </div>
    </>
  );
}
}

export default App;
