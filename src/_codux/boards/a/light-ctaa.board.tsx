import { createBoard } from "@wixc3/react-board";
import LightCTAA from "../../../blocks/cta/light/a";

export default createBoard({
  name: "LightCTAA",
  Board: () => <LightCTAA />,
  isSnippet: true,
});
