import { createBoard } from "@wixc3/react-board";
import LightBlogB from "../../../blocks/blog/light/b";

export default createBoard({
  name: "LightBlogB",
  Board: () => <LightBlogB />,
  isSnippet: true,
});
