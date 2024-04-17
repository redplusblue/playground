import { Link } from "react-router-dom";

const DefaultProfile = () => {
  return (
    <div>
      <p>Click on the links below to visit the profiles:</p>
      <ul>
        <li>
          <Link to="/profile/samir">Samir</Link>
        </li>
        <li>
          <Link to="/profile/popeye">Popeye</Link>
        </li>
        <li>
          <Link to="/profile/spinach">Spinach</Link>
        </li>
      </ul>
      <Link to="/">Go back to home</Link>
    </div>
  );
};

export default DefaultProfile;
