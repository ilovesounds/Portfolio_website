import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = {
    ai_ml: [
      {
        title: "Transformer from Scratch",
        description: "Built a transformer architecture from ground up...",
        fullDescription:
          "Built a transformer architecture from ground up using PyTorch, focusing on the MLP and Backpropagation components. Implemented and recreated the 'Attention Is All You Need' paper.",
        tags: ["PyTorch", "Python", "Transformers"],
        viewCodeUrl: "https://github.com/your-repo/transformer",
        visualExplanationUrl: "https://your-blog.com/transformer-visuals",
        imgUrl: projImg1,
      },
      {
        title: "Lannisters AI Interviewer",
        description: "AI-based interviewer tool developed at Innov8 Hackathon.",
        fullDescription:
          "Created 'Lannisters AI Interviewer' during Innov8 Hackathon — a tool that uses NLP & ML to simulate technical interview conversations, provide feedback and score candidates.",
        tags: ["NLP", "Machine Learning", "Interview AI"],
        viewCodeUrl: "https://github.com/ilovesounds/Lannisters_AI_Interviewer_Innov8_3",
        visualExplanationUrl: "https://github.com/ilovesounds/Lannisters_AI_Interviewer_Innov8_3",
        imgUrl: projImg2, // You may replace with a screenshot specific to this project
      },
      {
        title: "CSOT Gen AI – Streamlit Q&A Bot",
        description: "Streamlit app that answers questions about a CAD-compendium PDF.",
        fullDescription:
          "Built a Streamlit application that ingests a CADcompendium PDF and uses natural language processing to let users ask questions about the document. Features semantic search over the text, PDF parsing, and a clean UI for instant answers.",
        tags: ["Streamlit", "Python", "NLP", "PDF-QA"],
        viewCodeUrl: "https://github.com/ilovesounds/CSOT_gen_ai",
        visualExplanationUrl: "https://github.com/ilovesounds/CSOT_gen_ai", // you can change if you have a demo/live link
        imgUrl: projImg1, // <-- Replace this image with a relevant screenshot if you have one
      },

      {
        title: "Stock Market Predictor",
        description: "Implemented an LSTM model for time-series forecasting.",
        fullDescription:
          "Developed a robust time-series forecasting model using an LSTM architecture in Keras/TensorFlow to predict stock market movements with an average of 75% accuracy.",
        tags: ["TensorFlow", "Keras", "Data Science"],
        viewCodeUrl: "https://github.com/your-repo/stock-predictor",
        visualExplanationUrl: "https://your-blog.com/stock-predictor-visuals",
        imgUrl: projImg2,
      },
    ],

    web_dev: [
      {
        title: "Portfolio Website",
        description: "Personal React-based portfolio showcasing projects and skills.",
        fullDescription:
          "Designed and built a modern responsive portfolio website using React, Bootstrap, and Animate.css. It includes interactive sections like About, Skills, Projects, and Contact, along with dynamic animations.",
        tags: ["React", "Bootstrap", "JavaScript", "CSS"],
        viewCodeUrl: "https://github.com/ilovesounds/Portfolio_website",
        visualExplanationUrl: "https://github.com/ilovesounds/Portfolio_website",
        imgUrl: projImg3, // Replace with a screenshot of your website if you have one!
      },
      {
        title: "E-commerce Backend",
        description: "Built a scalable REST API using Node.js.",
        fullDescription:
          "Designed and implemented a scalable e-commerce backend using Node.js, Express, and MongoDB, featuring user authentication, product management, and order tracking.",
        tags: ["Node.js", "Express", "MongoDB"],
        viewCodeUrl: "https://github.com/your-repo/ecommerce-backend",
        visualExplanationUrl: "https://your-blog.com/ecommerce-visuals",
        imgUrl: projImg2,
      },
    ],

    data_other: [
      {
        title: "Data Pipeline Automation",
        description: "Automated ETL pipeline with Airflow.",
        fullDescription:
          "Created an automated ETL pipeline using Apache Airflow for scheduling and monitoring data workflows, optimizing processing speed by 40%.",
        tags: ["Airflow", "Python", "ETL"],
        viewCodeUrl: "https://github.com/your-repo/data-pipeline",
        visualExplanationUrl: "https://your-blog.com/data-pipeline",
        imgUrl: projImg1,
      },
      {
        title: "Dots and Boxes AI",
        description: "An AI bot trained to master the Dots and Boxes game using MCTS.",
        fullDescription:
          "Developed an AI bot that plays and learns the classic Dots and Boxes game using the Monte Carlo Tree Search (MCTS) algorithm. Implemented efficient game-state evaluation, random playouts, and decision optimization to achieve near-perfect play. Designed and tested multiple exploration-exploitation strategies for move selection.",
        tags: ["Python", "AI", "MCTS", "Game Theory"],
        viewCodeUrl: "https://github.com/ilovesounds/Dots_and_boxes_game",
        visualExplanationUrl: "https://github.com/ilovesounds/Dots_and_boxes_game", // replace if you have demo/docs
        imgUrl: projImg3, // Replace this image with a game screenshot if available
      },
      {
        title: "Vehicle Tracking and Speed Estimation",
        description: "Computer vision project for real-time vehicle tracking and speed analysis.",
        fullDescription:
          "Developed a computer vision system that tracks moving vehicles in real-time from video footage and estimates their speed using object detection and frame-based distance calculations. Implemented YOLO for detection and OpenCV for motion tracking and speed computation.",
        tags: ["Computer Vision", "YOLO", "OpenCV", "Python"],
        viewCodeUrl: "https://github.com/ilovesounds/vehicle-tracking-and-speed-estimation",
        visualExplanationUrl: "https://github.com/ilovesounds/vehicle-tracking-and-speed-estimation",
        imgUrl: projImg2, // you can replace this with a sample frame/screenshot later
     }
  

    ],
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                >
                  <h2>Projects</h2>
                  <p>
                    Explore my projects across various domains — AI/ML, Web
                    Development, and Data Engineering.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">AI/ML</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Web Dev</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Data/Other</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible
                          ? "animate__animated animate__slideInUp"
                          : ""
                      }
                    >
                      {/* --- AI/ML PROJECTS --- */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.ai_ml.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* --- WEB DEV PROJECTS --- */}
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.web_dev.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* --- DATA/OTHER PROJECTS --- */}
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects.data_other.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background decoration"
      />
    </section>
  );
};
