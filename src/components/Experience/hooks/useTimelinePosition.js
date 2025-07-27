const useTimelinePosition = (index) => {
  const position = index % 2 === 0 ? "left" : "right";
  const shiftUp =
    (position === "left" && index >= 2) || (position === "right" && index >= 3);

  return { position, shiftUp };
};

export default useTimelinePosition;
