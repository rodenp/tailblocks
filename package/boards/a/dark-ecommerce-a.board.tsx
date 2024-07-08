import { createBoard } from "@wixc3/react-board";
import DarkEcommerceA from "../../../blocks/ecommerce/dark/a";

export default createBoard({
  name: "DarkEcommerceA",
  Board: () => <DarkEcommerceA />,
  isSnippet: true,
});
