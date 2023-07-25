import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Userdata()
{
    const [userData, setUserdata]= useState([]);

    useEffect( ()=>{
        const getUserdata= async() =>{
            const reqData= await fetch("");
            const resData= await reqData.json();
            setUserdata(resData);
            console.log(resData);
        }    
    },[]);

    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h5 className="mt-2">Balance $85.00</h5>
                        <div className="d-grid d-md-flex justify-content-md-end mb-3">
                         <Link to="/adduser" className="btn btn-warning">Add New Biller</Link>
                        </div>
                       <table className="table table-bordered">
                        <thead>
                        <tr>
                        <th>#</th>
                        <th>Biller Name</th>
                        <th>Address</th>
                        <th>Due Date</th>
                        <th>Balance</th>
                        <th>Option</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                        <th>1</th>
                        <td>MP2 PROPOSAL</td>
                        <td>Philippines 2419</td>
                        <td>July 20, 2023</td>
                        <td>85.00</td>
                        <td>
                            <Link to="/editUser" className="btn btn-success mx-2">Edit</Link>
                            <Link to="/sendUser" className="btn btn-danger">Send</Link>
                        </td>
                        </tr>                    
                        </tbody>
                        </table>                            
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Userdata;