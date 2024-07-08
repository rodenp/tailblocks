import { createBoard } from "@wixc3/react-board";
import DarkCTAB from "../../../blocks/cta/dark/b";

export default createBoard({
  name: "DarkCTAB",
  Board: () => <DarkCTAB />,
  isSnippet: true,
});
