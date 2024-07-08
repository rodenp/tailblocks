import { createBoard } from "@wixc3/react-board";
import FeatureF from "../../../icons/feature/f";

export default createBoard({
  name: "FeatureF",
  Board: () => <FeatureF />,
  isSnippet: true,
});
