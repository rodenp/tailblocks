import { createBoard } from "@wixc3/react-board";
import FeatureB from "../../../icons/feature/b";

export default createBoard({
  name: "FeatureB",
  Board: () => <FeatureB />,
  isSnippet: true,
});
