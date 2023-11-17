import React, { useState } from 'react'
import { NavBar } from './NavBar'
import { useNavigate } from 'react-router-dom'

export const Delete = () => {
    const navigate = useNavigate()
    const [inputField, changeinputField] = useState(
        {
            "name": ""

        }
    )


    const inputHandler = (event) => {
        changeinputField({ ...inputField, [event.target.name]: event.target.value })
    }


    const readValue = () => {
        console.log(inputField)


    }
    return (

        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <h1>Delete place  </h1>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Place</label>
                                <input type="text" name="name" value={inputField.name} onChange={inputHandler} className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={readValue} className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}