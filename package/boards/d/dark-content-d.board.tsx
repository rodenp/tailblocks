import { createBoard } from "@wixc3/react-board";
import DarkContentD from "../../../blocks/content/dark/d";

export default createBoard({
  name: "DarkContentD",
  Board: () => <DarkContentD />,
  isSnippet: true,
});
