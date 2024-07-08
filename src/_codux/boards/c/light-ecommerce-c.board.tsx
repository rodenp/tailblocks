import { createBoard } from "@wixc3/react-board";
import LightEcommerceC from "../../../blocks/ecommerce/light/c";

export default createBoard({
  name: "LightEcommerceC",
  Board: () => <LightEcommerceC />,
  isSnippet: true,
});
