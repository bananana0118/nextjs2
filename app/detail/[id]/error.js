"use client";
import React from "react";

export default function error({ error, reset }) {
  return (
    <div>
      <h4>에러났어용</h4>
      <button onClick={reset()}></button>
    </div>
  );
}
