import Frame from "./page";
import "./Resource.css";

export default function Community() {
  return (
    <>
      {/* <div className="expContainer"> */}
      {/* <div className="expImg"> */}
      <div className="expTag">
        <h1>Resource</h1>
        <div
          className="cardsContainer"
          style={{
            position: "relative",
            bottom: "7rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span>
            <Frame embedId="mhdBUXzxqHA" name={"Openlake"} />
            <Frame embedId="rFCxN38MRmQ" name={"Openlake"} />
            <Frame embedId="Dix6qe61uW4" name={"Ingenuity"} />
            <Frame embedId="TV2AVqwHafY" name={"Ingenuity"} />
          </span>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
