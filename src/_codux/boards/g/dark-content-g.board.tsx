import { createBoard } from "@wixc3/react-board";
import DarkContentG from "../../../blocks/content/dark/g";

export default createBoard({
  name: "DarkContentG",
  Board: () => <DarkContentG />,
  isSnippet: true,
});
