import React from "react";
import { useNavigate } from "../../SSRouter/SSRouterHooks";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="ss-container ss-home">
      <p>THIS IS</p>
      <h2>Home</h2>
      <button className="btn ss-btn" onClick={() => navigate('/feeds')}>Show feeds</button>
    </div>
  );
};

export default Home;
