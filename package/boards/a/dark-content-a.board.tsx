import { createBoard } from "@wixc3/react-board";
import DarkContentA from "../../../blocks/content/dark/a";

export default createBoard({
  name: "DarkContentA",
  Board: () => <DarkContentA />,
  isSnippet: true,
});
