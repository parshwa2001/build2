import React, { useEffect, useState } from "react";
import "./Stats.css"; // Import your CSS file
import { toast } from "react-toastify";
import { getDataCredentials } from "../../services/HomePageApi";

const stats = [
  { id: 1, name: "Apartment Sale", value: 400 },
  { id: 2, name: "Completed Project", value: 200 },
  { id: 3, name: "Happy Client", value: 500 },
];

const Stats = () => {
  const [animatedStats, setAnimatedStats] = useState([]);
  
  const [data , setData ] = useState([]);

  useEffect(() => {

    toast.loading("Loading Home Services Div");
    const response = getDataCredentials().then((res)=>{
      toast.dismiss();
      console.log(res);
      setData(res.data);
      toast.success("Successfully Fetched");
    }).catch((Err)=>{
      toast.error("Try Again!");
    });
    // This function increments the stats values from 0 to their respective values
    const incrementStats = () => {
      let isAnimating = true;

      const interval = setInterval(() => {
        setAnimatedStats((prevStats) =>
          prevStats.map((stat) => {
            if (stat.value > stat.currentValue) {
              stat.currentValue += 1;
            } else {
              isAnimating = false;
            }
            return stat;
          })
        );

        if (!isAnimating) {
          clearInterval(interval);
        }
      }, 10);
    };


    // Initialize stats with all values set to 0
    setAnimatedStats(stats.map((stat) => ({ ...stat, currentValue: 0 })));

    // Call the incrementStats function when the component mounts
    incrementStats();
  }, []);

  return (
    <div className="stats-container">
      <dl className="stats-list">
        {animatedStats.map((stat,idx) => (
          <div key={idx} className="stat-item">
            <dt className="stat-name">{stat.name}</dt>
            <dd className="stat-value">{data[idx]?._doc.data}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default Stats;
