import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Registration = () => {
    const navigate = useNavigate()
    const [inputField, changeinputField] = useState(

        {
            "username": "",
            "password": "",
            "email": "",
            "phone": "",
            "address": "",
            "pincode": ""
        }
    )
    const inputHandler = (event) => {
        changeinputField({ ...inputField, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(inputField)
        alert("Regsitration successfull");
    }
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <h1>LOGIN</h1>

                            <div class="card text-center">
                                <div class="card-header">
                                    Please enter Registration details
                                </div>
                                <div class="card-body">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">username</label>
                                        <input type="text" name="username" value={inputField.username} onChange={inputHandler} className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">password</label>
                                        <input type="password" name="password" value={inputField.password} onChange={inputHandler} className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">email</label>
                                        <input type="text" name="email" value={inputField.email} onChange={inputHandler} className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">phone</label>
                                        <input type="text" name="phone" value={inputField.phone} onChange={inputHandler} className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">address</label>
                                        <input type="text" name="address" value={inputField.address} onChange={inputHandler} className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">pincode</label>
                                        <input type="text" name="pincode" value={inputField.pincode} onChange={inputHandler} className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <button onClick={readValue} className="btn btn-success">Submit</button>
                                    </div>
                                   

                                </div>
                                <div class="card-footer text-body-secondary">
                                    @laaiq
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

