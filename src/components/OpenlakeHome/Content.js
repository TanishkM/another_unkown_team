import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer";
import Community from "../Community";

export default function Content() {
  return (
    <>
    {/* <div className="expContainer">
      <div className="expImg">
        <div className="expTag"> */}
          <h1 style={{marginTop: '7rem'}}>OpenLake</h1>
          <div style={{padding: '10rem',textAlign:'center',fontSize: '20px'}}>
As the world is moving towards a connected society. The communities driving the development of open source technologies are becoming more prominent. Numerous software giants like Google and Microsoft are embracing the idea of Open Source Software. With Microsoft's Campaign: “ Microsoft ❤️ Open Source ”, the importance of open source is visible to the world. For example, Tensorflow and Pytorch are 2 very important Machine learning libraries that heavily govern the advancements in Artificial Intelligence today, both of these are driven and developed by open source communities in collaboration with corporate firms.
<br/>
<br/>
As the world is moving towards a connected society. The communities driving the development of open source technologies are becoming more prominent. Numerous software giants like Google and Microsoft are embracing the idea of Open Source Software. With Microsoft's Campaign: “ Microsoft ❤️ Open Source ”, the importance of open source is visible to the world. For example, Tensorflow and Pytorch are 2 very important Machine learning libraries that heavily govern the advancements in Artificial Intelligence today, both of these are driven and developed by open source communities in collaboration with corporate firms.
<br/>
<br/>
As the world is moving towards a connected society. The communities driving the development of open source technologies are becoming more prominent. Numerous software giants like Google and Microsoft are embracing the idea of Open Source Software. With Microsoft's Campaign: “ Microsoft ❤️ Open Source ”, the importance of open source is visible to the world. For example, Tensorflow and Pytorch are 2 very important Machine learning libraries that heavily govern the advancements in Artificial Intelligence today, both of these are driven and developed by open source communities in collaboration with corporate firms.
With the importance of Open Source made crystal clear. 
        {/* </div>
      </div> */}
      </div>
      <div className="cardsContainer">
        <div className="cardHolder">
          <div>
            <div id="activityTracker" className="cardDisplay"></div>
            <div className="buttonContainer">
              <a
                href="https://github.com/OpenLake/Activity-Tracker/"
                className="button"
              >
                Activity Tracker
              </a>
            </div>
          </div>
          <div>
            <div id="photoSharing" className="cardDisplay"></div>
            <div className="buttonContainer">
              <a
                href="https://github.com/OpenLake/Photo-Sharing-App/"
                className="button"
              >
                Photo Sharing App
              </a>
            </div>
          </div>
          <div>
            <div id="CGPA" className="cardDisplay"></div>
            <div className="buttonContainer">

              <a
                href="https://github.com/OpenLake/iitbh-cgpa"
                className="button"
              >
                CGPA Calculator
              </a>
              {/* <Link to="/gaming-zone" className="button">
                CGPA Calculator
              </Link> */}
            </div>
          </div>
          <div>
            <div id="Homework" className="cardDisplay"></div>
            <div className="buttonContainer">
              <a
                href="https://github.com/OpenLake/Homework-Scheduler"
                className="button"
              >
                Homework
              </a>
            </div>
          </div>
          <div>
            <div id="canonforces" className="cardDisplay"></div>
            <div className="buttonContainer">
              <a
                href="https://github.com/OpenLake/canonforces"
                className="button"
              >
                Canonforces
              </a>
            </div>
          </div>
          <div>
            <div id="leaderboard" className="cardDisplay"></div>
            <div className="buttonContainer">
            <a
                href="https://github.com/OpenLake/leaderboardpro"
                className="button"
              >
                Leaderboard
              </a>
              {/* <Link to="/fields-of-science" className="button">
                leaderboard
              </Link> */}
            </div>
          </div>
        </div>
      </div>
        <Community />
    {/* </div> */}
    </>

  );
}
