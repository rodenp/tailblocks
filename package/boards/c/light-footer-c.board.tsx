import { createBoard } from "@wixc3/react-board";
import LightFooterC from "../../../blocks/footer/light/c";

export default createBoard({
  name: "LightFooterC",
  Board: () => <LightFooterC />,
  isSnippet: true,
});
