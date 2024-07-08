import { createBoard } from "@wixc3/react-board";
import BlogD from "../../../icons/blog/d";

export default createBoard({
  name: "BlogD",
  Board: () => <BlogD />,
  isSnippet: true,
});
