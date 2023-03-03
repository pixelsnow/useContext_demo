import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import { UserContext } from "../UserContext";

const CompC = (props) => {
  const { info } = props;
  const framework = useContext(GlobalContext);
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Component C</h2>
      <p>{framework}</p>
      <p>User name: {user.name}</p>
      <p>User job: {user.job}</p>
    </div>
  );
};

export default CompC;
