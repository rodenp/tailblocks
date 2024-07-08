import { createBoard } from "@wixc3/react-board";
import DarkEcommerceC from "../../../blocks/ecommerce/dark/c";

export default createBoard({
  name: "DarkEcommerceC",
  Board: () => <DarkEcommerceC />,
  isSnippet: true,
});
