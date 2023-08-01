import React, { Fragment } from 'react';
import {Button, Table} from 'react-bootstrap';
import Data from './Data';
import {Link, useNavigate} from 'react-router-dom';

function Emp_name(){
     
    let history = useNavigate();

    const handleEdit = (id, name, age) =>{
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
        localStorage.setItem('Id',id);
    }

   const  handleDelete =(id) =>{
    var index = Data.map(function(e){
        return e.id
    }).indexOf(id);

    Data.splice(index,1);
    history('/');
  }
  return (
   <Fragment>
<div style={{margin:"10rem"}}>
        <div className="card-title">
            <h2>Employee Listing</h2>
        </div>
          <Table className=" table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    Data && Data.length > 0
                    ?
                    Data.map((item) =>{
                        return(
                            <tr>
                                <td>
                                    {item.Name}
                                </td>
                                <td>
                                    {item.Age}
                                </td>
                                <td>
                                    <Link to={'/edit'}>
                                    <Button onClick={()=> handleEdit(item.id, item.Name, item.age)}>Edit</Button>
                                    </Link>
                                    &nbsp; 
                                    &nbsp; 
                                    {/* &nbsp; //single space */}
                                    <Button onClick={()=>  handleDelete(item.id)}>DELETE</Button>
                                </td>

                            </tr>
                        )
                    })
                    :
                    "No data available"
                }

                                        
                
            </tbody>
            </Table>
            <br />
            <Link className="d-grid gap-2" to="/create">
                <Button size="lg">Create</Button>
            </Link>



</div>
</Fragment>
  )
}

export default Emp_name;
