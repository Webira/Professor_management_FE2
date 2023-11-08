import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function ViewProfessor() {
  const [professor, setProfessor] = useState({
    firstname: "",
    surname: "",
    typeSubject: "",
    email: "",
    address:"",
    ville: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadProfessor();
  }, []);

  const loadProfessor = async () => {
    const result = await axios.get(`http://localhost:8080/professor/${id}`);
    setProfessor(result.data);
  };
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center m-4">Détails sur le Professor</h2>
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <div class="card">
            <div class="card-body">
              <p class="card-text">
                <b>ID du professeur :</b> {professor.id}
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <b>Prénom : </b> {professor.firstname}
              </li>
              <li class="list-group-item">
                <b>Nom de famille : </b> {professor.surname}
              </li>
              <li class="list-group-item">
                <b>Subject : </b> {professor.typeSubject}
              </li>
              <li class="list-group-item">
                <b>Client : </b> {professor.typeClient}
              </li>
              <li class="list-group-item">
                <b>Email adresse : </b> {professor.email}
              </li>
              <li class="list-group-item">
                <b>Adresse : </b> {professor.address}
              </li>
              <li class="list-group-item">
                <b>Ville : </b> {professor.ville}
              </li>
            </ul>
            <div class="card-body">
              <Link
                className="btn btn-outline-primary my-2"
                to={"/tabprofessors"}
              >
                TabProfessors
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
