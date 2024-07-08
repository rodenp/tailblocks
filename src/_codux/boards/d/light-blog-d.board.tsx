import { createBoard } from "@wixc3/react-board";
import LightBlogD from "../../../blocks/blog/light/d";

export default createBoard({
  name: "LightBlogD",
  Board: () => <LightBlogD />,
  isSnippet: true,
});
