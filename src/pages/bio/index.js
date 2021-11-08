import React from "react";
import "./style.css";
import pic from "../../images/me.jpg";

export default function Bio() {
  return (
    <div id="about-contain">
      <div className="card-panel">
        <h4>
          <p style={{ textAlign: "center" }} className="white-text">
            Ben Hopkins
          </p>
        </h4>
        <div className="ratio">
          <img className="me" src={'/' + pic} />
        </div>

        <p id="center-text">
          <p>
            A Full Stack Web Developer and J. R. R. Tolkien fan with a background in Firefighting and
            Communications. Experience working in team environments, teachable,
            hardworking, and enjoys learning new things. Started working towards
            a BA in Criminal Justice at age 16, graduating at age 21 having
            achieved the Arnold Fletcher Award. Recently, graduated from
            University of Washington’s Full-Stack Web Development Bootcamp in
            March 2021 and am currently working as a Learning Assistant for
            multiple coding bootcamps. Curently, I can work with:
          </p>
          <br></br>
          <li>Javascript</li>
          <li>JQuery</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>MySql via sequelize</li>
          <li>mongoDB via mongoose</li>
          <li>Redux via Redux Toolkit</li>
          <li>GraphQL via Apollo</li>
          <br></br>
          Also Dabbling in Python and Django
        </p>
      </div>
    </div>
  );
}
