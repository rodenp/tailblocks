import { createBoard } from "@wixc3/react-board";
import CTAC from "../../../icons/cta/c";

export default createBoard({
  name: "CTAC",
  Board: () => <CTAC />,
  isSnippet: true,
});
