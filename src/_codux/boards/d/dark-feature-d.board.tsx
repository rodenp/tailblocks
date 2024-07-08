import { createBoard } from "@wixc3/react-board";
import DarkFeatureD from "../../../blocks/feature/dark/d";

export default createBoard({
  name: "DarkFeatureD",
  Board: () => <DarkFeatureD />,
  isSnippet: true,
});
