import { Link } from "react-router-dom";
import React from "react";
//import { Sidebar } from './Sidebar';

export const admChooseyear = () => {
  return (
    <>
      <div class="chooseyear">
        <h1>Choose Year</h1>
        <div class="year">
          <div class="left">
            <div class="first">
              <Link to="/firstyear">
                <button>First Year</button>
              </Link>
            </div>

            <div class="second">
              <Link to="/secondyearstudent">
                <button>Second Year</button>
              </Link>
            </div>

            <div class="third">
              <Link to="/thirdyearstudent">
                <button>Third Year</button>
              </Link>
            </div>
          </div>

          <div class="right">
            <div class="fourth">
              <Link to="/fourthyear">
                <button>Fourth Year</button>
              </Link>
            </div>

            <div class="fifth">
              <Link to="/fifthyear">
                <button>Fifth Year</button>
              </Link>
            </div>

            <div class="sixth">
              <Link to="/sixthyear">
                <button>Sixth Year</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
