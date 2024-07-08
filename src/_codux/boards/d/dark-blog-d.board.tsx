import { createBoard } from "@wixc3/react-board";
import DarkBlogD from "../../../blocks/blog/dark/d";

export default createBoard({
  name: "DarkBlogD",
  Board: () => <DarkBlogD />,
  isSnippet: true,
});
