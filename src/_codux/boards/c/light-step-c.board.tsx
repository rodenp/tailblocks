import { createBoard } from "@wixc3/react-board";
import LightStepC from "../../../blocks/step/light/c";

export default createBoard({
  name: "LightStepC",
  Board: () => <LightStepC />,
  isSnippet: true,
});
