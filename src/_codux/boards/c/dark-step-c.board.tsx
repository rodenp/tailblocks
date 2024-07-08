import { createBoard } from "@wixc3/react-board";
import DarkStepC from "../../../blocks/step/dark/c";

export default createBoard({
  name: "DarkStepC",
  Board: () => <DarkStepC />,
  isSnippet: true,
});
