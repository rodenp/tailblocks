import { createBoard } from "@wixc3/react-board";
import DarkBlogE from "../../../blocks/blog/dark/e";

export default createBoard({
  name: "DarkBlogE",
  Board: () => <DarkBlogE />,
  isSnippet: true,
});
