import React from "react";
import './SponsorCard.css'
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SponsorCard = ({sponsor}) => {
  const {company, description, designation, name, reachOut, readmore, userId, userImg} = sponsor
console.log(sponsor)
  return (
    <div key={userId}>
      <Card className='sponsor-card' style={{  }}>
        <Card.Img className='sponsor-card-image' variant="top" src={userImg? userImg :"/Sponsors/blank.png"} />
        <Card.Body>
          <Card.Title> <h2 className='sponsor-card-title'>{name}</h2> </Card.Title>
          <Card.Title> <p>{designation}, {company} </p> </Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button href={reachOut} className='sponsor-card-button' variant="primary">Reach out to me <FontAwesomeIcon icon={faArrowRight} /> </Button>
        </Card.Body>
        <Card.Footer>
            <p className='sponsor-card-footer'><a href={readmore} className='sponsor-card-footer-anchor'>Read more about me <FontAwesomeIcon icon={faArrowRight} /></a> </p>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default SponsorCard;
