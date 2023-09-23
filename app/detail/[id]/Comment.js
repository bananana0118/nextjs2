"use client";

import React, { useEffect, useState } from "react";

export default function Comment(props) {
  let [comment, setComment] = useState("");
  const [data, setData] = useState([]);

  const redirectionData = () => {
    fetch("/api/comment/list?id=" + props._id)
      .then((r) => r.json())
      .then((result) => {
        setData(result);
      });
  };

  useEffect(() => {
    fetch("/api/comment/list?id=" + props._id)
      .then((r) => r.json())
      .then((result) => {
        setData(result);
      });
  }, []);
  return (
    <div>
      {data.length > 0
        ? data.map((a, i) => <p key={i}>{a.content}</p>)
        : "로딩중"}
      <input onChange={(e) => setComment(e.target.value)} />
      <button
        onClick={() => {
          fetch("/api/comment/new", {
            method: "POST",
            body: JSON.stringify({ comment: comment, _id: props._id }),
          }).then(redirectionData);
        }}
      >
        댓글전송
      </button>
    </div>
  );
}
