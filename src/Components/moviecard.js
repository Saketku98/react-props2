import React from "react";

function Tag({ name, poster }) {
  return (
    <div className="main">
      <div className="left">
        <div className="lower">
        <h2>{name}</h2> <br />
          <p>
            This week Pitcbook published their latest Emerging Tech Indicator (ETI) report which tracks early stage investment activity...
          </p>
        </div>
      </div>

      <div className="right">
        <img src={poster} style={{marginTop:"40%", marginRight:"30px",height:"300px",width:"250px"}} alt="movie-banner" className="movie-banner" />
      </div>
    </div>
  );
}

export default Tag;