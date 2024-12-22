import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  return (
    <div className="text-center">
      Github followers: {data.name}
      <img src={data.avatar_url}></img>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(`https://api.github.com/users/raaaghavv`);
  return response.json();
};
