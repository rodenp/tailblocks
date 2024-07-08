import { createBoard } from "@wixc3/react-board";
import LightFeatureF from "../../../blocks/feature/light/f";

export default createBoard({
  name: "LightFeatureF",
  Board: () => <LightFeatureF />,
  isSnippet: true,
});
