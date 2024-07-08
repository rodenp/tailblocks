import { createBoard } from "@wixc3/react-board";
import ContentA from "../../../icons/content/a";

export default createBoard({
  name: "ContentA",
  Board: () => <ContentA />,
  isSnippet: true,
});
