import { useState } from "react";
import classes from "./Faq.module.css";

const questions = [
  {
    question: "How can i participate in TechnoVision 2023?",
    answer:
      "All can participate by registering through our portal, and registration closes 1 day prior to the event dates (28 & 29 FEB 2023) of TechnoVision 2023",
  },
  {
    question: "What are the dates of TechnoVision 2023?",
    answer: "Feb 28, 29 2023. Events will happen from 9:00 am to 10:00 pm",
  },
//   {
//     question: "What is the entry fees for TechnoVision 2023?",
//     answer:
//       "The entry for Technovision 2023 is 300(day 2), 400(day 3), 600(day 2&3)",
//   },
  {
    question: "Is it possible for one participant to attend any events?",
    answer:
      "No, participants can only attend registered events due to the scheduling of time.",
  },
];

const Faq = () => {
  const [clicked, setClicked] = useState(null);

  const toggle = (i) => {
    if (clicked === i) {
      return setClicked(null);
    }

    setClicked(i);
  };

  return (
    <section className={classes.faqSection}>
      <div className={classes.heading}>FAQ</div>
      <div className={classes.faq}>
        {questions.map((ques, i) => {
          return (
            <div className={classes.single} onClick={() => toggle(i)}>
              <div className={classes.question}>{ques.question}</div>
              <div
                className={`${
                  clicked === i ? classes.answer : classes.noAnswer
                }`}
              >
                {ques.answer}
              </div>
              <span className={classes.btn}>+</span>
            </div>
          );
        })}

        {/* <div className={classes.single}>
                <div className={classes.question}>How are you?</div>
                <div className={classes.answer}>I am fine</div>
                <span className={classes.btn}>+</span>
            </div> */}
      </div>
    </section>
  );
};

export default Faq;
