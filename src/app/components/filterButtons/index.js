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

  return (
    <div className={classes.container}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`${classes.button} ${activeTab === tab ? classes.activeButton : ""}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
