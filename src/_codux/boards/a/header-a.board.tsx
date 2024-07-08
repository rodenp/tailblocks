import { createBoard } from "@wixc3/react-board";
import HeaderA from "../../../icons/header/a";

export default createBoard({
  name: "HeaderA",
  Board: () => <HeaderA />,
  isSnippet: true,
});
