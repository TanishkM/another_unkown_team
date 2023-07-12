import Frame from "./frame";
import "./Community.css";

export default function Community() {
  return (
    <div className="expTg">
      <h1>The Community</h1>
      <div
        className="cardsContainer"
        style={{ position: "relative", bottom: "7rem" }}
      >
        <Frame image="Member1" name="Sharishth Singh" title="Team leader" />
        <Frame image="Member1" name="Sharishth Singh" title="Co-leader" />
        <Frame image="Member1" name="Sharishth Singh" title="Member" />
        <Frame image="Member1" name="Sharishth Singh" title="Member" />
      </div>
    </div>
  );
}
