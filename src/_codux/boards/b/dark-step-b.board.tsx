import { createBoard } from "@wixc3/react-board";
import DarkStepB from "../../../blocks/step/dark/b";

export default createBoard({
  name: "DarkStepB",
  Board: () => <DarkStepB />,
  isSnippet: true,
});
