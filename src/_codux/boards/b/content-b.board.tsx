import { createBoard } from "@wixc3/react-board";
import ContentB from "../../../icons/content/b";

export default createBoard({
  name: "ContentB",
  Board: () => <ContentB />,
  isSnippet: true,
});
