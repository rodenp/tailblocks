import { createBoard } from "@wixc3/react-board";
import DarkHeaderD from "../../../blocks/header/dark/d";

export default createBoard({
  name: "DarkHeaderD",
  Board: () => <DarkHeaderD />,
  isSnippet: true,
});
