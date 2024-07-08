import { createBoard } from "@wixc3/react-board";
import ContentF from "../../../icons/content/f";

export default createBoard({
  name: "ContentF",
  Board: () => <ContentF />,
  isSnippet: true,
});
