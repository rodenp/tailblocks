import { createBoard } from "@wixc3/react-board";
import StepB from "../../../icons/step/b";

export default createBoard({
  name: "StepB",
  Board: () => <StepB />,
  isSnippet: true,
});
