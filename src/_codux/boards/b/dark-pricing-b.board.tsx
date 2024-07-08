import { createBoard } from "@wixc3/react-board";
import DarkPricingB from "../../../blocks/pricing/dark/b";

export default createBoard({
  name: "DarkPricingB",
  Board: () => <DarkPricingB />,
  isSnippet: true,
});
