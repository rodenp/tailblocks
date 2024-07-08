import { createBoard } from "@wixc3/react-board";
import DarkBlogB from "../../../blocks/blog/dark/b";

export default createBoard({
  name: "DarkBlogB",
  Board: () => <DarkBlogB />,
  isSnippet: true,
});
