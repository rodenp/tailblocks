import { createBoard } from "@wixc3/react-board";
import DarkBlogA from "../../../blocks/blog/dark/a";

export default createBoard({
  name: "DarkBlogA",
  Board: () => <DarkBlogA />,
  isSnippet: true,
});
