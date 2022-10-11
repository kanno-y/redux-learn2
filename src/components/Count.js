import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount } from "../acitons/Count";
import { decreaseCount } from "../acitons/Count";

function Count() {
  const count = useSelector((state) => state.countReducer.count);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch(increaseCount());
  };
  const decrease = () => {
    dispatch(decreaseCount());
  };
  return (
    <>
      <div>Countコンポーネント: {count}</div>
      <button onClick={increase}>Up</button>
      <button onClick={decrease}>Down</button>
    </>
  );
}

export default Count;
