import React from "react";
import { useParams } from "react-router-dom";

function UserId() {
  const { userid } = useParams();
  return <h1>{userid}</h1>;
}

export default UserId;
