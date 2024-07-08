import { createBoard } from "@wixc3/react-board";
import LightFeatureD from "../../../blocks/feature/light/d";

export default createBoard({
  name: "LightFeatureD",
  Board: () => <LightFeatureD />,
  isSnippet: true,
});
