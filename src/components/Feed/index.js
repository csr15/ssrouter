import React from "react";

import { useNavigate } from "../../SSRouter/SSRouterHooks";
import { feedData } from "../../constants";
import { Outlet } from "react-router-dom";

const FeedCard = ({ title, index }) => {
  const navigate = useNavigate();
  
  return (
    <div
      className="col-md-12 ss-home__feed-card-container"
      onClick={() => navigate(`/feeds/${index}`)}
    >
      <div className="ss-home__feed-card">
        <h2 className="mr-3">#{index + 1} </h2>
        <h6>{title}</h6>
      </div>
    </div>
  );
};

const Feed = () => {
  return (
    <div className="container ss-home__feed mt-5">
      <h6>
        <i className="bx bxs-hot"></i>FEEDS!
      </h6>
      <div className="row">
        {feedData.map((feed, index) => (
          <FeedCard title={feed} index={index} key={feed} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Feed;

export const fetchFeeds = async () => {
  const data = await fetch("https://dummyjson.com/products");
  return data.json();
};
