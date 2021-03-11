import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Teams = (props) => {
  const { strTeam, strTeamBadge, idTeam } = props.teams;
  return (
    <div className="text-center">
      <Card style={{ width: "19rem", marginBottom: "20px", marginTop: "10px" }}>
        <Card.Img variant="top" src={strTeamBadge} />
        <Card.Body>
          <Card.Title>{strTeam}</Card.Title>
          <p>Sports type: Football</p>
          <Link to={`/team/${idTeam}`}>
            <Button className="primary">
              Explore&nbsp;
              <FontAwesomeIcon icon={faArrowRight} />{" "}
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Teams;
