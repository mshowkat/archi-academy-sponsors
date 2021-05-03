import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import Social from "../Social/Social";
import Sponsors from "../Sponsors/Sponsors";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="custom-container">
        <div className="go-back-row">
          <p>
            <a href="#go" className="go-back-button">
              <FontAwesomeIcon icon={faArrowLeft} /> Back
            </a>
          </p>
        </div>
        <div className="button-group-row">
        <ButtonGroup className='people-button-group' size="lg" aria-label="Basic example">
            <Button className='people-button'>Our Talents</Button>
            <Button className="people-button-active">The Sponsors</Button>
          </ButtonGroup>
        </div>
        <Sponsors />
      </div>
      <Social />
      <Footer />
    </div>
  );
};

export default Home;
