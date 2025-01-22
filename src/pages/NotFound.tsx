import React from "react";
import { Link } from "react-router";

type Props = {};

export default function NotFound({}: Props) {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>this page not found</p>
      <Link to={"/"}>
        <button>go to home page</button>
      </Link>
    </div>
  );
}
