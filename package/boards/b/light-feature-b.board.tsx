import { createBoard } from "@wixc3/react-board";
import LightFeatureB from "../../../blocks/feature/light/b";

export default createBoard({
  name: "LightFeatureB",
  Board: () => <LightFeatureB />,
  isSnippet: true,
});
