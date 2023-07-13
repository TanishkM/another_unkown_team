import "./Resource.css";
import Youtube from "./youtube";

function Temp(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "row",
          width: "90%",
        }}
      >
        <a
          href={props.lin}
          style={{
            fontFamily: "Sans-serif",
            fontSize: "2rem",
            color: "white",
            // position: "relative",
            // left: "-12rem",
          }}
        >
          {props.name}
        </a>
        <p
          style={{
            fontFamily: "Sans-serif",
            fontSize: "1rem",
            color: "white",
          }}
        >
          As the world is moving towards a connected society. The communities
          driving the development of open source technologies are becoming more
          prominent. Numerous software giants like Google and Microsoft are
          embracing the idea of Open Source Software. With Microsoft's Campaign:
          “ Microsoft ❤️ Open Source ”, the importance of open source is visible
          to the world. For example, Tensorflow and Pytorch
        </p>
        {props.dir === "left" ? <Youtube embedId={props.embedId} /> : null}
      </div>
    </>
  );
}

export default function Frame(props) {
  let lin = "https://www.youtube.com/watch?v=" + props.embedId;
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "row",
          width: "100%",
        }}
      >
        <div style={{ width: "50%" }}>
          {props.dir === "left" ? (
            <Youtube embedId={props.embedId} />
          ) : (
            <Temp lin={lin} name={props.name} />
          )}
        </div>
        <div style={{ width: "50%" }}>
          {props.dir === "right" ? (
            <Youtube embedId={props.embedId} />
          ) : (
            <Temp lin={lin} name={props.name} />
          )}
        </div>
      </div>
    </>
  );
}
