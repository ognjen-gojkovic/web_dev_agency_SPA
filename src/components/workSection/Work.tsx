import { Fade } from "react-awesome-reveal";
import { WorkStyled } from "./Work.styled";
import Project from "./project/Project";
import projectsData from "./../../assets/projectsData";

const Work: React.FC = () => {
  return (
    <WorkStyled id="work">
      <div className="horizontal-rule"></div>
      <div className="work-float">
        <h1>Our work and projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quod
          molestiae, aspernatur amet quidem omnis alias necessitatibus commodi
          nostrum adipisci perspiciatis perferendis iure nihil, ab non!
          Doloremque enim facere, fugiat a laboriosam dolor maxime nisi porro
          nemo quidem doloribus nostrum repellendus atque assumenda unde? Quidem
          accusamus ducimus libero aliquam quos?
        </p>
      </div>
      <div className="work-projects">
        <h2>Projects</h2>
        {projectsData.map((project, idx) => {
          return (
            <Fade direction={`${idx % 2 === 0 ? "left" : "right"}`} triggerOnce>
              <Project project={project} idx={idx % 2 !== 0 ? true : false} />
            </Fade>
          );
        })}
      </div>
    </WorkStyled>
  );
};

export default Work;
