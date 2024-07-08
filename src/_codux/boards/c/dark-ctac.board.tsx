import { createBoard } from "@wixc3/react-board";
import DarkCTAC from "../../../blocks/cta/dark/c";

export default createBoard({
  name: "DarkCTAC",
  Board: () => <DarkCTAC />,
  isSnippet: true,
});
