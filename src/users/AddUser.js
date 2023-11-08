import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddUser() {

    let navigate=useNavigate();

    const [user, setUser]=useState({
      email:"", name:"", typeRole:"", password:"", surname:""
    });

    const {email, name, typeRole, password, surname}=user;

    const onInputChange = (event)=>{
      setUser({ ...user, [event.target.name]: event.target.value });
    };

    const onSubmit = async (event) => {
      event.preventDefault();
      await axios.post("http://localhost:8080/user", user);
      navigate("/");
    };


  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center m-4">Enregistrer l'utilisateur</h2>
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <form onSubmit={(event) => onSubmit(event)}>
            <div className="input-group mb-3 ">
             
              <input
                type={"text"}
                className="form-control"
                placeholder="Saisissez votre email adresse : username@example.com"
                aria-label="Email"
                aria-describedby="basic-addon1"
                name="email"
                value={email}
                onChange={(event) => onInputChange(event)}
              />          
            </div>
            <div className="input-group mb-3 ">
              
              <input
                type={"text"}
                className="form-control"
                placeholder="Saisissez votre nom"
                aria-label="Name"
                aria-describedby="basic-addon1"
                name="name"
                value={name}
                onChange={(event) => onInputChange(event)}
              />
            </div>
            <div className="input-group mb-3 ">
             
              <input
                type={"text"}
                className="form-control"
                placeholder="Saisissez votre Role en MAJUSCULE"
                aria-label="TypeRole"
                aria-describedby="basic-addon1"
                name="typeRole"
                value={typeRole}
                onChange={(event) => onInputChange(event)}
              />
            </div>
            <div className="input-group mb-3 ">
              
              <input
                type={"text"}
                className="form-control"
                placeholder="Saisissez votre password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                name="password"
                value={password}
                onChange={(event) => onInputChange(event)}
              />
            </div>
            <div className="input-group mb-3 ">
              
              <input
                type={"text"}
                className="form-control"
                placeholder="Saisissez votre nom de famille"
                aria-label="Surname"
                aria-describedby="basic-addon1"
                name="surname"
                value={surname}
                onChange={(event) => onInputChange(event)}
              />
            </div>
            
            <button type="submit" className="btn btn-outline-primary">
            Enregistrer
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
            Annuler
            </Link>
            </form>
        </div>
      </div>
    </div>
  );
}
