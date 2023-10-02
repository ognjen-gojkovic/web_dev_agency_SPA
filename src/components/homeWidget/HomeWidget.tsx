import React from "react";
import { HomeWidgetStyled } from "./HomeWidgetStyled";

export interface Props {
  navHidden: boolean;
  modal: boolean;
}

export interface ComponentProps extends Props {
  show: boolean;
}

const HomeWidget: React.FC<Props> = ({ navHidden, modal }) => {
  const [show, setShow] = React.useState(false);

  const handleShow = () => {
    if (window.scrollY > 250) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleShow);

    return () => window.removeEventListener("scroll", handleShow);
  });

  return (
    <HomeWidgetStyled show={show} navHidden={navHidden} modal={modal}>
      <a href="#">
        <i className="gg-chevron-up"></i>
      </a>
    </HomeWidgetStyled>
  );
};

export default HomeWidget;
