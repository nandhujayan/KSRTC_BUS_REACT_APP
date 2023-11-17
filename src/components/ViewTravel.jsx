import React, { useEffect, useState } from 'react';
import { NavBar } from './NavBar';
import axios from 'axios';


export const ViewTravel = () => {
    const [data, changedata] = useState([]);
    const [isLoading, changeLoading] = useState(true);
  
    const fetchdata = () => {
      axios.post("http://127.0.0.1:8000/api/viewall/").then(
        (response) => {
          changedata(response.data);
          changeLoading(false);
        }
      );
    };
  
    useEffect(() => {
      fetchdata();
    }, []);
  
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="row g-3">
                <h1>Movie list</h1>
           
  
                {isLoading ? (
                  <div>
                    <div className="spinner-grow text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-secondary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    {/* ... (similar blocks for other colors) */}
                  </div>
                ) : (
                  data.map((value, index) => (
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3" key={index}>
                      <div className="card">
                      <img class="card-img-top" src={value.image}alt="Card image cap"></img>
                        <div className="card-body">
                          <h5 className="card-title">title: {value.title}</h5>
                          <p className="card-text">place: {value.place}</p>
                          <p className="card-text">destination: {value.destination}</p>
                          <p className="card-text">description: {value.description}</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  