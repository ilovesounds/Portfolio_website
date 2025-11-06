import { Col } from "react-bootstrap";
import "./ProjectCard.css"; 

export const ProjectCard = ({ title, fullDescription, tags, viewCodeUrl, visualExplanationUrl }) => {
  return (
    <Col size={12} sm={6} md={4}> 
      <div className="project-card-detailed"> 
          
          <h3 className="project-card-title">{title}</h3>
          
          {/* Using the fixed left-alignment setup */}
          <p className="project-card-description">{fullDescription}</p>

          <div className="project-card-tags">
              {tags && tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
              ))}
          </div>

          <div className="project-card-buttons">
              {/* Only keep the View Code button */}
              <a href={viewCodeUrl} target="_blank" rel="noopener noreferrer" className="project-card-button view-code-btn full-width-button">
                  View Code <span className="arrow">→</span>
              </a>
              {/* REMOVED: Visual Explanation button */}
          </div>
      </div>
    </Col>
  );
};
