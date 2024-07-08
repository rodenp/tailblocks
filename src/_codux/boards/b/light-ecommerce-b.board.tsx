import { createBoard } from "@wixc3/react-board";
import LightEcommerceB from "../../../blocks/ecommerce/light/b";

export default createBoard({
  name: "LightEcommerceB",
  Board: () => <LightEcommerceB />,
  isSnippet: true,
});
