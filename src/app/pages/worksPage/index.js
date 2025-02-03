import React, { useState } from "react";
import useStyles from "./stylesheet";
import { FilterButtons, Section } from "../../components";
import data from "../../datas/index";

const Works = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState("All");
  const filteredData = 
    activeTab === "All" ? data : data.filter((item) => item.type === activeTab);

  return (
    <div className={classes.container}>
      <Section title={"Portfolio"} border={true}>
        <FilterButtons onTabChange={setActiveTab} />
      </Section>
      <div className={classes.tabs}>
        {filteredData.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.imgContainer}
          >
            <img src={item.image} className={classes.img} alt="" />
            <div className={classes.overlay}>
              <span className={classes.text}>Click</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Works;
