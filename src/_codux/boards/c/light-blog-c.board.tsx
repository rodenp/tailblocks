import { createBoard } from "@wixc3/react-board";
import LightBlogC from "../../../blocks/blog/light/c";

export default createBoard({
  name: "LightBlogC",
  Board: () => <LightBlogC />,
  isSnippet: true,
});
