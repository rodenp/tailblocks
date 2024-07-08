import { createBoard } from "@wixc3/react-board";
import BlogC from "../../../icons/blog/c";

export default createBoard({
  name: "BlogC",
  Board: () => <BlogC />,
  isSnippet: true,
});
