import { createBoard } from "@wixc3/react-board";
import DarkFeatureG from "../../../blocks/feature/dark/g";

export default createBoard({
  name: "DarkFeatureG",
  Board: () => <DarkFeatureG />,
  isSnippet: true,
});
