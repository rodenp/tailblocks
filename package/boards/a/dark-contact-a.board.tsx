import { createBoard } from "@wixc3/react-board";
import DarkContactA from "../../../blocks/contact/dark/a";

export default createBoard({
  name: "DarkContactA",
  Board: () => <DarkContactA />,
  isSnippet: true,
});
