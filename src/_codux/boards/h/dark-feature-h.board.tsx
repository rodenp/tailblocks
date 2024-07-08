import { createBoard } from "@wixc3/react-board";
import DarkFeatureH from "../../../blocks/feature/dark/h";

export default createBoard({
  name: "DarkFeatureH",
  Board: () => <DarkFeatureH />,
  isSnippet: true,
});
