import { NavLink, Outlet } from "react-router-dom";
import Background from "../../UI/Background";
import classes from "./EventPage.module.css";

const EventPage = () => {
  return (
    <section className={classes.eventPage}>
      <Background className={classes.bg}>
        <div className={classes.tabs}>
          <div className={classes.tabList}>
            <div className={`${classes.tabHead}`}>
              <NavLink
                to="cs"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes.links}`
                    : `${classes.links}`
                }
              >
                Computer Science
              </NavLink>
            </div>
            <div className={`${classes.tabHead}`}>
              <NavLink
                to="civil"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes.links}`
                    : `${classes.links}`
                }
              >
                Civil
              </NavLink>
            </div>
            <div className={`${classes.tabHead}`}>
              <NavLink
                to="entc"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes.links}`
                    : `${classes.links}`
                }
              >
                E&TC
              </NavLink>
            </div>
            <div className={`${classes.tabHead}`}>
              <NavLink
                to="mechanical"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes.links}`
                    : `${classes.links}`
                }
              >
                Mechanical
              </NavLink>
            </div>
          </div>
        </div>
        <Outlet />
      </Background>
    </section>
  );
};

export default EventPage;
