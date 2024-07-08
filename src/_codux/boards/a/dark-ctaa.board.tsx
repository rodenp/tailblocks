import { createBoard } from "@wixc3/react-board";
import DarkCTAA from "../../../blocks/cta/dark/a";

export default createBoard({
  name: "DarkCTAA",
  Board: () => <DarkCTAA />,
  isSnippet: true,
});
