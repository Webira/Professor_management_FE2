import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function ViewUser() {

  const [user, setUser]=useState({
    email:"", name:"", nickname:"", password:"", surname:""
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center m-4">Détails sur l'utilisateur</h2>
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <div class="card" >
              <div class="card-body">
              <p class="card-text"><b>ID de l'utilisateur :</b> {user.id}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><b>Nom : </b> {user.name}</li>
              <li class="list-group-item"><b>Email addresse : </b> {user.email}</li>
              <li class="list-group-item"><b>TypeRole : </b> {user.typeRole}</li>
              <li class="list-group-item"><b>Nom de famille : </b> {user.surname}</li>
              <li class="list-group-item"><b>Password : </b> {user.password}</li>
            </ul>
            <div class="card-body">
            <Link className="btn btn-outline-primary my-2" to={"/home"}>
            TabAdmin
            </Link>
              
            </div>
        </div>

        </div>
    </div>
    </div>
  )
}
