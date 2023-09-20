"use client";

import React, { useEffect, useState } from "react";

export default function Comment(props) {
  let [comment, setComment] = useState("");
  console.log(props);
  useEffect(() => {
    fetch("/api/comment/list?id=" + props._id)
      .then((r) => r.json())
      .then((result) => {
        console.log(result);
      });
  }, []);

  return (
    <div>
      <div>댓글목록 보여줄 부분</div>
      <input onChange={(e) => setComment(e.target.value)} />
      <button
        onClick={() => {
          fetch("/api/comment/new", {
            method: "POST",
            body: JSON.stringify({ comment: comment, _id: props._id }),
          });
        }}
      >
        댓글전송
      </button>
    </div>
  );
}
