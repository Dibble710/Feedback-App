import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Header({ text }) {

  return (
    <header>
      <div className="container">
        <Link to='/'>
        <h2>{text}</h2>
        </Link>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback App",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
