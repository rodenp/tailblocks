import { createBoard } from "@wixc3/react-board";
import DarkContentF from "../../../blocks/content/dark/f";

export default createBoard({
  name: "DarkContentF",
  Board: () => <DarkContentF />,
  isSnippet: true,
});
