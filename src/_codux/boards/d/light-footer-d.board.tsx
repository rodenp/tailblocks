import { createBoard } from "@wixc3/react-board";
import LightFooterD from "../../../blocks/footer/light/d";

export default createBoard({
  name: "LightFooterD",
  Board: () => <LightFooterD />,
  isSnippet: true,
});
