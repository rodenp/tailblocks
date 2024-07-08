import { createBoard } from "@wixc3/react-board";
import HeaderD from "../../../icons/header/d";

export default createBoard({
  name: "HeaderD",
  Board: () => <HeaderD />,
  isSnippet: true,
});
