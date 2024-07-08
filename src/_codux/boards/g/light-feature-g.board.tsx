import { createBoard } from "@wixc3/react-board";
import LightFeatureG from "../../../blocks/feature/light/g";

export default createBoard({
  name: "LightFeatureG",
  Board: () => <LightFeatureG />,
  isSnippet: true,
});
