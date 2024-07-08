import { createBoard } from "@wixc3/react-board";
import LightCTAB from "../../../blocks/cta/light/b";

export default createBoard({
  name: "LightCTAB",
  Board: () => <LightCTAB />,
  isSnippet: true,
});
