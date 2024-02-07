import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import foodapplication from "../../Assets/Projects/foodapp.png";
import chatapp from "../../Assets/Projects/chatapp.png";
import weatherapp from "../../Assets/Projects/weatherapp.png";
import simplecrudapplication from "../../Assets/Projects/SimpleCrudApplication.png";
import authenticationsystem from "../../Assets/Projects/authenticationSystem.png";
import notepadapplication from "../../Assets/Projects/NotepadApplication.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodapplication}
              isBlog={false}
              title="Food Application"
              description="A FoodApp built with MERN stack (MongoDB, Express.js, React, Node.js) provides a modern and efficient solution for creating, managing, and ordering food, integrating a responsive user interface with a scalable backend for a seamless dining experience.."
              ghLink="https://github.com/Anisha1903/Food-Application"
              demoLink="https://food-application-v0vy.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatapp}
              isBlog={false}
              title="Chat App"
              description="A React.js chat app provides a sleek UI and efficient real-time communication. Seamlessly integrating a responsive frontend and robust backend ensures a modern, engaging chat experience with enhanced performance and scalability."
              ghLink="https://github.com/Anisha1903/Chat-app"
              demoLink="https://chat-app-mfh5.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="Weather App"
              description="Angular.js weather app offers dynamic UI & comprehensive weather info, scaling seamlessly for real-time updates. Integrated frontend & reliable backend ensure accurate forecasts & intuitive navigation, providing immersive experiences."
              ghLink="https://github.com/Anisha1903/Weather-App"
              demoLink="https://659ae24bb11170b34e48d20c--effortless-strudel-27f092.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simplecrudapplication}
              isBlog={false}
              title="Simple CRUD Application"
              description="A Simple CRUD Application built with Node.js, Express.js, and MongoDB enables effortless data management. Seamlessly perform Create, Read, Update, and Delete operations with ease. The interface is user-friendly, making it easy to organize and manage data smoothly."
              ghLink="https://github.com/Anisha1903/Simple-CRUD-Application"
              demoLink="https://drive.google.com/file/d/1zoX3N8ACPxCMkRVpbISZNQ91unnG47Wl/view?usp=drive_link"        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={authenticationsystem}
              isBlog={false}
              title="Authentication System"
              description="An Authentication System in Node.js offers login, logout, register, password recovery, email verification, and access control. Built with Express, Passport, JWT, Mongoose, and more, it's ideal for starting Node.js projects with comprehensive user management capabilities."
              ghLink="https://github.com/Anisha1903/Authentication-System"
              demoLink="http://serene-headland-22338.herokuapp.com/"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notepadapplication}
              isBlog={false}
              title="Notepad Application"
              description="The AngularJS-powered Notepad App streamlines note management, allowing users to seamlessly create, edit, and delete notes. Its intuitive dashboard and notes list enable easy navigation, ensuring flexibility in managing titles, bodies, and task statuses."
              ghLink="https://github.com/Anisha1903/Notepad-Application"
              demoLink="https://659307ee7632d6ee97eb702d--fluffy-parfait-ead136.netlify.app/"  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
