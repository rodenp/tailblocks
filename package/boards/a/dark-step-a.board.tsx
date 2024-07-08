import { createBoard } from "@wixc3/react-board";
import DarkStepA from "../../../blocks/step/dark/a";

export default createBoard({
  name: "DarkStepA",
  Board: () => <DarkStepA />,
  isSnippet: true,
});
