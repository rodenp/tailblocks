import { createBoard } from "@wixc3/react-board";
import DarkContentE from "../../../blocks/content/dark/e";

export default createBoard({
  name: "DarkContentE",
  Board: () => <DarkContentE />,
  isSnippet: true,
});
