import { createBoard } from "@wixc3/react-board";
import LightFeatureE from "../../../blocks/feature/light/e";

export default createBoard({
  name: "LightFeatureE",
  Board: () => <LightFeatureE />,
  isSnippet: true,
});
