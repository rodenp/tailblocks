import { createBoard } from "@wixc3/react-board";
import DarkFeatureB from "../../../blocks/feature/dark/b";

export default createBoard({
  name: "DarkFeatureB",
  Board: () => <DarkFeatureB />,
  isSnippet: true,
});
