import React, { useState } from "react";

function Adduser()
{
    const [formValue, setFormValue]= useState({biller:'', address:'',duedate:'',balance:'',status:''});
     
    const handleInput=(e)=>{
     const {name, value}= e.target;
     setFormValue({...formValue, [name]:value});
     }
     const handleSubmit= async()=>{
        
        const allInputvalue= { biller: formValue.biller, address:formValue.address, dduedate:formValue.duedate, balance:formValue.balance, status:formValue.status};

        console.log(allInputvalue);
     }

    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h5 className="mt-2">Welcome to React Practical 2</h5>
                    <form onSubmit={ handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Biller Name</label>
                                    <input type="text" name="biller" className="form-control" value={formValue.username} onChange={ handleInput}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Address</label>
                                    <input type="text" name="address" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Due Date</label>
                                    <input type="text" name="duedate" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Balance</label>
                                    <input type="text" name="balance" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Bill Status</label>
                                    <select className="form-control" name="status">
                                        <option value="">--Please Select--</option>
                                        <option value="1">Paid</option>
                                        <option value="0">Unpaid</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label className="form-label"></label>
                                    <button type="submit" className="btn btn-success">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default Adduser;