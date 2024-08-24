import { Link, useLocation } from "react-router-dom";
import { Header } from "../components";

export const Error = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <section className="error-page">
      <Header />
      <section className="container">
        <p>somthing went wrong message </p>
        <div className="buttons-group">
          <Link className="button" to="/jobs">
            Home
          </Link>
          <Link className="button" to="../">
            Back
          </Link>
        </div>
      </section>
    </section>
  );
};
