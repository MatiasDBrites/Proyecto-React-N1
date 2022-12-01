import { Link } from "react-router-dom";
import ReactGa from "react-ga";
/* import the image plus.png from the assets folder */
import plus from "../assets/plus.png";


/* Component to sing out the user */
export default function DashboardWrapper(props: any) {
  const { children } = props;
  ReactGa.event({
    category: "click signOut",
    action: "click",
    label: "label",
  });
  return (
    <div className="signOutContainer">
    <div className="signOut">
      <nav>
        <Link to="/signout">
          <img className="plus"src={plus} alt="plus" />
          <h2> Sign Out </h2>
        </Link>
      </nav>
      <div>{children}</div>
    </div>
    </div>
  );
}
