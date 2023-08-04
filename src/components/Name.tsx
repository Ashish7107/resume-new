import React from "react";
import "../styles/Name.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Name = () => {
  return (
    <>
      <div className="container Name">
        <div className="row">
          <h4 className="col-11">Ashish Kumar Yadav</h4>
          <a
            className="col-1"
            href="https://www.linkedin.com/in/ashish--kumar--yadav"
            target={"blank"}
          >
            <i className="fab fa-linkedin "></i>
          </a>

          <p>Electronics and Telecommunication Engineer(2019-2023)</p>
        </div>
      </div>
    </>
  );
};

export default Name;
