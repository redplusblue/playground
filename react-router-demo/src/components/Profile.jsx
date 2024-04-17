import { useParams } from "react-router-dom";
import DefaultProfile from "./DefaultProfile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";
import Samir from "./Samir";

const Profile = () => {
  const { name } = useParams();
  const profiles = {
    samir: <Samir />,
    popeye: <Popeye />,
    spinach: <Spinach />,
  };

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      {name && <h2>The profile visited is: {name}</h2>}
      {profiles[name] || <DefaultProfile />}
    </div>
  );
};

export default Profile;
