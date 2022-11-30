import React from "react";
import { Link } from "react-router-dom";
import ReactGa from "react-ga";



/* Component to sing out the user written in TypeScript */
/* the children component was be moved to the dashboardWrapper and be replaced by a props*/
export default function DashboardWrapper(props: any) {
  const { children } = props;
  ReactGa.event({
    category: "click signOut",
    action: "click",
    label: "label",
  });
  return (
    <div className="signOut">
      <nav>
        <Link to="/signout">
          <h2> Sign Out </h2>
        </Link>
      </nav>
      <div>{children}</div>
    </div>
  );
}
