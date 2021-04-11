import portrait from "../portrait.png";
import byAJV from "../byAJV.png";
import "./Portrait.css";

export const Portrait = () => {
  return (
    <div className="portrait-container">
      <img className="portrait-img" src={portrait} alt="portrait of me" />
      <img className="by-ajv-text" src={byAJV} alt="credit text" />
    </div>
  );
};
