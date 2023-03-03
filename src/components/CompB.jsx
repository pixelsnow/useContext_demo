import CompC from "./CompC";

const CompB = (props) => {
  const { info } = props;
  return (
    <div>
      <h2>Component B</h2>
      <p>{info}</p>
      <CompC info={info} />
    </div>
  );
};

export default CompB;
