import { createBoard } from "@wixc3/react-board";
import LightFeatureH from "../../../blocks/feature/light/h";

export default createBoard({
  name: "LightFeatureH",
  Board: () => <LightFeatureH />,
  isSnippet: true,
});
