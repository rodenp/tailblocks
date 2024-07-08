import { createBoard } from "@wixc3/react-board";
import LightStepA from "../../../blocks/step/light/a";

export default createBoard({
  name: "LightStepA",
  Board: () => <LightStepA />,
  isSnippet: true,
});
