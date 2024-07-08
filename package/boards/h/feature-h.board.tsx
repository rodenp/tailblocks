import { createBoard } from "@wixc3/react-board";
import FeatureH from "../../../icons/feature/h";

export default createBoard({
  name: "FeatureH",
  Board: () => <FeatureH />,
  isSnippet: true,
});
