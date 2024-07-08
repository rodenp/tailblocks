import { createBoard } from "@wixc3/react-board";
import DarkHeaderC from "../../../blocks/header/dark/c";

export default createBoard({
  name: "DarkHeaderC",
  Board: () => <DarkHeaderC />,
  isSnippet: true,
});
