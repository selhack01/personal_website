import React, { useState } from "react";
import useStyles from "./stylesheet";

const FilterButtons = ({ onTabChange }) => {
  const classes = useStyles();
  const tabs = ["All", "3D Works", "Project", "Graphic Design"];
  const [activeTab, setActiveTab] = useState("All");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return <div className={classes.container}>
    {tabs.map((tab) => (
      <button
      className={`${classes.button} ${activeTab === tab ? classes.activeButton : ""}`}
      onClick={() => handleTabClick(tab)}
      key={tab}
      >
        {tab}
      </button>
    ))}
  </div>
};

export default FilterButtons;
