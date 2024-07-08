import { createBoard } from "@wixc3/react-board";
import FeatureA from "../../../icons/feature/a";

export default createBoard({
  name: "FeatureA",
  Board: () => <FeatureA />,
  isSnippet: true,
});
