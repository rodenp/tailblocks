import { createBoard } from "@wixc3/react-board";
import HeaderB from "../../../icons/header/b";

export default createBoard({
  name: "HeaderB",
  Board: () => <HeaderB />,
  isSnippet: true,
});
