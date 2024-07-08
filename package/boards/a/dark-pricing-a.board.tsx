import { createBoard } from "@wixc3/react-board";
import DarkPricingA from "../../../blocks/pricing/dark/a";

export default createBoard({
  name: "DarkPricingA",
  Board: () => <DarkPricingA />,
  isSnippet: true,
});
