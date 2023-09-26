"use client";
import React from "react";

export default function error({ error, reset }) {
  return (
    <div>
      <h4>없는 페이지임용</h4>
      <button onClick={() => reset()}></button>
    </div>
  );
}
