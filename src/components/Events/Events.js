import React from "react";
import "./Events.css";

const expandItem = (item) => {
  const itemContent = item.innerHTML;
  const expandedItemContent = document.getElementById("expanded-item-content");
  expandedItemContent.innerHTML = itemContent;

  const expandedItemContainer = document.getElementById(
    "expanded-item-container"
  );
  expandedItemContainer.classList.add("expanded", "centered");

  expandedItemContainer.style.opacity = 1;
  document.body.style.overflow = "auto";
};

const Events = () => {
  return (
    <div>
      <div class="expTag eventsHeading">
        <h1>Events</h1>
      </div>
      <div class="wrapper">
        <div class="item-container even">
          <div class="item-piece">
            <div class="item">
              <div class="heading1">Web Development</div>
              <div class="elementSection">
                <div class="element">Meghana Varanasi</div>
                <div class="element">Kumar Shivendu</div>

                <div class="element">Ambar Mutha</div>
              </div>
              <div class="dataSection">
                <div class="date">May 2020</div>
              </div>
            </div>
            <div class="bullet first "></div>
          </div>
        </div>
        <div class="item-container even">
          <div class="item-piece">
            <div class="item">
              <div class="heading1">Coordinators</div>
              <div class="elementSection">
                <div class="element">Kumar Shivendu</div>
                <div class="element">Shashwat Jaiswal</div>
              </div>
              <div class="dataSection">
                <div class="date">April 2021</div>
              </div>
            </div>
            <div class="bullet first "></div>
          </div>
        </div>
        <div
          class="item-container even down"
        
        >
          <div class="item-piece">
            <div class="item">
              <div class="heading1">FossOverFlow</div>
              <div class="elementSection">
                <div class="element">Event</div>
                <div class="element">Begins</div>
              </div>
              <div class="dataSection">
                <div class="date">Nov 2021</div>
              </div>
            </div>
            <div class="bullet first "></div>
          </div>
          <div class="down-bar"></div>
        </div>
        <div class="item-container odd">
          <div class="item-piece">
            <div class="item">
              <div class="heading1">FossOverFlow</div>
              <div class="elementSection">
                <div class="element">Event</div>
                <div class="element">Concludes</div>
              </div>
              <div class="dataSection">
                <div class="date">Feb 2022</div>
              </div>
            </div>
            <div class="bullet first "></div>
          </div>
        </div>
        <div class="item-container odd">
          <div class="item-piece">
            <div class="item">
              <div class="heading1">Coordinator, 2023/24</div>
              <div class="elementSection">
                <div class="element">Madhur</div>
                <div class="element">Jain</div>
              </div>
              <div class="dataSection">
                <div class="date">Feb 2023</div>
              </div>
            </div>
            <div class="bullet"></div>
          </div>
        </div>
        <div
          class="item-container last odd"
        
        >
          <div class="item-piece">
            <div class="bullet"></div>
          </div>
        </div>
      </div>
      <div id="expanded-item-container">
        <div id="expanded-item-content"></div>
      </div>
    </div>
  );
};

export default Events;
