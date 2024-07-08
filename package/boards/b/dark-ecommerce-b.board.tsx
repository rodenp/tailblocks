import { createBoard } from "@wixc3/react-board";
import DarkEcommerceB from "../../../blocks/ecommerce/dark/b";

export default createBoard({
  name: "DarkEcommerceB",
  Board: () => <DarkEcommerceB />,
  isSnippet: true,
});
