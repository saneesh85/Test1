import { Fragment } from "react";
import classes from '../meetups/MeetupDetails.module.css';

function MeetUpDetail(props) {
    return (
      <section className={classes.detail}>
        <img
          src={props.image}
          alt={props.title}
        />
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </section>
    );
  }

export default MeetUpDetail;