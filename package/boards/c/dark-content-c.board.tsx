import { createBoard } from "@wixc3/react-board";
import DarkContentC from "../../../blocks/content/dark/c";

export default createBoard({
  name: "DarkContentC",
  Board: () => <DarkContentC />,
  isSnippet: true,
});
