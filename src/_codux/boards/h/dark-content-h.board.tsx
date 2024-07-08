import { createBoard } from "@wixc3/react-board";
import DarkContentH from "../../../blocks/content/dark/h";

export default createBoard({
  name: "DarkContentH",
  Board: () => <DarkContentH />,
  isSnippet: true,
});
