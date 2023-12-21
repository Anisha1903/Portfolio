import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weatherapp.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import todo from "../../Assets/Projects/To-do.png";
import foodapp from "../../Assets/Projects/foodappp.png";
import digitalclock from "../../Assets/Projects/github.png";
import shopy from "../../Assets/Projects/shopy.png";

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
              imgPath={foodapp}
              isBlog={false}
              title="FoodApp"
              description="A FoodApp built with the MERN stack (MongoDB, Express.js, React, Node.js) provides a modern and efficient solution for creating, managing, and ordering food, integrating a responsive user interface with a scalable backend for a seamless dining experience.."
              ghLink="https://github.com/shanmukha7k/FoodAPP"
              demoLink="https://foodapp-n46y.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopy}
              isBlog={false}
              title="letshopy"
              description="An E-Commerce platform developed with the MERN stack (MongoDB, Express.js, React, Node.js) combines a powerful database, scalable server, and dynamic client interfaces to create a feature-rich, responsive application for seamless online shopping experiences, from product browsing to secure transactions."
              ghLink="https://github.com/shanmukha7k/Ecommerce"
              demoLink="https://letshopy.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-Do-App"
              description="A TODO app built with the MEAN stack refers to an application developed using a specific set of technologies: MongoDB, Express.js, Angular, and Node.js. Each component of the MEAN stack plays a crucial role in the development of the application. Here's a brief description of each part"
              ghLink="https://github.com/shanmukha7k/To-Do-App"
              demoLink="https://to-do-app-ivory-seven.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="A responsive Weather web app which automatically loads weather stats based on your location using real-time API, Using HTML,CSS,JAVASCRIPT,Weather API"
              ghLink="https://github.com/shanmukha7k/Weather-APP"
              demoLink="https://weathersearch1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digitalclock}
              isBlog={false}
              title="Github Search"
              description="The GitHub Search project is a simple web application that allows users to search for GitHub repositories using the GitHub API. This project is built using HTML for the structure, CSS for styling, and jQuery for handling asynchronous requests and DOM manipulation."
              ghLink="https://github.com/shanmukha7k/GitHub-Search"
              demoLink="https://1githubsearch.netlify.app/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal-Portfolio"
              description="The Personal Portfolio using React.js is a dynamic web application that serves as an online resume and showcase for an individual's skills, projects, and achievements. This project utilizes React.js to create a modern, interactive, and responsive portfolio that can be easily customized."
              ghLink="https://github.com/shanmukha7k/portfolio"
              demoLink="https://shanmukhaportfolio.netlify.app/"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
