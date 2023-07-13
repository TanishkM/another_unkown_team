import "./Resource.css";
import Youtube from "./youtube";

export default function Frame(props) {
  let lin = "https://www.youtube.com/watch?v=" + props.embedId;
  return (
    <>
      <div style={{}}>
        <div className="buttonContainer">
          <a href={lin} className="button">
            {props.name}
          </a>
        </div>
        <Youtube embedId={props.embedId} />
      </div>
    </>
  );
}
