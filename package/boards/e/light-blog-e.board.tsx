import { createBoard } from "@wixc3/react-board";
import LightBlogE from "../../../blocks/blog/light/e";

export default createBoard({
  name: "LightBlogE",
  Board: () => <LightBlogE />,
  isSnippet: true,
});
