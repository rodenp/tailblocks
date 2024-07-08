import { createBoard } from "@wixc3/react-board";
import DarkBlogC from "../../../blocks/blog/dark/c";

export default createBoard({
  name: "DarkBlogC",
  Board: () => <DarkBlogC />,
  isSnippet: true,
});
