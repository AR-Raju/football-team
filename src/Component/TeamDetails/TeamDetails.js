import React, { useEffect, useState } from "react";
import "./TeamDetails.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Header from "../Header/Header";
import maleImg from "../../Photo/male.png";
import femaleImg from "../../Photo/female.png";
import fblogo from "../../Icon/Facebook.png";
import twlogo from "../../Icon/Twitter.png";
import ytlogo from "../../Icon/YouTube.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlagCheckered,
  faMapMarker,
  faFutbol,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";

const TeamDetails = () => {
  const { id } = useParams();
  const [selected, setSelected] = useState({});
  const {
    strTeam,
    strGender,
    intFormedYear,
    strCountry,
    strSport,
    strTwitter,
    strYoutube,
  } = selected;
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSelected(data.teams[0]));
  }, [id]);
  let isGender = strGender;
  return (
    <div className="team-style">
      <Header teamBadge={selected} value="true"></Header>
      <div>
        <Container>
          <Card className="card-style">
            <Row>
              <Col lg={6}>
                <Card.Body className="text-white">
                  <h1>{strTeam}</h1>
                  <h4>
                    <FontAwesomeIcon icon={faMapMarker} /> Founded:{" "}
                    {intFormedYear}
                  </h4>
                  <h4>
                    <FontAwesomeIcon icon={faFlagCheckered} /> Country:{" "}
                    {strCountry}
                  </h4>
                  <h4>
                    <FontAwesomeIcon icon={faFutbol} /> Sport type: {strSport}
                  </h4>
                  <h4>
                    <FontAwesomeIcon icon={faVenusMars} /> Gender: {strGender}
                  </h4>
                </Card.Body>
              </Col>
              <Col lg={6}>
                <Card.Img
                  variant="top"
                  src={isGender === "Male" ? maleImg : femaleImg}
                />
              </Col>
            </Row>
          </Card>
          <p className="text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            minus perspiciatis error ducimus minima dignissimos. Maxime laborum
            cumque modi exercitationem temporibus, soluta nesciunt voluptate
            libero, sapiente minima itaque voluptatem obcaecati. Numquam
            officiis doloribus, perferendis necessitatibus dolor quisquam
            sapiente laborum eius placeat minima ex est incidunt aut
            perspiciatis ullam voluptatibus consequuntur maiores suscipit rem,
            corrupti expedita! Repellat earum cumque nostrum at aliquid? Ex vero
            quis ullam. Fugit placeat reiciendis numquam tenetur laudantium
            impedit, optio nisi eligendi eum exercitationem, sit officiis
            consequuntur minus voluptas, adipisci dolorum voluptatem fuga
            distinctio aut sapiente quia labore possimus modi enim? Aspernatur
            beatae cum numquam maxime id?
          </p>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus tenetur harum eveniet rem, aliquam illo enim,
            temporibus est sed libero quae vitae voluptatem hic nemo veritatis?
            Distinctio, ipsam dolor facere natus blanditiis, incidunt corrupti
            ex vero accusamus esse excepturi, eius dicta perspiciatis. Quibusdam
            et repellendus, totam placeat eius voluptatem natus necessitatibus
            nulla cum in beatae velit dolores blanditiis nisi alias eaque!
            Libero rerum sapiente, dolores expedita tenetur accusamus officia
            doloremque.
          </p>
          <footer>
            <div className="text-center">
              <a
                href={`Https://${strTwitter}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={twlogo} alt="" />
              </a>
              <a
                href={`Https://facebook.com/${strTeam}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={fblogo} alt="" />
              </a>
              <a href={`Http://${strYoutube}`} target="_blank" rel="noreferrer">
                <img src={ytlogo} alt="" />
              </a>
            </div>
          </footer>
        </Container>
      </div>
    </div>
  );
};

export default TeamDetails;
