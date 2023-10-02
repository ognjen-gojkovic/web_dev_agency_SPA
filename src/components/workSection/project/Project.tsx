import { ProjectStyled } from "./Project.styled";
export interface Props {
  project: {
    title: string;
    technologies: { name: string; img: string }[];
    link: string;
    desc: string;
  };
  idx: boolean;
}

const Project: React.FC<Props> = ({ project, idx }) => {
  return (
    <ProjectStyled project={project} idx={idx}>
      <>
        <h3>{project.title}</h3>
        <div className="wrapper">
          <div className="tech">
            {project.technologies.map((tech) => {
              return (
                <span>
                  <img src={tech.img} alt={tech.name} />
                  <h4>{tech.name}</h4>
                </span>
              );
            })}
          </div>
          <div className="desc">
            <p>{project.desc}</p>
            <a href={project.link} target="_blank">
              {project.title}
            </a>
          </div>
        </div>
      </>
    </ProjectStyled>
  );
};

export default Project;
