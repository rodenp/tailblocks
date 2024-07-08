import { createBoard } from "@wixc3/react-board";
import HeaderC from "../../../icons/header/c";

export default createBoard({
  name: "HeaderC",
  Board: () => <HeaderC />,
  isSnippet: true,
});
