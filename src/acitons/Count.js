// countのactions
export const INCREACE_COUNT = "INCREACE_COUNT";
export const DECREACE_COUNT = "DECREACE_COUNT";

export const increaseCount = () => ({
  type: INCREACE_COUNT,
});

export const decreaseCount = () => ({
  type: DECREACE_COUNT,
});
