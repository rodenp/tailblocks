import { createBoard } from "@wixc3/react-board";
import LightCTAD from "../../../blocks/cta/light/d";

export default createBoard({
  name: "LightCTAD",
  Board: () => <LightCTAD />,
  isSnippet: true,
});
