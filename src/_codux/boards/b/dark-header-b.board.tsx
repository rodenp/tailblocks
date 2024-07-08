import { createBoard } from "@wixc3/react-board";
import DarkHeaderB from "../../../blocks/header/dark/b";

export default createBoard({
  name: "DarkHeaderB",
  Board: () => <DarkHeaderB />,
  isSnippet: true,
});
