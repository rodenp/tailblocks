import React from "react";
import { createBoard } from "@wixc3/react-board";
import BlogA from "../../../icons/blog/a";

export default createBoard({
  name: "BlogA",
  Board: () => <BlogA />,
  isSnippet: true,
});
