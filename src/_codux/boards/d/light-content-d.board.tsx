import { createBoard } from "@wixc3/react-board";
import LightContentD from "../../../blocks/content/light/d";

export default createBoard({
  name: "LightContentD",
  Board: () => <LightContentD />,
  isSnippet: true,
});
