import React from "react";
import axios from "axios";
import { Link,  useParams} from "react-router-dom";

export default class Welcome{

    render() {
      return (
          <div className="row justify-content-md-center">
              <div className="jumbotron jumbotron-fluid">
                <div className="container">
                  <h1 className="display-4">Welcome</h1>
                  <p className="lead">Login to see protected content.</p>
                </div>
              </div>
          </div>
      );
    };
  }