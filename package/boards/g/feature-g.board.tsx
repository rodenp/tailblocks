import { createBoard } from "@wixc3/react-board";
import FeatureG from "../../../icons/feature/g";

export default createBoard({
  name: "FeatureG",
  Board: () => <FeatureG />,
  isSnippet: true,
});
