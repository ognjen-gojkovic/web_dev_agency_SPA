import { AboutUsStyled } from "./AboutUsStyled";
import { Fade } from "react-awesome-reveal";
import ItTeam from "./../../assets/images/it_team_3.jpg";
import Ozzy from "./../../assets/images/CEO_Ozzy.jpg";
import Lemmy from "./../../assets/images/lemmy-kilmister.jpg";
import Robert from "./../../assets/images/robert-plant.webp";
import Nikki from "./../../assets/images/nikki-sixx4.jpg";
import Steven from "./../../assets/images/steven-tyler4.jpg";
import AddUser from "./../../assets/images/add-user.jpg";
import Fire from "./../../assets/images/fire-background-1.gif";
import React from "react";

const AboutUs: React.FC = () => {
  const team = [
    {
      name: "Ozzy Osbourne",
      img: Ozzy,
      title: "CEO",
    },
    {
      name: "Lemmy Kilmister",
      img: Lemmy,
      title: "Project Lead",
    },
    {
      name: "Robert Plant",
      img: Robert,
      title: "Lead Front-End",
    },
    {
      name: "Nikki Sixx",
      img: Nikki,
      title: "Lead Back-End",
    },
    {
      name: "Steven Tyler",
      img: Steven,
      title: "UI/UX Designer",
    },
    {
      name: "Rock With Us!!1",
      img: AddUser,
      title: "#contact",
    },
  ];

  const [clickFire, setClickFire] = React.useState(false);
  const [fireIdx, setFireIdx] = React.useState<number | null>(null);

  return (
    <AboutUsStyled id="about-us">
      <div className="float">
        <h1>Who We Are?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quod
          molestiae, aspernatur amet quidem omnis alias necessitatibus commodi
          nostrum adipisci perspiciatis perferendis iure nihil, ab non!
          Doloremque enim facere, fugiat a laboriosam dolor maxime nisi porro
          nemo quidem doloribus nostrum repellendus atque assumenda unde? Quidem
          accusamus ducimus libero aliquam quos?
        </p>
      </div>

      <Fade direction="right" triggerOnce>
        <div className="team">
          <div className="team-decoration-border"></div>
          <img src={ItTeam} alt="team" />

          <div className="wrapper-tags">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              incidunt atque impedit iure possimus suscipit harum reprehenderit
              quod laboriosam. Blanditiis est nesciunt eius mollitia deleniti
              beatae, cumque voluptatibus totam at sequi quia earum voluptates
              reiciendis. Dicta officia doloremque ratione praesentium deleniti
              sequi, nostrum illo cumque sapiente unde laborum iste commodi
              natus, maiores hic, nobis veritatis sunt facere? Reiciendis, quia
              deserunt quae, alias voluptatibus blanditiis molestias ut error
              numquam impedit modi.
            </p>
            <div className="tags">
              <div className="tag"># web and mobile development</div>
              <div className="tag"># desktop and IoT development</div>
              <div className="tag"># IT consulting</div>
              <div className="tag"># System Integration</div>
              <div className="tag"># web3 development</div>
            </div>
          </div>
        </div>
      </Fade>

      <div className="team-members">
        <Fade direction="left" triggerOnce>
          <h2>Our Squad</h2>
          <div className="members">
            {team.map((member, idx) => {
              return (
                <figure>
                  <img
                    src={Fire}
                    alt="fire"
                    className={`fire ${
                      clickFire && fireIdx === idx ? "burn" : ""
                    }`}
                    onClick={(e) => {
                      setClickFire(true);
                      setFireIdx(idx);
                    }}
                  />
                  <img src={member.img} alt={member.name} />
                  <a
                    href={`${
                      team.length - 1 === idx
                        ? "#contact"
                        : `${`https://en.wikipedia.org/wiki/${member.name.replace(
                            " ",
                            "_"
                          )}`}`
                    }`}
                    target={`${team.length - 1 === idx ? "" : "_blank"}`}
                    rel={`${team.length - 1 === idx ? "" : "noreferrer"}`}
                  >
                    <div className="figure-scroll">
                      <figcaption>{member.title}</figcaption>
                      <figcaption>
                        {member.name}
                        <span>
                          <i className="gg-chevron-double-right" />
                        </span>
                      </figcaption>
                      <span>
                        <i className="gg-chevron-down"></i>
                      </span>
                    </div>
                  </a>
                </figure>
              );
            })}
          </div>
        </Fade>
      </div>
    </AboutUsStyled>
  );
};

export default AboutUs;
