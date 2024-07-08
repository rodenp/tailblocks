import { createBoard } from "@wixc3/react-board";
import LightStepB from "../../../blocks/step/light/b";

export default createBoard({
  name: "LightStepB",
  Board: () => <LightStepB />,
  isSnippet: true,
});
