import { createBoard } from "@wixc3/react-board";
import DarkFeatureE from "../../../blocks/feature/dark/e";

export default createBoard({
  name: "DarkFeatureE",
  Board: () => <DarkFeatureE />,
  isSnippet: true,
});
