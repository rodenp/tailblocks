import { createBoard } from "@wixc3/react-board";
import DarkFooterD from "../../../blocks/footer/dark/d";

export default createBoard({
  name: "DarkFooterD",
  Board: () => <DarkFooterD />,
  isSnippet: true,
});
