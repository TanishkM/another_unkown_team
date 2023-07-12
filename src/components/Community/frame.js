import "./Community.css";

export default function Frame(props) {
  return (
    <>
      <div className="frame">
        <div className="glow">
        <div className="frameImage">
          <div id={props.image} className="Display" />
        </div>
        </div>
        <div
          className="frameName title"
          style={{ position: "relative", top: "-21rem", left: "-8rem" }}
        >
          {props.name}
        </div>
        <div className='frameTitle title' 
        style={{position:'relative', bottom: '5.5rem'}}
        >
          {props.title}
        </div>
      </div>
    </>
  );
}
