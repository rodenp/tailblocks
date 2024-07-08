import { createBoard } from "@wixc3/react-board";
import DarkHeaderA from "../../../blocks/header/dark/a";

export default createBoard({
  name: "DarkHeaderA",
  Board: () => <DarkHeaderA />,
  isSnippet: true,
});
