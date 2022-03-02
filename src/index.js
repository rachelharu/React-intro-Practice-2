import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>

    <div>
      <img
        className="food-img"
        alt="bacon"
        src="https://healthyrecipesblogs.com/wp-content/uploads/2018/01/oven-bacon-featured.jpg"
      />
      <img
        className="food-img"
        alt="jamon"
        src="https://imageio.forbes.com/specials-images/dam/imageserve/1024783033/960x0.jpg?fit=bounds&format=jpg&width=960"
      />
      <img
        className="food-img"
        alt="noodles"
        src="https://thewoksoflife.com/wp-content/uploads/2020/04/homemade-chinese-egg-noodles-19-e1609271249794-500x375.jpg"
      />
    </div>
  </div>,
  document.getElementById("root")
);
