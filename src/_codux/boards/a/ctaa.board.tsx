import { createBoard } from "@wixc3/react-board";
import CTAA from "../../../icons/cta/a";

export default createBoard({
  name: "CTAA",
  Board: () => <CTAA />,
  isSnippet: true,
});
