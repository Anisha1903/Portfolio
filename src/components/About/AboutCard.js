import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anisha M </span>
            from <span className="purple"> Davangere, India.</span>
            <br />
            I completed Bachelor of Engineering in Computer Science from Jain Institute of Technology, Davangere.
            <br />
            Additionally, I recently completed FULL Stack Development | MERN Stack Development course at Talent Battle.  
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Endeavor to create things that have a positive impact!"{" "}
          </p>
          <footer className="blockquote-footer">Anisha M</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
