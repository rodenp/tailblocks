import { createBoard } from "@wixc3/react-board";
import StepC from "../../../icons/step/c";

export default createBoard({
  name: "StepC",
  Board: () => <StepC />,
  isSnippet: true,
});
