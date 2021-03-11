import React from "react";
import { useParams } from "react-router";
import img from "../../Photo/background.png";
import "./Header.css";

const Header = (props) => {
  const { id } = useParams();
  const { strTeamBadge, idTeam } = props.teamBadge;
  console.log(props.value);
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        height: "auto",
      }}
    >
      {id === idTeam && props.value === "true" ? (
        <img className="center" src={strTeamBadge} alt="" />
      ) : (
        <h1 className="center text-white font-weight-bold">
          Private Team Detective
        </h1>
      )}
    </div>
  );
};

export default Header;
