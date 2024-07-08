import { createBoard } from "@wixc3/react-board";
import StepA from "../../../icons/step/a";

export default createBoard({
  name: "StepA",
  Board: () => <StepA />,
  isSnippet: true,
});
