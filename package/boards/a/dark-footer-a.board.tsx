import { createBoard } from "@wixc3/react-board";
import DarkFooterA from "../../../blocks/footer/dark/a";

export default createBoard({
  name: "DarkFooterA",
  Board: () => <DarkFooterA />,
  isSnippet: true,
});
