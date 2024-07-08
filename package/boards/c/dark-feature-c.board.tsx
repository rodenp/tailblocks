import { createBoard } from "@wixc3/react-board";
import DarkFeatureC from "../../../blocks/feature/dark/c";

export default createBoard({
  name: "DarkFeatureC",
  Board: () => <DarkFeatureC />,
  isSnippet: true,
});
