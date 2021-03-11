import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Header/Header";
import Teams from "../Teams/Teams";
import "./Home.css";

const Home = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const url =
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);
  return (
    <div className="home-style">
      <Header teamBadge={teams} value="false"></Header>
      <div>
        <Container>
          <Row>
            {teams.map((tm) => (
              <Col mt={2} xs={12} sm={12} md={6} lg={4}>
                <Teams teams={tm}></Teams>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
