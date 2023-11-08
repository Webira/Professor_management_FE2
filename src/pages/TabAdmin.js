//import React from "react";
import React, { useEffect, createContext, useState } from "react";
import axios from "axios";
import { Link,  useParams} from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/delete/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table table-striped border shadow">
          <thead>
            <tr>
              <th scope="col">N</th>
              <th scope="col">ID</th>
              <th scope="col">Email</th>
              <th scope="col">Name</th>
              <th scope="col">TypeRole</th>
              <th scope="col">Password</th>
              <th scope="col">Surname</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user.typeRole}</td>
                <td>{user.password}</td>
                <td>{user.username}</td>
                <td>
                  
                    <Link
                      className="btn btn-outline-secondary mx-2"
                      to={`/viewuser/${user.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-primary mx-2"
                      to={`/updateuser/${user.id}`}
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-outline-danger mx-2"
                      onClick={() => deleteUser(user.id)}
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
