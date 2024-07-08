import { createBoard } from "@wixc3/react-board";
import DarkFooterB from "../../../blocks/footer/dark/b";

export default createBoard({
  name: "DarkFooterB",
  Board: () => <DarkFooterB />,
  isSnippet: true,
});
