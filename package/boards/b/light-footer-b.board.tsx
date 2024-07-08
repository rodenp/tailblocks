import { createBoard } from "@wixc3/react-board";
import LightFooterB from "../../../blocks/footer/light/b";

export default createBoard({
  name: "LightFooterB",
  Board: () => <LightFooterB />,
  isSnippet: true,
});
