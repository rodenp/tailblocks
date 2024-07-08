import { createBoard } from "@wixc3/react-board";
import CTAD from "../../../icons/cta/d";

export default createBoard({
  name: "CTAD",
  Board: () => <CTAD />,
  isSnippet: true,
});
