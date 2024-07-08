import { createBoard } from "@wixc3/react-board";
import LightEcommerceA from "../../../blocks/ecommerce/light/a";

export default createBoard({
  name: "LightEcommerceA",
  Board: () => <LightEcommerceA />,
  isSnippet: true,
});
