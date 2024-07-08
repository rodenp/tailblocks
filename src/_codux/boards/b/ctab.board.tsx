import { createBoard } from "@wixc3/react-board";
import CTAB from "../../../icons/cta/b";

export default createBoard({
  name: "CTAB",
  Board: () => <CTAB />,
  isSnippet: true,
});
