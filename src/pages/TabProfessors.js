import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import 'react-phone-number-input/style.css'



export default function TabProfessors() {
  const [professors, setProfessors] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadProfessors();
  }, []);

  const loadProfessors = async () => {
    const result = await axios.get("http://localhost:8080/professors");
    setProfessors(result.data);
  };

  const deleteProfessor = async (id) => {
    await axios.delete(`http://localhost:8080/prof/delete/${id}`);
    loadProfessors();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table table-striped border shadow">
          <thead>
            <tr>
              <th scope="col">N</th>
              <th scope="col">ID</th>
              <th scope="col">Prénom</th>
              <th scope="col">Nom de famille</th>
              <th scope="col">Subject</th>
              <th scope="col">Client</th>
              <th scope="col">Email</th>
              <th scope="col">Adresse</th>
              <th scope="col">Ville</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {professors.map((professor, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{professor.id}</td>
                <td>{professor.firstname}</td>
                <td>{professor.surname}</td>
                <td>{professor.typeSubject}</td>
                <td>{professor.typeClient}</td>
                <td>{professor.email}</td>
                <td>{professor.address}</td>
                <td>{professor.ville}</td>
                <td>
                  <Link
                    className="btn btn-outline-secondary mx-2"
                    to={`/viewprofessor/${professor.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/updateprofessor/${professor.id}`}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-outline-danger mx-2"
                    onClick={() => deleteProfessor(professor.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
