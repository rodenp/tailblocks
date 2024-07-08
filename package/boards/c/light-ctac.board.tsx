import { createBoard } from "@wixc3/react-board";
import LightCTAC from "../../../blocks/cta/light/c";

export default createBoard({
  name: "LightCTAC",
  Board: () => <LightCTAC />,
  isSnippet: true,
});
