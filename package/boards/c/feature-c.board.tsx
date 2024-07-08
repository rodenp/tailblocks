import { createBoard } from "@wixc3/react-board";
import FeatureC from "../../../icons/feature/c";

export default createBoard({
  name: "FeatureC",
  Board: () => <FeatureC />,
  isSnippet: true,
});
