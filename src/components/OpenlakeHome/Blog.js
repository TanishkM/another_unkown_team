import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../footer";
import Community from "../Community";
import "./Blog.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Content() {
  return (
    <div className="blog">
      <div className="expContainer">
        <div className="expImg">
          <div className="expTag">
            <h1>Blog</h1>
          </div>
        </div>
      </div>
      <div className="carouselContainer">
        <Carousel>
          <div>
            <img src="assets/1.jpeg" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="assets/2.jpeg" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="assets/3.jpeg" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="assets/4.jpeg" />
            <p className="legend">Legend 4</p>
          </div>
          <div>
            <img src="assets/5.jpeg" />
            <p className="legend">Legend 5</p>
          </div>
          <div>
            <img src="assets/6.jpeg" />
            <p className="legend">Legend 6</p>
          </div>
        </Carousel>
      </div>
      <div class="cardbg">
        <div class="ag-format-container">
          <div class="ag-courses_box">
            <div class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>

                <div class="ag-courses-item_title">Blog1</div>

                <div class="ag-courses-item_date-box">
                  Start:
                  <span class="ag-courses-item_date">04.11.2022</span>
                </div>
              </a>
            </div>

            <div class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>

                <div class="ag-courses-item_title">Blog1</div>

                <div class="ag-courses-item_date-box">
                  Start:
                  <span class="ag-courses-item_date">04.11.2022</span>
                </div>
              </a>
            </div>

            <div class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>

                <div class="ag-courses-item_title">Blog1</div>

                <div class="ag-courses-item_date-box">
                  Start:
                  <span class="ag-courses-item_date">04.11.2022</span>
                </div>
              </a>
            </div>

            <div class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>

                <div class="ag-courses-item_title">Blog1</div>

                <div class="ag-courses-item_date-box">
                  Start:
                  <span class="ag-courses-item_date">04.11.2022</span>
                </div>
              </a>
            </div>

            <div class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>

                <div class="ag-courses-item_title">Blog1</div>

                <div class="ag-courses-item_date-box">
                  Start:
                  <span class="ag-courses-item_date">30.11.2022</span>
                </div>
              </a>
            </div>

            <div class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>

                <div class="ag-courses-item_title">Blog1</div>
              </a>
            </div>

            <div class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
                <div class="ag-courses-item_title">Blog1</div>
              </a>
            </div>

            <div class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>

                <div class="ag-courses-item_title">Blog1</div>

                <div class="ag-courses-item_date-box">
                  Start:
                  <span class="ag-courses-item_date">31.10.2022</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
