import { createBoard } from "@wixc3/react-board";
import BlogB from "../../../icons/blog/b";

export default createBoard({
  name: "BlogB",
  Board: () => <BlogB />,
  isSnippet: true,
});
