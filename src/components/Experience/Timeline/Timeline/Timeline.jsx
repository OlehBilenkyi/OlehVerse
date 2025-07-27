import React from "react";
import styles from "../../Experience.module.css";
import TimelineItem from "../TimelineItem/TimelineItem";
import experiences from "../../hooks/experienceData";
import useTimelinePosition from "../../hooks/useTimelinePosition";

const Timeline = () => {
  return (
    <div className={styles.timeline}>
      {experiences.map((item, index) => {
        const { position, shiftUp } = useTimelinePosition(index);
        return (
          <TimelineItem
            key={index}
            {...item}
            index={index}
            position={position}
            shiftUp={shiftUp}
          />
        );
      })}
    </div>
  );
};

export default Timeline;
