import Frame from "./page";
import "./Resource.css";

export default function Community() {
  return (
    <>
      <div className="expTag">
        <h1>Resource</h1>
      </div>
      <div
        className="cardsContainer"
        style={{
          bottom: "7rem",
          width: "100%",
        }}
      >
        <span>
          <Frame embedId="mhdBUXzxqHA" name={"Openlake"} dir={"left"} />
          <Frame embedId="rFCxN38MRmQ" name={"Openlake"} dir={"right"} />
          <Frame embedId="Dix6qe61uW4" name={"Ingenuity"} dir={"left"} />
          <Frame embedId="TV2AVqwHafY" name={"Ingenuity"} dir={"right"} />
        </span>
      </div>
    </>
  );
}
