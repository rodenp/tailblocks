import { createBoard } from "@wixc3/react-board";
import DarkFooterC from "../../../blocks/footer/dark/c";

export default createBoard({
  name: "DarkFooterC",
  Board: () => <DarkFooterC />,
  isSnippet: true,
});
