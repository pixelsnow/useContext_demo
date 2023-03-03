import { UserContextProvider } from "../UserContext";
import CompC from "./CompC";

const CompB = (props) => {
  const { info } = props;
  return (
    <div>
      <h2>Component B</h2>
      <UserContextProvider>
        <CompC info={info} />
      </UserContextProvider>
    </div>
  );
};

export default CompB;
