import CompB from "./CompB";

const CompA = (props) => {
  const { info } = props;
  return (
    <div>
      <h2>Component A</h2>
      <p>{info}</p>
      <CompB info={info} />
    </div>
  );
};

export default CompA;
