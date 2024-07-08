import { createBoard } from "@wixc3/react-board";
import DarkContactB from "../../../blocks/contact/dark/b";

export default createBoard({
  name: "DarkContactB",
  Board: () => <DarkContactB />,
  isSnippet: true,
});
