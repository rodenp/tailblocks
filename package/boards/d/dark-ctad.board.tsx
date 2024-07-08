import { createBoard } from "@wixc3/react-board";
import DarkCTAD from "../../../blocks/cta/dark/d";

export default createBoard({
  name: "DarkCTAD",
  Board: () => <DarkCTAD />,
  isSnippet: true,
});
