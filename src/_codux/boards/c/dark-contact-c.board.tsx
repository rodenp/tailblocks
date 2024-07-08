import { createBoard } from "@wixc3/react-board";
import DarkContactC from "../../../blocks/contact/dark/c";

export default createBoard({
  name: "DarkContactC",
  Board: () => <DarkContactC />,
  isSnippet: true,
});
