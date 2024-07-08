import { createBoard } from "@wixc3/react-board";
import LightPricingB from "../../../blocks/pricing/light/b";

export default createBoard({
  name: "LightPricingB",
  Board: () => <LightPricingB />,
  isSnippet: true,
});
