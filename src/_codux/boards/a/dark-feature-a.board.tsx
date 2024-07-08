import { createBoard } from "@wixc3/react-board";
import DarkFeatureA from "../../../blocks/feature/dark/a";

export default createBoard({
  name: "DarkFeatureA",
  Board: () => <DarkFeatureA />,
  isSnippet: true,
});
