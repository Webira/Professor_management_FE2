import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function UpdateProfessor() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [professor, setProfessor] = useState({
    firstname: "",
    surname: "",
    typeSubject: "",
    typeClient: "",
    email: "",
    address:"",
    ville: "",
  });

  const { firstname, surname, typeSubject, typeClient, email, address, ville } = professor;

  const onInputChange = (event) => {
    setProfessor({ ...professor, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    loadProfessor();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.put(`http://localhost:8080/prof/update/${id}`, professor);
    navigate("/tabprofessors");
  };
  const loadProfessor = async () => {
    const result = await axios.get(`http://localhost:8080/professor/${id}`);
    setProfessor(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center m-4">Mettre à jour un Professor</h2>
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <form onSubmit={(event) => onSubmit(event)}>
            <div className="input-group mb-3 ">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type={"text"}
                className="form-control"
                placeholder="Saisissez votre Firstname"
                aria-label="Prénom"
                aria-describedby="basic-addon1"
                name="firstname"
                value={firstname}
                onChange={(event) => onInputChange(event)}
              />
            </div>
            <div className="input-group mb-3 ">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type={"text"}
                className="form-control"
                placeholder="Saisissez votre Nom de famille"
                aria-label="Nom de famille"
                aria-describedby="basic-addon1"
                name="surname"
                value={surname}
                onChange={(event) => onInputChange(event)}
              />
            </div>
            <div className="input-group mb-3 ">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type={"text"}
                className="form-control"
                placeholder="Saisissez en MAJUSCULE votre Subject"
                aria-label="Subject"
                aria-describedby="basic-addon1"
                name="typeSubject"
                value={typeSubject}
                onChange={(event) => onInputChange(event)}
              />
            </div>
            <div className="input-group mb-3 ">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type={"text"}
                className="form-control"
                placeholder="Saisissez en MAJUSCULE nom de votre Client"
                aria-label="Client"
                aria-describedby="basic-addon1"
                name="typeClient"
                value={typeClient}
                onChange={(event) => onInputChange(event)}
              />
            </div>
            <div className="input-group mb-3 ">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
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
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type={"text"}
                className="form-control"
                placeholder="Saisissez votre adresse"
                aria-label="Address"
                aria-describedby="basic-addon1"
                name="address"
                value={address}
                onChange={(event) => onInputChange(event)}
              />
            </div>
            <div className="input-group mb-3 ">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
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
