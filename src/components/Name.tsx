import React from "react";
import "../styles/Name.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Name = () => {
  return (
    <>
      <div className="container Name">
        <div className="row">
          <div className="     col-12  ">
            <h2>
              <b>Ashish Kumar Yadav</b>
              <a
                className=" linkedin"
                href="https://www.linkedin.com/in/ashish--kumar--yadav"
                target={"blank"}
                style={{ paddingLeft: "10px" }}
              >
                <i className="fab fa-linkedin "></i>
              </a>
            </h2>
          </div>

          <p>Electronics and Telecommunication Engineer(2019-2023)</p>
        </div>
      </div>
    </>
  );
};

export default Name;
