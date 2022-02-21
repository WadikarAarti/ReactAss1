import React from 'react';
import Form from './Form.js';

export default class Table extends Form {
    constructor(props){
        super(props);
    }

  render(){
     const {formData} = this.props;
     let rows = []  
     if(formData){
       for(var i = 0; i < formData.length;i++){
        rows.push(<tr><td>{formData[i].product}</td><td>{formData[i].week}</td><td>{formData[i].quantity}</td></tr>)
        }  
      }
      return(
          <table className='container my-5'>
              <tbody>
                    <tr>
                        <th>Product</th>
                        <th>Week</th>
                        <th>Quantity</th>
                    </tr>
                    {rows}
                </tbody>
          </table>
      );
    }
   }
