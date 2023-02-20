import { Link } from "react-router-dom";
import classes from "./Dropdown.module.css";

const Dropdown = (props) => {
  return (
    <ul className={classes.dropdown}>
      <li className={classes.drops}>
        <Link
          to="/events/civil"
          onClick={props.click}
          className={classes.links}
        >
          Civil
        </Link>
      </li>
      <li className={classes.drops}>
        <Link
          to="/events/cs"
          onClick={props.click}
          className={classes.links}
        >
          Computer Science
        </Link>
      </li>
      <li className={classes.drops}>
        <Link
          to="/events/entc"
          onClick={props.click}
          className={classes.links}
        >
          E&TC
        </Link>
      </li>
      <li className={classes.drops}>
        <Link
          to="/events/mechanical"
          onClick={props.click}
          className={classes.links}
        >
          Mechanical
        </Link>
      </li>
    </ul>
  );
};

export default Dropdown;
