import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddProfessor() {
  let navigate = useNavigate();

  const [professor, setProfessor] = useState({
    firstname: "",
    surname: "",
    typeSubject: "",
    typeClient:"",
    email: "",
    address:"",
    ville: "",
  });

  const { firstname, surname, typeSubject, typeClient,email, address, ville } = professor;

  const onInputChange = (event) => {
    setProfessor({ ...professor, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:8080/professor", professor);
    navigate("/tabprofessors");
  };

  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center m-4">Enregistrer le Professor</h2>
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <form onSubmit={(event) => onSubmit(event)}>
            <div className="input-group mb-3 ">
              <input
                type={"text"}
                className="form-control"
                placeholder="Saisissez votre prenom"
                aria-label="Firstname"
                aria-describedby="basic-addon1"
                name="firstname"
                value={firstname}
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
            <div className="input-group mb-3 ">
              <input
                type={"text"}
                className="form-control"
                placeholder="Saisissez en MAJUSCULE votre Subject "
                aria-label="Subject"
                aria-describedby="basic-addon1"
                name="typeSubject"
                value={typeSubject}
                onChange={(event) => onInputChange(event)}
              />
            </div>
            <div className="input-group mb-3 ">
              <input
                type={"text"}
                className="form-control"
                placeholder="Saisissez en MAJUSCULE votre Client "
                aria-label="Client"
                aria-describedby="basic-addon1"
                name="typeClient"
                value={typeClient}
                onChange={(event) => onInputChange(event)}
              />
            </div>
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
                placeholder="Saisissez votre adresse"
                aria-label="Adresse"
                aria-describedby="basic-addon1"
                name="address"
                value={address}
                onChange={(event) => onInputChange(event)}
              />
            </div>
            <div className="input-group mb-3 ">
              <input
                type={"text"}
                className="form-control"
                placeholder="Saisissez votre ville"
                aria-label="Ville"
                aria-describedby="basic-addon1"
                name="ville"
                value={ville}
                onChange={(event) => onInputChange(event)}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Enregistrer
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/tabprofessors">
              Annuler
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
