import { createBoard } from "@wixc3/react-board";
import LightFeatureC from "../../../blocks/feature/light/c";

export default createBoard({
  name: "LightFeatureC",
  Board: () => <LightFeatureC />,
  isSnippet: true,
});
