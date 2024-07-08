import React from "react";
import { createBoard } from "@wixc3/react-board";
import LightBlogA from "../../../blocks/blog/light/a";

export default createBoard({
  name: "LightBlogA",
  Board: () => <LightBlogA />,
  isSnippet: true,
});
