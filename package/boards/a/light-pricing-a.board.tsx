import { createBoard } from "@wixc3/react-board";
import LightPricingA from "../../../blocks/pricing/light/a";

export default createBoard({
  name: "LightPricingA",
  Board: () => <LightPricingA />,
  isSnippet: true,
});
