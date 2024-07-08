import { createBoard } from "@wixc3/react-board";
import DarkContentB from "../../../blocks/content/dark/b";

export default createBoard({
  name: "DarkContentB",
  Board: () => <DarkContentB />,
  isSnippet: true,
});
