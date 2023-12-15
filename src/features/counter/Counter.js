import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";

//from tailwind css
export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (<div>
    <div>
      
    </div>
  </div>);;
}
