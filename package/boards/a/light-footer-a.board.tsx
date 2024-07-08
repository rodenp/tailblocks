import { createBoard } from "@wixc3/react-board";
import LightFooterA from "../../../blocks/footer/light/a";

export default createBoard({
  name: "LightFooterA",
  Board: () => <LightFooterA />,
  isSnippet: true,
});
