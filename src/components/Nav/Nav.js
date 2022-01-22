import { Link, NavLink, useHistory } from "react-router-dom";
import styles from "./Nav.module.css";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <h5> Logo here..</h5>

      <ul className={styles["main-menu"]}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/weather">Weather</NavLink>
        </li>

        {/* <li className={styles["push-right"]}>
          <NavLink to="/login" activeClassName={styles.active}>
            Login
          </NavLink>
        </li> */}

        {/* <li className={styles["push-right"]}>
          Welcome,{" "}
          <NavLink to="/profile" activeClassName={styles.active}>
            {auth.user.firstName}
          </NavLink>
        </li> */}
        {/* <li>
          <a href="/" onClick={handleLogout}>
            Logout
          </a>
        </li> */}
      </ul>
    </nav>
  );
}
