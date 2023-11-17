import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()
  const [inputField, changeinputField] = useState(

    {
      "email": "",
      "password": ""
    }
  )
  const inputHandler = (event) => {
    changeinputField({ ...inputField, [event.target.name]: event.target.value })
  }
  const readValue = () => {
    console.log(inputField)
    if (inputField.email == "admin@gmail.com" && inputField.password == "12345") {
      navigate("/AddTravel")

    } else {
      alert("Inavlid credential")

    }
    alert("Login successfull")

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
                  Please enter login details
                </div>
                <div class="card-body">
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text" name="email" value={inputField.email} onChange={inputHandler} className="form-control" />
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="password" name="password" value={inputField.password} onChange={inputHandler} className="form-control" />
                  </div>


                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={readValue} className="btn btn-success">Submit</button>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/Registration">Register Here </Link>
                    </li>
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

