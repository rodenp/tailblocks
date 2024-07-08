import { createBoard } from "@wixc3/react-board";
import DarkFeatureF from "../../../blocks/feature/dark/f";

export default createBoard({
  name: "DarkFeatureF",
  Board: () => <DarkFeatureF />,
  isSnippet: true,
});
