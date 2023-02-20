import classes from "./Talk.module.css";
import TalkLists from "../TalkDetail/TalkLists";
import EventCard from "../../components/EventCard/EventCard";
import { useEffect } from "react";

const Talk = () => {
  useEffect(() => {
    console.log(TalkLists.length);
  }, []);
  return (
    <div className={classes.games}>
      {TalkLists.map((list) => {
        return (
          <EventCard
            key={list.id}
            imgSrc={list.imgSrc}
            heading={list.heading}
            redirectLink={list.redirectLink}
          />
        );
      })}
    </div>
  );
};

export default Talk;
