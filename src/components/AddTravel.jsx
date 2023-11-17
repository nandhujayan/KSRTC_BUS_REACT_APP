import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavBar } from './NavBar'

export const AddTravel = () => {
    const navigate=useNavigate()
    const[inputField,changeinputField]=useState(
        {
            "title":"",
            "image":"",
            "place":"",
            "destination":"",
            "description":""
        }
    )
    const inputHandler=(event)=>{
        changeinputField({...inputField,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(inputField);
        axios.post("http://127.0.0.1:8000/api/add/",inputField).then((response)=>{
            alert(response.data.message);
        })
    };
  return (
    <div>
         <NavBar />
   <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
            <h1>Add Travel Details</h1>
               
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Title</label>
                    <input type="text" name="title" value={inputField.title} onChange={inputHandler} className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">image</label>
                    <input type="text"  name="image" value={inputField.image} onChange={inputHandler} className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">place</label>
                    <input type="text"  name="place" value={inputField.place} onChange={inputHandler} className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">destination</label>
                    <input type="text"  name="destination" value={inputField.destination} onChange={inputHandler} className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">description</label>
                    <input type="text"  name="description" value={inputField.description} onChange={inputHandler} className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={readValue} className="btn btn-success">submit</button>
                </div>
            </div>
        </div>
    </div>
   </div>
   </div>
  )
}
