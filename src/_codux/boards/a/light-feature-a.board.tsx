import { createBoard } from "@wixc3/react-board";
import LightFeatureA from "../../../blocks/feature/light/a";

export default createBoard({
  name: "LightFeatureA",
  Board: () => <LightFeatureA />,
  isSnippet: true,
});
