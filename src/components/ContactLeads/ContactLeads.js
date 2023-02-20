import React from "react";
import EventCard from "../EventCard/EventCard";
import { leads } from "./ContactLeadsList";
import classes from "./ContactLeads.module.css";

const ContactLeads = () => {
  return (
    <div className={classes.cultural}>
      {leads.map((lead) => (
        <EventCard
          key={lead.id}
          imgSrc={lead.imgSrc}
          heading={lead.heading}
          redirectLink={lead.redirectLink}
          faculty={lead.faculty}
          students={lead.students}
        />
      ))}
    </div>
  );
};

export default ContactLeads;
