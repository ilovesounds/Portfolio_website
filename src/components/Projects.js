import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard"; // This is the component we'll modify
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Transformer from Scratch",
      description: "Built a transformer architecture from ground up...", // Short description for the default card view
      fullDescription: "Built a transformer architecture from ground up using PyTorch, focusing on the MLP and Backpropagation components. Implemented and recreated Attention is all you need paper.", // Full description for the detailed view
      tags: ["PyTorch", "Python", "Transformers"],
      viewCodeUrl: "https://github.com/your-repo/transformer", // <--- Add your link
      visualExplanationUrl: "https://your-blog.com/transformer-visuals", // <--- Add your link
      imgUrl: projImg1, // Keep your existing image for the hover effect
    },
    {
      title: "Stock Market Predictor",
      description: "Implemented an LSTM model for time-series forecasting.",
      fullDescription: "Developed a robust time-series forecasting model using an LSTM architecture in Keras/TensorFlow to predict stock market movements with an average of 75% accuracy.",
      tags: ["TensorFlow", "Keras", "Data Science"],
      viewCodeUrl: "https://github.com/your-repo/stock-predictor",
      visualExplanationUrl: "https://your-blog.com/stock-predictor-visuals",
      imgUrl: projImg2,
    },
    {
      title: "E-commerce Backend",
      description: "Built a scalable REST API using Node.js.",
      fullDescription: "Designed and implemented a scalable e-commerce backend using Node.js, Express, and MongoDB, featuring user auth and product management.",
      tags: ["Node.js", "Express", "MongoDB"],
      viewCodeUrl: "https://github.com/your-repo/ecommerce-backend",
      visualExplanationUrl: "https://your-blog.com/ecommerce-visuals",
      imgUrl: projImg3,
    },
    // ... add more projects with the new structure
  ];

  // --- REST OF THE Projects COMPONENT REMAINS THE SAME ---
  return (
    <section className="project" id="projects">
      {/* ... (Container, Row, Col, TrackVisibility, Tab.Container, Nav remain unchanged) ... */}
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item><Nav.Link eventKey="first">AI/ML</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="second">Web Dev</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="third">Data/Other</Nav.Link></Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          // Only map projects that fit this tab logic (you'd filter here in a real app)
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Content for Web Dev projects...</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Content for Data/Other projects...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background decoration"></img>
    </section>
  )
}
